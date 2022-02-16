import React from "react";

import Icon from "../Components/Icon/Icon";
import Button from "../Components/Input/Button";

import "./Navigation.css";

const Navigation = () => {
  return (
      <div className="navigation-layout">
        <div className="navigation-top">
        
          <div className="navigation-top-sub">
            <div className="title-logo">
              <div className="logo-container">
                <div className="icon-white"><Icon icon="Mascot" /></div>
                <div className="icon-color"><Icon icon="MascotColor" /></div>
              </div>
              <h1>STACK-MEMENTO</h1>
            </div>

            {/* mobile */}
            <div className="robot-icon-container">
              <Icon icon="RobotCircle"/>
            </div>

            {/* desktop */}
            <div className="login-button-container">
              <Button buttonText="Login" icon="Login"/>
              <Button buttonText="Register" icon="Register"/>
            </div>
          </div>

          <div className="navigation-top-input">
            <input/>
            <div className="navigation-menu">
              <a>Categories</a>
              <a>About</a>
              <a>Contact</a>
              <a>Download</a>
            </div>
          </div>

        </div>

        <div className="navigation-bottom">
          <Icon icon="NavCircle"/>
        </div>

      </div>
  );
};

export default Navigation;