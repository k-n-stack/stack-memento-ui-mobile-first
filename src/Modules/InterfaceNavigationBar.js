import React, { useEffect, useState } from "react";
import {  motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { setExpandNavbar, setExpandSubNavbar, setExpandSemiSub } from "Store/Features/navigationSlice";

import Icon from "Components/Icon/Icon";

import { setView } from "Store/Features/navigationSlice";

import "./InterfaceNavigationBar.css";

const InterfaceNavigationBar = (props) => {

  const dispatch = useDispatch();
  const selectedView = useSelector((state) => (state.navigation.view));
  const expandSubNavbar = useSelector((state) => (state.navigation.expandSubNavbar));
  const expandNavbar = useSelector((state) => (state.navigation.expandNavbar));
  const [isSubNavbarStatic, setIsSubNavbarStatic] = useState(window.matchMedia('(min-width: 1400px)').matches);

  const variants = {
    navContainer: {
      expand: {
        width: 250,
        transition: {
          width: {
            type: "linear",
          },
        }
      },
      collapse: {
        width: "55px",
        transition: {
          width: {
            type: "linear",
            duration: 0.7
          },
        }
      },
      noAnimation: {
        width: "auto",
        transition: {
          width: {
            duration: 0,
          }
        }
      }
    },

    arrowIcon: {
      expand: {
        transform: "rotate(180deg)",
      },
      collapse: {
        transform: "rotate(0deg)",
      },
    },

    navMenuName: {
      expand: {
        display: "block",
      },
      collapse: {
        display: "none",
        transition: { delay: 0.7 }
      },
    },

    navMenuFast: {
      expand: {
        display: "block",
        height: 0,
        transition: {
          duration: 0.5,
        }
      },
      selected: {
        display: "block",
        height: 400,
        transition: {
          duration: 0.8,
        },
      },
      collapse: {
        display: "none",
        height: 0,
        transition: { 
          display: { delay: 0.7 },
          height: { delay: 0, duration: 0.7 },
        }
      },
    },

    sortIcon: {
      hide: {
        opacity: 0,
        transition: {
          duration: 0
        }
      },
      show: {
        opacity: 1,
        transition: {
          delay: 0.8
        }
      },
    },

  };

  const menus = [
    { dispatch: "global", icon: "Global", title: "Global", fastnav: null },
    { dispatch: "pinnedThreads", icon: "Pinned", title: "Pinned threads", fastnav: <div>hello pinned</div> },
    { dispatch: "myThreads", icon: "Threads", title: "My threads", fastnav: <div>hello thread</div> },
    { dispatch: "fellows", icon: "Friends", title: "Fellows", fastnav: <div>hello friend</div> },
    { dispatch: "groups", icon: "Groups", title: "Groups", fastnav: <div>hello group</div> },
  ];

  const getMenu = (menus) => {
    return menus.map(function (menu) {
      return (
        <>
          <div 
            className="interface-navigation-bar-menu-container" 
            onClick={() => { 
              dispatch(setView(menu.dispatch)); 
            }}
          >
            <div className="interface-navigation-bar-menu-icon">
              <Icon icon={menu.icon} iconColor={selectedView === menu.dispatch ? "#96B9DA" : "#FFFFFF"}/>
            </div>
            <motion.div className="interface-navigation-bar-menu-name"
              variants={variants.navMenuName}
              initial={variants.navMenuName.collapse}
              animate={isSubNavbarStatic ? undefined : expandNavbar ? "expand" : "collapse"}
              style={{ color : selectedView === menu.dispatch ? "#96B9DA" : "#FFFFFF" }}
            >
              {menu.title}
            </motion.div>
          </div>
          {
            menu.fastnav !== null &&
            <motion.div className="fast-nav"
              variants={variants.navMenuFast}
              initial={variants.navMenuFast.collapse}
              animate={expandNavbar ? (selectedView === menu.dispatch ? "selected" : "expand") : "collapse"}            
            >
              {menu.fastnav}
            </motion.div>
          }
        </>
      );
    });
  }

  const getMenuMobile = (menus) => {
    return menus.map(function (menu) {
      return (
        <>
          <div 
            className="interface-navigation-bar-menu-container" 
            onClick={() => { 
              dispatch(setView(menu.dispatch)); 
            }}
          >
            <div className="interface-navigation-bar-menu-icon">
              <Icon icon={menu.icon} iconColor={selectedView === menu.dispatch ? "#96B9DA" : "#FFFFFF"}/>
            </div>
          </div>
        </>
      );
    });
  }

  const checkLargeWidth = (event) => {
    dispatch(setExpandNavbar(false));
    dispatch(setExpandSemiSub(false));
    dispatch(setExpandSubNavbar(false));
  }

  useEffect(() => {
    const largeWidth = window.matchMedia("(min-width: 1400px)");
    largeWidth.addEventListener("change", checkLargeWidth);
    return () => {
      largeWidth.removeEventListener("change", checkLargeWidth);
    }
  });

  return (
    <>
      {/* DESKTOP */}
      <motion.div 
        className="interface-navigation-bar"
        variants={variants.navContainer}
        initial={variants.navContainer.collapse}
        animate={expandNavbar ? "expand" : "collapse"}
      > 

        {
          selectedView !== "global" && selectedView !== "threadBrowser" &&
          <motion.div 
            className="navigation-sort-icon-container"
            onClick={() => {
              dispatch(setExpandNavbar(false));
              dispatch(setExpandSubNavbar(true));
              dispatch(setExpandSemiSub(false));
            }}
            variants={variants.sortIcon}
            initial={variants.sortIcon.show}
            animate={expandSubNavbar ? "hide" : "show"}
          >
            <Icon icon="SortCircle" iconColor="#FFFFFF"/>
          </motion.div>
        }

        <motion.div 
          className="interface-navigation-bar-arrow-icon-container interface-navigation-bar-menu-icon"
          onClick={() => {
            dispatch(setExpandNavbar(!expandNavbar));
            dispatch(setExpandSubNavbar(false));
            dispatch(setExpandSemiSub(!expandNavbar));
          }}
          initial={variants.arrowIcon.collapse}
          variants={variants.arrowIcon}
          animate={expandNavbar ? "expand" : "collapse"}
        >
          <Icon icon="ArrowLeftCircle" iconColor="#FFFFFF"/>
        </motion.div>
        {getMenu(menus)}
      </motion.div>

      {/* MOBILE */}
      <div className="interface-navigation-bar-m">
        {getMenuMobile(menus)}
      </div>
    </>
  );
};

export default InterfaceNavigationBar;