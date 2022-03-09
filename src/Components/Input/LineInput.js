import Icon from "Components/Icon/Icon";
import React, { useRef, useState } from "react";

import "./LineInput.css";

const LineInput = (props) => {

  const [value, setValue] = useState("");
  const inputRef = useRef();

  const color = props.light !== undefined ? "#FFFFFF" : "#3650AB";

  return (
    <div className="line-input-container">
      <input 
        className={`line-input ${props.light !== undefined ? "light-input" : "dark-input"}`}
        placeholder="Search users, threads, tags..."
        onChange={(event) => {
          setValue(event.target.value);
        }}
        ref={inputRef}
        style={{
          borderBottomColor: color,
          paddingLeft: props.hasLeftIcon ? "1.75rem" : "",
          paddingRight: props.hasRightIcon ? "1.45rem" : "",
          color: color,
        }}
      />
      {
        props.hasLeftIcon !== undefined &&
        <div className="line-input-icon-container">
          <Icon icon="Magnifier" iconColor={color}/>
        </div>
      }
      {
        props.hasRightIcon !== undefined &&
        <div 
          className="line-input-clear-container"
          onClick={() => {
            setValue("");
            inputRef.current.value = "";
          }}
          style={{
            opacity: value ? 1 : 0.3,
          }}
        >
          <Icon icon="Cross" iconColor={color}/>
        </div>
      }
    </div>
  );
};

export default LineInput;