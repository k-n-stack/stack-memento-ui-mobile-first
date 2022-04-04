import React from "react";

import Icon from "Components/Icon/Icon";

import "./Button.css";

const Button = (props) => {

  const styleClasses = {
    button: [
      props.color === "green" ? "button-green" : "button-blue",
    ]
  }

  return (
    <button 
      className={`button ${styleClasses.button.join(" ")}`}
      onClick={props.onClick}
    >
      {
        props.noIcon == undefined &&
        <div className="button-icon-container">
            <Icon icon={props.icon}/>
        </div>
      }
      <p>{props.buttonText}</p>
    </button>
  );
};

export default Button;