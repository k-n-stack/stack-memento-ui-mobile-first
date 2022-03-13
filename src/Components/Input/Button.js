import React from "react";

import Icon from "Components/Icon/Icon";

import "./Button.css";

const Button = (props) => {

  const backgroundColor = props.backgroundColor || "#9EB6FF";

  return (
    <button 
      className="button"
      onClick={props.onClick}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className="button-icon-container">
        <Icon icon={props.icon}/>
      </div>
      <p>{props.buttonText}</p>
    </button>
  );
};

export default Button;