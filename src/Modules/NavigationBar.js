import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setView } from "Store/Features/Navigation/navigationSlice";

import Icon   from "Components/Icon/Icon";
import Button from "Components/Input/Button";
import LineInput from "Components/Input/LineInput";

import "./NavigationBar.css";

const NavigationBar = () => {

  const dispatch = useDispatch();
  const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);
  const [isMinWidth, setIsMinWidth] = useState(window.matchMedia("(min-width: 720px)").matches);

  useEffect(() => {
    const mediaOrientation = window.matchMedia("(orientation: portrait)");
    const mediaWidth = window.matchMedia("(min-width: 720px)");

    mediaOrientation.addEventListener("change", checkOrientation);
    mediaWidth.addEventListener("change", handleResize);
    
    return () => {
      mediaOrientation.removeEventListener("change", checkOrientation);
      mediaWidth.removeEventListener("change", handleResize);
    }
  });

  const checkOrientation = (event) => {
    setIsPortrait(event.matches);
  };

  const handleResize = (event) => {
    setIsMinWidth(event.matches);
  }

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
          <div 
            className="robot-icon-container-mobile"
            onClick={() => {
              dispatch(setView("login"));
            }}
          >
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
          <div className="navigation-top-bottom-input-container">
            <LineInput 
              light={isPortrait || !isMinWidth ? true : undefined}
              hasLeftIcon 
              hasRightIcon/>
          </div>
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