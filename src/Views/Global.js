import Background from "Components/Layout/Background";
import React from "react";

import Icon from "Components/Icon/Icon";

import "./Global.css";

import Bookmark from "Modules/Bookmark";

const Global = () => {
  return (
    <>
      <Background effect="white"/>
      <div className="navigation-layout-interface">

        <div className="navigation-top-interface">
          <div className="navigation-top-sub-interface">
            <div className="navigation-logo-title-interface">
              <div className="logo-container-interface">
                <div className="icon-white-mobile-interface"><Icon icon="Planet" iconColor="#3650AB"/></div>
              </div>
              <h1>Global</h1>
            </div>
            <div className="robot-icon-container-mobile-interface">
              <Icon icon="RobotCircle" iconColor="#3650AB"/>
            </div>
          </div>
        </div>

        <div className="navigation-bottom-mobile-interface">
          <div 
            className="left-panel-icon"
            onClick={() => alert('clicked')}
          >
            <Icon icon="ArrowLeftCircle" iconColor="#FFFFFF"/>
          </div>
        </div>

      </div>

        <div className="global-content">
          <Bookmark/>
          <Bookmark/>
          <Bookmark/>
        </div>
    </>
  );
};

export default Global;