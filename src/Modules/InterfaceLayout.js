import React from "react";
import SettingsBar from "./SettingsBar";

import "./InterfaceLayout.css";

import InterfaceNavigationBar from "./InterfaceNavigationBar";
import InterfaceSubNavigationBar from "./InterfaceSubNavigationBar";

const InterfaceLayout = (props) => {
  return (
    <div className="interface-layout">

      <div className="interface-layout-underlay-background"/>

      <div className="interface-layout-settings-bar">
        <SettingsBar />
      </div>

      <div className="interface-layout-content">
        hello this is the content
      </div>


      <div className="interface-layout-navigation-bar">
        <InterfaceNavigationBar />
      </div>

      <div className="interface-layout-sub-navigation-bar">
        <InterfaceSubNavigationBar />
      </div>

    </div>
  );
};

export default InterfaceLayout;