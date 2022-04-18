import React, { useEffect, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setView, setExpandUserPanel, setExpandSearchPanel } from "Store/Features/navigationSlice";

import Icon from "Components/Icon/Icon";

import "./InterfaceLayout.css";
import LineInput from "Components/Input/LineInput";
import ThreadDot from "Components/Svg/ThreadDot";
import ThreadLine from "Components/Svg/ThreadLine";
import EditionPanel from "./EditionPanel";

const InterfaceLayout = (props) => {

  const [toggleLeftPanel, setToggleLeftPanel] = useState(false);
  const [toggleRightPanel, setToggleRightPanel] = useState(false);
  const [expandNav, setExpandNav] = useState(false);
  const [expandSubPanel, setExpandSubPanel] = useState(false);
  const [expandSemiSub, setExpandSemiSub] = useState(false);
  const [isPortrait, setIsPortrait] = useState(window.matchMedia('(max-width: 1100px)').matches);
  const [isSubPanelStatic, setIsSubPanelStatic] = useState(window.matchMedia('(min-width: 1400px)').matches);
  const [panelOn, setPanelOn] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const [editionPanelRef, setEditionPanelRef] = useState(0);

  const subPanelRef = useRef(null);

  const dispatch = useDispatch();
  const selectedView = useSelector((state) => (state.navigation.view));
  const browseThread = useSelector((state) => (state.navigation.browseThread));

  const hasSubPanel = props.hasSubPanel === undefined ? false : true;
  const pageName = props.pageName || "Page Name";

  const [contentWidth, setContentWidth] = useState(0);
  const [contentMarginLeft, setContentMarginLeft] = useState(0);

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
    }
  }

  const getImageModule = (image) => {
    try {
      return require(`../Ressources/Images/Avatars/${image}`);
    } catch (error) {
      return require("../Ressources/Images/Avatars/default.png");
    }
  };


  const swipeHandlers = useSwipeable({
    onSwiped: (event) => {
      handleSwipeAnimation(event.dir);
    },
  });

  const handleSwipeAnimation = (direction) => {
    switch (true) {
      case toggleLeftPanel:
        if (direction === "Left") {
          setToggleLeftPanel(false);
        }
        break;
        case toggleRightPanel: 
        if (direction === "Right") {
          setToggleRightPanel(false);
        }
        break;
      case !toggleRightPanel && !toggleLeftPanel:
        setScrollTop(document.documentElement.scrollTop);
        if (direction === "Left") {
          setToggleRightPanel(true);
          setPanelOn(false);
        } else if (direction === "Right") {
          setToggleLeftPanel(true);
          setPanelOn(false);
        }
        break;
      default:
        break;
    }
  }

  const getSubPanelTitleIconName = (view) => {
    switch (view) {
      case "myThreads" :
        return "Threads";
      case "pinnedThreads" :
        return "Pinned";
      case "fellows":
        return "Friends";
      case "groups":
        return "Groups";
      default:
        return "Threads";
    }
  }

  const getSubPanelTitle = (view) => {
    switch (view) {
      case "myThreads" :
        return "My Threads";
      case "pinnedThreads" :
        return "Pinned Threads";
      case "fellows":
        return "Fellows";
      case "groups":
        return "Groups";
      default:
        return "My Threads";
    }
  }

  useEffect(() => {

    // console.log(contentMarginLeft);

    // setContentWidth(editionPanelRef.current ? editionPanelRef.current.clientWidth : 0);
    // setContentMarginLeft(subPanelRef.current ? subPanelRef.current.clientWidth : 0);

    const mediaOrientation = window.matchMedia("(max-width: 1100px)");
    const mediaLargeWidth = window.matchMedia("(min-width: 1400px)");

    mediaOrientation.addEventListener("change", checkOrientation);
    mediaLargeWidth.addEventListener("change", checkLargeWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      mediaOrientation.removeEventListener("change", checkOrientation);
      mediaLargeWidth.removeEventListener("change", checkLargeWidth);
      window.removeEventListener("resize", handleResize);
    }
  });

  const checkOrientation = (event) => {
    setIsPortrait(event.matches);
  };
  
  const checkLargeWidth = (event) => {
    setIsSubPanelStatic(event.matches);
  }
  
  const handleResize = () => {
    console.log('handle rx');
    setContentWidth(editionPanelRef.current ? editionPanelRef.current.clientWidth : 0);
    setContentMarginLeft(subPanelRef.current ? subPanelRef.current.clientWidth : 0);
    setExpandNav(false);
    setExpandSubPanel(false);
    setExpandSemiSub(false);
  };
  
  return (
    <div className="interface-layout"
      style={{ 
        // overflow: panelOn ? "visible" : "hidden",
        overflow: panelOn ? (isPortrait ? "visible" : (hasSubPanel ? "hidden" : "visible")) : "hidden",
      }}
    >
      <div 
        className="interface-layout-underlay-background"
        style={{
          background: panelOn ? 
            "radial-gradient(ellipse at -400% -400%, #3261cf 50%, transparent), radial-gradient(ellipse at 150% 150%, #4c0c9f -30%, white 100%)" :
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 0, 0, 0.2) 56.46%), linear-gradient(152.38deg, #3650AB 50.76%, rgba(60, 147, 174, 0.97) 94.26%)"
        }}
      />

      <motion.div 
        className="interface-layout-container"
        variants={variants.viewContainer}
        initial={variants.viewContainer.idle}
        animate={toggleLeftPanel ? "swipeRight" : toggleRightPanel ? "swipeLeft" : "idle"}
        onAnimationComplete={(animation) => {
          if (animation === "idle") {
            setPanelOn(true);
            window.scrollTo (0, scrollTop);
          }
        }}
        style={{ 
          overflow: panelOn ? "visible" : "hidden" 
        }}
      >

        <div 
          className="interface-layout-container-background"
          style={{
            display: panelOn ? "none" : "block"
          }}
        />

        <div 
          className="navigation-layout-interface"
          style={{
            ////////////////////////
            marginBottom: `calc(-100vh + ${isPortrait ? "80px" : (hasSubPanel ? (isSubPanelStatic ? "50px" : "80px") : "90px")})`
          }}
        >

          {
            selectedView === "threadBrowser" && !isPortrait &&
            <div className="thread-title">
              <div className="thread-title-dot-container">
                <ThreadDot
                  dotRadius={33}
                  color={browseThread.color}
                />
                <h1
                  style={{
                    color: browseThread.color,
                  }}
                >
                  Thread Title
                </h1>
              </div>
              <div className="thread-title-line-container">
                <ThreadLine
                  lineTotalHeight={150}
                  dotRadius={33}
                  lineBottomY={150}
                  color={browseThread.color}
                  threadStrokeWidth={12}
                  bottomDropGap={0}
                  bottomDropLength={0}
                />
              </div>
            </div>
          }

          <div className="navigation-top-interface"
            style={{
              marginLeft: isPortrait ? "" : (hasSubPanel ? "0px" : "55px"), 
              flexGrow: isPortrait ? "" : (hasSubPanel ? 0 : 1),
              height: isPortrait ? "80px" : (hasSubPanel ? "100vh" : "80px"),
              width: isPortrait || !hasSubPanel ? "auto" : "350px",
              flexDirection: hasSubPanel && !isPortrait ? "column" : "row",
            }}
          >
            <div className="navigation-top-interface-white-background" />
            {
              (!hasSubPanel || isPortrait) &&
              <div className="navigation-top-interface-left-container">
              {
                selectedView !== "threadBrowser" &&
                <>
                  <div className="navigation-top-interface-planet-container">
                      <Icon icon={props.iconName} iconColor="#3650AB"/>
                  </div>
                  <h1>{pageName}</h1>
                </>
              }
              </div>
            }
            <div className="navigation-top-interface-right-container">
              <div className="navigation-top-interface-search">
                {
                  isPortrait &&
                  <div className="navigation-top-interface-magnifier">
                    <Icon icon="Magnifier" iconColor="#3650AB" />
                  </div>
                }
                {
                  !isPortrait &&
                  <>
                    <LineInput hasLeftIcon hasRightIcon/>
                    <div 
                      className="navigation-top-interface-search-advanced"
                      onClick={() => {
                        dispatch(setExpandSearchPanel(true));
                      }}
                    >
                      <div className="navigation-top-interface-search-advanced-icon">
                        <Icon icon="ChevronCircle" iconColor="#3650AB"/>
                      </div>
                      <p>Open advanced search panel</p>
                    </div>
                  </>
                }
              </div>
              <div className="navigation-top-interface-avatar">
                <img 
                  src={getImageModule(sessionStorage.getItem('stmn_image_url'))}
                  width="100%"
                  height="100%"
                  onClick={() => {
                    dispatch(setExpandUserPanel(true));
                  }}
                />
              </div>
            </div>
          </div>
          {
            hasSubPanel && !isPortrait &&
            <>
              <EditionPanel 
                setEditionPanelRef={setEditionPanelRef} 
                isSubPanelStatic={isSubPanelStatic}
                title={getSubPanelTitle(selectedView)}
              />
              <motion.div 
                className="interface-sub-panel" 
                ref={subPanelRef}
                variants={variants.interfaceSubPanel}
                initial={isSubPanelStatic ? variants.interfaceSubPanel.static : variants.interfaceSubPanel.collapse}
                animate={isSubPanelStatic ? "static" : (expandSemiSub ? "semi" : (expandSubPanel ? "expand" : "collapse"))}
              >
                {
                  !isSubPanelStatic && !isPortrait &&
                  <motion.div 
                    className="navigation-close-icon-container"
                    onClick={() => {
                      setExpandSubPanel(false);
                      setExpandSemiSub(false);
                    }}
                    variants={variants.closeIcon}
                    initial={variants.closeIcon.collapse}
                    animate={expandSubPanel ? "expand" : "collapse"}
                  >
                    <Icon icon="CrossCircle" iconColor="#FFFFFF"/>
                  </motion.div>
                }
                <div className="interface-sub-panel-header">
                  <div className="interface-sub-panel-icon">
                    <Icon icon={getSubPanelTitleIconName(selectedView)} iconColor="white"/>
                  </div>
                  <h1>{getSubPanelTitle(selectedView)}</h1>
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
            </>
          }
          <motion.div 
            className="navigation-bottom-mobile-interface"
            initial={isPortrait ? variants.navContainer.noAnimation : variants.navContainer.collapse}
            variants={variants.navContainer}
            animate={isPortrait ? "noAnimation" : expandNav ? "expand" : "collapse"}
          >
            {
              hasSubPanel && !isSubPanelStatic && !isPortrait &&
              <motion.div 
                className="navigation-sort-icon-container"
                onClick={() => {
                  setExpandNav(false);
                  setExpandSemiSub(false);
                  setExpandSubPanel(true);
                }}
                variants={variants.sortIcon}
                initial={variants.sortIcon.show}
                animate={expandSubPanel ? "hide" : "show"}
              >
                <Icon icon="SortCircle" iconColor="#FFFFFF"/>
              </motion.div>
            }
            
            <motion.div 
              className="navigation-arrow-icon-container navigation-menu-icon"
              onClick={() => {
                setExpandNav(!expandNav);
                setExpandSubPanel(false);
                setExpandSemiSub(!expandNav);
              }}
              initial={variants.arrowIcon.collapse}
              variants={variants.arrowIcon}
              animate={expandNav ? "expand" : "collapse"}
            >
              <Icon icon="ArrowLeftCircle" iconColor="#FFFFFF"/>
            </motion.div>

            <div className="navigation-menu-container" onClick={() => { 
              dispatch(setView("global")); 
            }}>
              <div className="navigation-menu-icon">
                <Icon icon="Global" iconColor={selectedView === "global" ? "#96B9DA" : "#FFFFFF"}/>
              </div>
              <motion.div className="navigation-menu-name"
                variants={variants.navMenuName}
                initial={variants.navMenuName.collapse}
                animate={expandNav ? "expand" : "collapse"}
                style={{ color : selectedView === "global" ? "#96B9DA" : "#FFFFFF" }}
              >
                Explore Global
              </motion.div>
            </div>
            <div className="navigation-menu-container" onClick={() => { dispatch(setView("pinnedThreads")) }}>
              <div className="navigation-menu-icon">
                <Icon icon="Pinned" iconColor={selectedView === "pinnedThreads" ? "#96B9DA" : "#FFFFFF"}/>
              </div>
              <motion.div className="navigation-menu-name"
                variants={variants.navMenuName}
                initial={variants.navMenuName.collapse}
                animate={expandNav ? "expand" : "collapse"}
                style={{ color : selectedView === "pinnedThreads" ? "#96B9DA" : "#FFFFFF" }}
              >
                Pinned threads
              </motion.div>
            </div>
            <motion.div className="fast-nav fast-nav-pinned"
                variants={variants.navMenuFast}
                initial={variants.navMenuFast.collapse}
                animate={expandNav ? (selectedView === "pinnedThreads" ? "selected" : "expand") : "collapse"}            
            >
              <div>hello</div><div>hello</div><div>hello</div>
              <div>hello</div><div>hello</div><div>hello</div>
              <div>hello</div><div>hello</div><div>hello</div>
            </motion.div>
            <div className="navigation-menu-container" onClick={() => { dispatch(setView("myThreads")) }}>
              <div className="navigation-menu-icon">
                <Icon icon="Threads" iconColor={selectedView === "myThreads" ? "#96B9DA" : "#FFFFFF"}/>
              </div>
              <motion.div className="navigation-menu-name"
                variants={variants.navMenuName}
                initial={variants.navMenuName.collapse}
                animate={expandNav ? "expand" : "collapse"}
                style={{ color : selectedView === "myThreads" ? "#96B9DA" : "#FFFFFF" }}
              >
                My Threads
              </motion.div>
            </div>
            <motion.div className="fast-nav fast-nav-my-threads"
                variants={variants.navMenuFast}
                initial={variants.navMenuFast.collapse}
                animate={expandNav ? (selectedView === "myThreads" ? "selected" : "expand") : "collapse"}            
            >
              <div>hello</div><div>hello</div><div>hello</div>
              <div>hello</div><div>hello</div><div>hello</div>
              <div>hello</div><div>hello</div><div>hello</div>
            </motion.div>
            <div className="navigation-menu-container" onClick={() => { dispatch(setView("fellows")) }}>
              <div className="navigation-menu-icon">
                <Icon icon="Friends" iconColor={selectedView === "fellows" ? "#96B9DA" : "#FFFFFF"}/>
              </div>
              <motion.div className="navigation-menu-name"
                variants={variants.navMenuName}
                initial={variants.navMenuName.collapse}
                animate={expandNav ? "expand" : "collapse"}
                style={{ color : selectedView === "fellows" ? "#96B9DA" : "#FFFFFF" }}
              >
                Fellows
              </motion.div>
            </div>
            <motion.div className="fast-nav fast-nav-fellows"
                variants={variants.navMenuFast}
                initial={variants.navMenuFast.collapse}
                animate={expandNav ? (selectedView === "fellows" ? "selected" : "expand") : "collapse"}            
            >
              <div>hello</div><div>hello</div><div>hello</div>
              <div>hello</div><div>hello</div><div>hello</div>
              <div>hello</div><div>hello</div><div>hello</div>
            </motion.div>
            <div className="navigation-menu-container" onClick={() => { dispatch(setView("groups")) }}>
              <div className="navigation-menu-icon">
                <Icon icon="Groups" iconColor={selectedView === "groups" ? "#96B9DA" : "#FFFFFF"}/>
              </div>
              <motion.div className="navigation-menu-name"
                variants={variants.navMenuName}
                initial={variants.navMenuName.collapse}
                animate={expandNav ? "expand" : "collapse"}
                style={{ color : selectedView === "groups" ? "#96B9DA" : "#FFFFFF" }}
              >
                Groups
              </motion.div>
            </div>
            <motion.div className="fast-nav fast-nav-group"
                variants={variants.navMenuFast}
                initial={variants.navMenuFast.collapse}
                animate={expandNav ? (selectedView === "groups" ? "selected" : "expand") : "collapse"}
            >
              <div>hello</div><div>hello</div><div>hello</div>
              <div>hello</div><div>hello</div><div>hello</div>
              <div>hello</div><div>hello</div><div>hello</div>
            </motion.div>
          </motion.div>
        </div>

        <div 
          className="interface-layout-content"
          style={{
            transform: panelOn ? "translate(0px, 0px)" : `translate(0px, -${scrollTop}px)`,
            // marginLeft: isPortrait ? "" : (hasSubPanel ? `${contentMarginLeft + 55}px` : "55px"),
            marginLeft: isPortrait ? "" : (hasSubPanel && isSubPanelStatic ? `${contentMarginLeft + 55}px` : "55px"),
            width: isPortrait ? "100%" : (hasSubPanel ? `${contentWidth + 80}px` : "calc(100% - 55px)"),
            minHeight: `calc(100vh - ${isPortrait ? "80px" : (hasSubPanel ? (isSubPanelStatic ? "50px" : "80px") : "90px")})`,
            overflowY: isPortrait || !hasSubPanel ? "hidden" : "scroll", /*<---- ORIGINAL WEIRD BUG*/
            // overflowY: "scroll",
            height: hasSubPanel ? `calc(100vh - ${isSubPanelStatic ? "50px" : "80px"})` : "auto",
            padding: isPortrait || !hasSubPanel ? "" : "20px 40px 0px 50px",
          }}
          {...swipeHandlers}
        >
          {props.children}
        </div>

      </motion.div>
    </div>
  );
};

export default InterfaceLayout;