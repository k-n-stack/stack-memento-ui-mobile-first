import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

import "./ToggleSwitch.css";

const ToggleSwitch = (props) => {

  const [isOn, setIsOn] = useState(false);

  const toggleOnColor = "rgb(117, 168, 92)";
  const toggleOffColor = "rgb(204, 204, 204)";

  const height = props.height || 30;
  const width = props.width || 55; 

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
        style={{
          width: width,
          height: height,
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
              className="dot"
              layout
              style={{
                width: height,
                right: isOn ? 0 : "",
                left: isOn ? "" : 0,
              }}
            >
            </motion.div>
          </motion.div>
        </LayoutGroup>
      </div>

    </div>
  )
};

export default ToggleSwitch;