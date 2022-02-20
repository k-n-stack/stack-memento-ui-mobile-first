import Background from "Components/Layout/Background";
import React, { useState } from "react";
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
          x: { type: "linear", delay: 0.1 },
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
    >
      <motion.div 
        variants={variants.viewContainer}
        initial={variants.viewContainer.idle}
        animate={toggleLeftPanel ? "swipeRight" : toggleRightPanel ? "swipeLeft" : "idle"}
        onAnimationComplete={(animation) => {
          if (animation === "idle") {
            setOverflowable(true);
          }
        }}
      >

      <>
        <Background effect="white"/>
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

          <div className="global-content">
            <div style={{width: "500px", height: "300px", backgroundColor: "aqua"}}>placeholder bottom</div>
            <Thread 
              bookmarks={_thread.bookmarks} 
              threadColor={_thread.color}
              title={_thread.name}
              nameColor={_thread.color}
            />
            <div style={{width: "500px", height: "300px", backgroundColor: "aqua"}}>placeholder bottom</div>
          </div>
          </>
      </motion.div>
    </div>
  );
};

export default Global;