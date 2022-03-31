import Icon from "Components/Icon/Icon";
import React, { useRef, useState } from "react";

import "./LineInput.css";

const LineInput = (props) => {

  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();

  const color = props.light !== undefined ? "#FFFFFF" : "#3650AB";
  const isPassword = props.password !== undefined;

  const iconRight = props.iconRight || "Cross";

  const styleClasses = {
    lineInput: [
      props.light !== undefined ? "line-input-light" : "line-input-dark",
      props.hasLeftIcon ? "line-input-has-left-icon" : "",
      props.hasRightIcon ? "line-input-has-right-icon" : "",
    ],
    lineInputClearContainer: [
      isPassword ? "" : (value ? "" : "line-input-clear-container-transparent"),
    ],
  }

  const reset = () => {
    setValue("");
    inputRef.current.value = "";
  };

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        type={props.password === undefined ? null : (showPassword ? "" : "password")}
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
          onClick={isPassword ? toggleVisibility : reset}
        >
          <Icon icon={isPassword ? showPassword ? "EyeCross" : "Eye" : "Cross"} iconColor={color}/>
        </div>
      }
    </div>
  );
};

export default LineInput;