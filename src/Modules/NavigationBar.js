import React from "react";
import { useDispatch } from "react-redux";
import { setView } from "Store/Features/Navigation/navigationSlice";

import Icon   from "Components/Icon/Icon";
import Button from "Components/Input/Button";

import "./NavigationBar.css";

const NavigationBar = () => {

  const dispatch = useDispatch();

  return (
    <div className="navigation-layout">

      <div className="navigation-top">

        <div className="navigation-top-sub">
          <div className="navigation-logo-title">
            <div className="logo-container">
              <div className="icon-white-mobile"><Icon icon="Mascot" iconColor="white"/></div>
              <div className="icon-color-mobile"><Icon icon="MascotColor"/></div>
            </div>
            <h1>STACK-MEMENTO</h1>
          </div>
          {/* mobile */}
          <div className="robot-icon-container-mobile">
            <Icon icon="RobotCircle" iconColor="white"/>
          </div>
          {/* desktop */}
          <div className="login-button-container-desktop">
            <Button 
              buttonText="Login" 
              icon="Login"
              onClick={() => {
                dispatch(setView("login"));
              }}
            />
            <Button 
              buttonText="Register" 
              icon="Register"
              onClick={() => {
                dispatch(setView("register"));
              }}
            />
          </div>
        </div>

        <div className="navigation-top-bottom">
          <input/>
          <div className="navigation-menu">
            <a>Categories</a>
            <a>About</a>
            <a>Contact</a>
            <a>Download</a>
          </div>
        </div>

      </div>

      <div className="navigation-bottom-mobile">
        <Icon icon="NavCircle" iconColor="white"/>
      </div>

    </div>
  );
};

export default NavigationBar;