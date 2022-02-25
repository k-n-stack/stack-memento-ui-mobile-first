import Background from "Components/Layout/Background";
import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

import Icon from "Components/Icon/Icon";
import Thread from "Modules/Thread";

import "./Global.css";
import fake from "Ressources/Static/fakeData.json";
import avatar from "Ressources/Images/Avatars/john_doe.png";

const Global = () => {

  const _thread = fake.thread;
  const [toggleLeftPanel, setToggleLeftPanel] = useState(false);
  const [toggleRightPanel, setToggleRightPanel] = useState(false);
  const [overflowable, setOverflowable] = useState(true);
  const [test, setTest] = useState(0);

  const testRef = useRef(null);

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

    setTest(document.documentElement.scrollTop);
    console.log(test);

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
        if (direction === "Left") {
          setToggleRightPanel(true);
          setOverflowable(false);
        } else if (direction === "Right") {
          setToggleLeftPanel(true);
          setOverflowable(false);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="global"
      style={{ overflow: overflowable ? "visible" : "hidden"}}
      ref={testRef}
    >
      <div 
        className="global-underlay-background"
        style={{
          background: overflowable ? 
            "radial-gradient(ellipse at -400% -400%, #3261cf 50%, transparent), radial-gradient(ellipse at 150% 150%, #4c0c9f -30%, white 100%)" :
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 0, 0, 0.2) 56.46%), linear-gradient(152.38deg, #3650AB 50.76%, rgba(60, 147, 174, 0.97) 94.26%)"
        }}
      />

      <motion.div 
        className="global-container"
        variants={variants.viewContainer}
        initial={variants.viewContainer.idle}
        animate={toggleLeftPanel ? "swipeRight" : toggleRightPanel ? "swipeLeft" : "idle"}
        onAnimationComplete={(animation) => {
          if (animation === "idle") {
            setOverflowable(true);
            window.scrollTo (0, 300);
          }
        }}
        style={{ overflow: overflowable ? "visible" : "hidden" }}
      >

        <div 
          className="global-container-background"
          style={{
            display: overflowable ? "none" : "block"
          }}
        />

        <div className="navigation-layout-interface" {...swipeHandlers}>
          <div className="navigation-top-interface">
            <div className="navigation-top-interface-left-container">
              <div className="navigation-top-interface-planet-container">
                <Icon icon="Planet" iconColor="#3650AB"/>
              </div>
              <h1>Global</h1>
            </div>
            <div className="navigation-top-interface-right-container">
              <img 
                src={avatar}
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="navigation-bottom-mobile-interface">
            <div>
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
          className="global-content"
          style={{
            // ICI !!!!!!!!!!!!!!!
            top: overflowable ? "0px" : `-${document.documentElement.scrollTop}px`,
          }}
        >
          <Thread 
            bookmarks={_thread.bookmarks} 
            threadColor={_thread.color}
            title={_thread.name}
            nameColor={_thread.color}
          />
          <p>hello</p><p>hello</p><p>hello</p>
          <p>hello</p><p>hello</p><p>hello</p>
          <p>hello</p><p>hello</p><p>hello</p>
          <p>hello</p><p>hello</p><p>hello</p>
          <p>hello</p><p>hello</p><p>hello</p>
          <p>hello</p><p>hello</p><p>hello</p>
          <p>hello</p><p>hello</p><p>hello</p>
          <p>hello</p><p>hello</p><p>hello</p>
          <p>hello</p><p>hello</p><p>hello</p>
          <p>hello</p><p>hello</p><p>hello</p>
        </div>

      </motion.div>
    </div>
  );
};

export default Global;