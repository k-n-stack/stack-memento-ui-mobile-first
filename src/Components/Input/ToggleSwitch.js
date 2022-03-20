import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

import "./ToggleSwitch.css";

const ToggleSwitch = (props) => {

  const [isOn, setIsOn] = useState(false);

  const toggleOnColor = "rgb(117, 168, 92)";
  const toggleOffColor = "rgb(204, 204, 204)";

  const styleClasses = {
    dot: [
      isOn ? "dot-right" : "dot-left",
    ]
  }

  return (
    <div className="toggle-switch">

      <div 
        className="switch-container"
        onClick={() => {
          setIsOn(!isOn);
          if(props.onClick !== undefined) {
            props.onClick();
          }
        }}
      >
        <LayoutGroup>
          <motion.div 
            className="switch"
            initial={{
              backgroundColor: toggleOffColor
            }}
            animate={{
              backgroundColor: isOn ? toggleOnColor : toggleOffColor
            }}
            layout
          >
            <motion.div 
              className={`dot ${styleClasses.dot.join(" ")}`}
              layout
            >
            </motion.div>
          </motion.div>
        </LayoutGroup>
      </div>

    </div>
  )
};

export default ToggleSwitch;