import React, { useState } from "react";

import { motion } from "framer-motion";
import Icon from "Components/Icon/Icon";
import LineInput from "Components/Input/LineInput";

import "./InterfaceSubNavigationBar.css";
import { useDispatch, useSelector } from "react-redux";

import { setExpandSubNavbar, setExpandSemiSub } from "Store/Features/navigationSlice";

const InterfaceSubNavigationBar = () => {

  const dispatch = useDispatch();
  const expandSubNavbar = useSelector((state) => (state.navigation.expandSubNavbar));
  const expandSemiSub = useSelector((state) => (state.navigation.expandSemiSub));

  const variants = {
    viewContainer: {
      swipeRight: {
        x: "70%",
        y: "30px",
        transition: {
          x: { type: "linear", delay: 0.1 },
          y: { type: "linear" },
        }
      },
      swipeLeft: {
        x: "-80%",
        y: "30px",
        transition: {
          x: { type: "linear", delay: 0.1 },
          y: { type: "linear" },
        }
      },
      idle: {
        x: "0%",
        y: "0px",
        transition: {
          x: { type: "linear", delay: 0.1 }, // 0.1
          y: { type: "linear" },
        }
      }
    },
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
    sortIcon: {
      expand: {
        opacity: 0,
      },
      collapse: {
        opacity: 1,
      }
    },
    interfaceSubPanel: {
      static: {
        x: "0px",
        transition: {
          duration: 0,
        }
      },
      expand: {
        x: "325px",
        transition: {
          duration: 0.7,
        }
      },
      semi: {
        x: "195px",
        transition: {
          duration: 0.7,
        },
      },
      collapse: {
        x: "0px",
        transition: {
          duration: 0.4,
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
    closeIcon: {
      expand: {
        width: "30px",
        height: "30px",
        x: -10,
        y: -50,
        transition: {
          y: {
            delay: 0.2,
            duration: 0.7,
          }
        }
      },
      collapse: {
        width: "50px",
        height: "50px",
        y: 0,
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

      interfaceSubPanel: {
        expand: {
          x: "325px",
          transition: {
            duration: 0.7,
          }
        },
        semi: {
          x: "195px",
          transition: {
            duration: 0.7,
          },
        },
        collapse: {
          x: "0px",
          transition: {
            duration: 0.4,
          }
        },
      },
    }
  }

  return (
    <motion.div 
      className="interface-sub-panel" 
      variants={variants.interfaceSubPanel}
      initial={variants.interfaceSubPanel.collapse}
      animate={(expandSemiSub ? "semi" : (expandSubNavbar ? "expand" : "collapse"))}
    >

        <motion.div 
          className="navigation-close-icon-container"
          onClick={() => {
            dispatch(setExpandSemiSub(false));
            dispatch(setExpandSubNavbar(false));
          }}
          variants={variants.closeIcon}
          initial={variants.closeIcon.collapse}
          animate={expandSubNavbar ? "expand" : "collapse"}
        >
          <Icon icon="CrossCircle" iconColor="#FFFFFF"/>
        </motion.div>
      <div className="interface-sub-panel-header">
        <div className="interface-sub-panel-icon">
          {/* <Icon icon={getSubPanelTitleIconName(selectedView)} iconColor="white"/> */}
          <Icon icon="Friends" iconColor="white"/>
        </div>
        {/* <h1>{getSubPanelTitle(selectedView)}</h1> */}
        <h1>getSubPanelTitle</h1>
      </div>
      <div className="interface-sub-panel-settings">
        <div className="interface-sub-panel-search">
          <LineInput light hasLeftIcon hasRightIcon/>
        </div>
        <div className="interface-sub-panel-sort">
          <div>Bookmarks (Desc)</div>
          <div className="interface-sub-panel-sort-icon">
            <Icon icon="Sort" iconColor="white"/>
          </div>
        </div>
      </div>
      <div className="interface-sub-panel-content">
        <p>hello</p><p>hello</p><p>hello</p><p>hello</p>
        <p>hello</p><p>hello</p><p>hello</p><p>hello</p>

      </div>
      <div className="interface-sub-panel-footer">
      </div>
    </motion.div>
  )
}

export default InterfaceSubNavigationBar;