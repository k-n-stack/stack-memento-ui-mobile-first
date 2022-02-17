import React from "react";

import Icon from "Components/Icon/Icon";

import "./Button.css";

const Button = (props) => {
  return (
    <button className={`blue-button homepage-button-size ${props.className || ''}`}>
      {props.icon !== undefined ? <div className="button-icon-container"><Icon icon={props.icon}/></div> : null}
      <p>{props.buttonText}</p>
    </button>
  );
};

export default Button;