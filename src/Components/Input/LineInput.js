import Icon from "Components/Icon/Icon";
import React, { useRef, useState } from "react";

import "./LineInput.css";

const LineInput = (props) => {

  const [value, setValue] = useState("");
  const inputRef = useRef();

  const color = props.light !== undefined ? "#FFFFFF" : "#3650AB";

  const styleClasses = {
    lineInput: [
      props.light !== undefined ? "line-input-light" : "line-input-dark",
      props.hasLeftIcon ? "line-input-has-left-icon" : "",
      props.hasRightIcon ? "line-input-has-right-icon" : "",
    ],
    lineInputClearContainer: [
      value ? "" : "line-input-clear-container-transparent",
    ]
  }

  return (
    <div className="line-input-container">
      <input 
        className={`line-input ${styleClasses.lineInput.join(" ")}`}
        placeholder="Search users, threads, tags..."
        onChange={(event) => {
          if (props.onChange) {
            props.onChange(event.target.value);
          }
          setValue(event.target.value);
        }}
        ref={inputRef}
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
          className={`line-input-clear-container ${styleClasses.lineInputClearContainer.join(" ")}`}
          onClick={() => {
            setValue("");
            inputRef.current.value = "";
          }}
        >
          <Icon icon="Cross" iconColor={color}/>
        </div>
      }
    </div>
  );
};

export default LineInput;