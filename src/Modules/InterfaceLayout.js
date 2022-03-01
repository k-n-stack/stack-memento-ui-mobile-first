import React, { useEffect, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

import Icon from "Components/Icon/Icon";

import "./InterfaceLayout.css";
import avatar from "Ressources/Images/Avatars/john_doe.png";

const InterfaceLayout = (props) => {

  const [toggleLeftPanel, setToggleLeftPanel] = useState(false);
  const [toggleRightPanel, setToggleRightPanel] = useState(false);
  const [expandNav, setExpandNav] = useState(false);
  const [isPortrait, setIsPortrait] = useState(window.matchMedia('(orientation: portrait)').matches);
  const [panelOn, setPanelOn] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  const editionRef = useRef(null);
  const subPanelRef = useRef(null);

  const hasSubPanel = props.hasSubPanel === undefined ? false : true;

  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState(0);

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
    }
  }

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

  useEffect(() => {

    setTest(editionRef.current ? editionRef.current.clientWidth : 0);
    setTest2(subPanelRef.current ? subPanelRef.current.clientWidth : 0);

    window.matchMedia("(orientation: portrait)").addEventListener("change", (event) => {
      setIsPortrait(event.matches);
    });
    window.addEventListener("resize", () => {
      setTest(editionRef.current ? editionRef.current.clientWidth : 0);
      setTest2(subPanelRef.current ? subPanelRef.current.clientWidth : 0);
    });
  }, []);

  return (
    <div className="interface-layout"
      style={{ 
        overflow: panelOn ? "visible" : "hidden",
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
            marginBottom: `calc(-100vh + ${isPortrait ? "80px" : (hasSubPanel ? "50px" : "90px")})`
          }}
        >
          <div className="navigation-top-interface"
            style={{
              marginLeft: isPortrait ? "" : (hasSubPanel ? "0px" : "55px"), 
              flexGrow: isPortrait ? "" : (hasSubPanel ? 0 : 1),
              height: isPortrait ? "80px" : (hasSubPanel ? "100vh" : "90px"),
              width: isPortrait || !hasSubPanel ? "auto" : "450px",
              flexDirection: hasSubPanel ? "column" : "row",
              
            }}
          >
            <div className="navigation-top-interface-white-background" />
            {
              !hasSubPanel &&
              <div className="navigation-top-interface-left-container">
                <div className="navigation-top-interface-planet-container">
                  <Icon icon="Planet" iconColor="#3650AB"/>
                </div>
                <h1>Global</h1>
              </div>
            }
            <div className="navigation-top-interface-right-container"
              onClick={() => {console.log(test)}}
            >
              <img 
                src={avatar}
                width="100%"
                height="100%"
              />
            </div>
          </div>



          {
            hasSubPanel && !isPortrait &&
            <>
              <div className="edition-panel" ref={editionRef}>
                <div>
                  <div className="edition-panel-icon-container">
                    <Icon icon="Plus" iconColor="#3650AB" />
                  </div>
                  <p>New thread</p>
                </div>
                <div>
                  <div className="edition-panel-icon-container">
                    <Icon icon="Plus" iconColor="#3650AB" />
                  </div>
                  <p>Add bookmark</p>
                </div>
                <div>
                  <div className="edition-panel-icon-container">
                    <Icon icon="Plus" iconColor="#3650AB" />
                  </div>
                  <p>Import/Export</p>
                </div>
              </div>


              <div className="interface-sub-panel" ref={subPanelRef}>
                hello
              </div>
            </>
          }



          <motion.div 
            className="navigation-bottom-mobile-interface"
            initial={isPortrait ? variants.navContainer.noAnimation : variants.navContainer.collapse}
            variants={variants.navContainer}
            animate={isPortrait ? "noAnimation" : expandNav ? "expand" : "collapse"}
          >
            <motion.div 
              className="navigation-arrow-icon-container"
              onClick={() => {
                setExpandNav(!expandNav);
              }}
              initial={variants.arrowIcon.collapse}
              variants={variants.arrowIcon}
              animate={expandNav ? "expand" : "collapse"}
            >
              <Icon icon="ArrowLeftCircle" iconColor="#FFFFFF"/>
            </motion.div>
            <div onClick={() => alert("clicked")}>
              <Icon icon="Global" iconColor="#96B9DA"/>
            </div>
            <div>
              <Icon icon="Pinned" iconColor="#FFFFFF"/>
            </div>
            <div>
              <Icon icon="Threads" iconColor="#FFFFFF"/>
            </div>
            <div>
              <Icon icon="Friends" iconColor="#FFFFFF"/>
            </div>
            <div>
              <Icon icon="Groups" iconColor="#FFFFFF"/>
            </div>
          </motion.div>
        </div>

        <div 
          className="interface-layout-content"
          style={{
            transform: panelOn ? "translate(0px, 0px)" : `translate(0px, -${scrollTop}px)`,
            marginLeft: isPortrait ? "" : (hasSubPanel ? `${test2 + 55}px` : "55px"),
            width: isPortrait ? "100%" : (hasSubPanel ? `${test + 80}px` : "calc(100% - 55px)"),
            minHeight: `calc(100vh - ${isPortrait ? "80px" : (hasSubPanel ? "50px" : "90px")})`,
            overflowY: isPortrait || !hasSubPanel ? "hidden" : "scroll",
            height: hasSubPanel ? "calc(100vh - 50px)" : "auto",
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