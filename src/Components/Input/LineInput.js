import Icon from "Components/Icon/Icon";
import React, { useRef, useState } from "react";

import "./LineInput.css";

const LineInput = (props) => {

  const [value, setValue] = useState("");
  const inputRef = useRef();

  return (
    <div className="line-input-container">
      <input 
        className="line-input"
        placeholder="Search users, threads, tags..."
        onChange={(event) => {
          setValue(event.target.value);
        }}
        ref={inputRef}
        style={{
          borderBottomColor: props.inputColor,
        }}
      />
      <div className="line-input-icon-container">
        <Icon icon="Magnifier" iconColor={props.inputColor}/>
      </div>
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
        <Icon icon="Cross" iconColor={props.inputColor}/>
      </div>
    </div>
  );
};

export default LineInput;