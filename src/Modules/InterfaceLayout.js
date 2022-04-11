import React from "react";
import SettingsBar from "./SettingsBar";
import EditionPanel from "./EditionPanel";

import { useSelector } from "react-redux";
import ThreadDot from "Components/Svg/ThreadDot";
import ThreadLine from "Components/Svg/ThreadLine";

import "./InterfaceLayout.css";

import InterfaceNavigationBar from "./InterfaceNavigationBar";
import InterfaceSubNavigationBar from "./InterfaceSubNavigationBar";
import GlobalTopBar from "./GlobalTopBar";
import Global from "Views/Global";

const InterfaceLayout = (props) => {

  const selectedView = useSelector((state) => (state.navigation.view));

  const getSubPanelTitle = (view) => {
    switch (view) {
      case "myThreads" :
        return "My Threads";
      case "pinnedThreads" :
        return "Pinned Threads";
      case "fellows":
        return "Fellows";
      case "groups":
        return "Groups";
      default:
        return "My Threads";
    }
  }

  return (
    <div className={`interface-layout ${selectedView === "global" ? "interface-global-layout" : ""}`}>
      <div className="interface-layout-underlay-background"/>

      {

        selectedView !== "global" && selectedView !== "threadBrowser"  ?

        <>
          <div className="interface-layout-settings-bar">
            <SettingsBar />
          </div> 
          <div className="interface-layout-content">
            <EditionPanel title={getSubPanelTitle(selectedView)} />
            <div className="interface-layout-content-container">
              {props.children}
            </div>
          </div>
          <div className="interface-layout-sub-navigation-bar">
            <InterfaceSubNavigationBar />
          </div>
        </> :

        <div className="interface-layout-global">
          <div className="interface-layout-global-bar">
            <GlobalTopBar />
          </div>
          <div className="interface-layout-global-container">
            {props.children}
          </div>



        </div>

      }

      <div className="interface-layout-navigation-bar">
        <InterfaceNavigationBar />
      </div>

    </div> 
  )
};

export default InterfaceLayout;