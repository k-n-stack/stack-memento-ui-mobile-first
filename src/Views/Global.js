import Background from "Components/Layout/Background";
import React from "react";

import Icon from "Components/Icon/Icon";
import Thread from "Modules/Thread";

import "./Global.css";
import fake from "Ressources/Static/fakeData.json";
import Bookmark from "Modules/Bookmark";

const Global = () => {

  const _thread = fake.thread;

  return (
    <>
      <Background effect="white"/>
      <div className="navigation-layout-interface">

        <div className="navigation-top-interface">
          <div className="navigation-top-interface-left-container">
            <div className="navigation-top-interface-planet-container">
              <Icon icon="Planet" iconColor="#3650AB"/>
            </div>
            <h1>Global</h1>
          </div>
          <div className="navigation-top-interface-right-container">
            <Icon icon="RobotCircle" iconColor="#3650AB"/>
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
          <Thread bookmarks={_thread.bookmarks} threadColor={_thread.color}/>
        </div>
    </>
  );
};

export default Global;