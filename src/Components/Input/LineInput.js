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
      />
      
      {
        props.hasIcon &&
        <div className="line-input-icon-container">
          <Icon icon="Magnifier" iconColor="black"/>
        </div>
      }
      <div 
        className="line-input-clear-container"
        onClick={() => {
          setValue("");
          inputRef.current.value = "";
        }}
      >
        {
          props.hasIcon &&
          <Icon icon="Cross" iconColor={`rgba(0, 0, 0, ${value ? "1" : "0.3"})`}/>
        }
      </div>
    </div>
  );
};

export default LineInput;