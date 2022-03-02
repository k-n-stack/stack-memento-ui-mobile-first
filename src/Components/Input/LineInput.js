import Icon from "Components/Icon/Icon";
import React, { useRef, useState } from "react";

import "./LineInput.css";

const LineInput = () => {

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
      <div className="line-input-icon-container">
        <Icon icon="Magnifier" iconColor="#3650AB"/>
      </div>
      <div 
        className="line-input-clear-container"
        onClick={() => {
          setValue("");
          inputRef.current.value = "";
        }}
      >
        <Icon icon="Cross" iconColor={`rgba(54, 80, 171, ${value ? "1" : "0.3"})`}/>
      </div>
    </div>
  );
};

export default LineInput;