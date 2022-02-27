import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

import Icon from "Components/Icon/Icon";

import "./InterfaceLayout.css";
import avatar from "Ressources/Images/Avatars/john_doe.png";

const InterfaceLayout = (props) => {

  const [toggleLeftPanel, setToggleLeftPanel] = useState(false);
  const [toggleRightPanel, setToggleRightPanel] = useState(false);
  const [panelOn, setPanelOn] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

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

  return (
    <div className="interface-layout"
      style={{ 
        overflow: panelOn ? "visible" : "hidden",
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

        <div className="navigation-layout-interface">
          <div className="navigation-top-interface">
            <div className="navigation-top-interface-left-container">
              <div className="navigation-top-interface-planet-container">
                <Icon icon="Planet" iconColor="#3650AB"/>
              </div>
              <h1>Global</h1>
            </div>
            <div 
              className="navigation-top-interface-right-container"
              onClick={() => alert("clicked")}
            >
              <img 
                src={avatar}
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="navigation-bottom-mobile-interface">
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
          </div>
        </div>

        <div 
          className="interface-layout-content"
          style={{
            transform: panelOn ? "translate(0px, 0px)" : `translate(0px, -${scrollTop}px)`,
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