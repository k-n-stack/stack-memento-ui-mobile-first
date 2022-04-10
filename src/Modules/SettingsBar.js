import React from "react";
import { useDispatch } from "react-redux";
import Icon from "Components/Icon/Icon";
import LineInput from "Components/Input/LineInput";

import { setExpandSearchPanel, setExpandUserPanel } from "Store/Features/navigationSlice";

import "./SettingsBar.css";

const SettingsBar = (props) => {

  const dispatch = useDispatch();

  const getImageModule = (image) => {
    try {
      return require(`../Ressources/Images/Avatars/${image}`);
    } catch (error) {
      return require("../Ressources/Images/Avatars/default.png");
    }
  };

  return (
    <div className="settings-bar">
      <div className="settings-bar-title">
        <div className="settings-bar-icon-container">
            <Icon icon="Friends" iconColor="#3650AB"/>
        </div>
        <h1>hello title</h1>
      </div>
      <div className="settings-bar-right-container">
        <div className="settings-bar-search">
            <div className="settings-bar-magnifier">
              <Icon icon="Magnifier" iconColor="#3650AB" />
            </div>
            <div className="settings-bar-advanced">
              <LineInput hasLeftIcon hasRightIcon/>
              <div 
                className="settings-bar-search-advanced"
                onClick={() => {
                  dispatch(setExpandSearchPanel(true));
                }}
              >
                <div className="settings-bar-search-advanced-icon">
                  <Icon icon="ChevronCircle" iconColor="#3650AB"/>
                </div>
                <p>Open advanced search panel</p>
              </div>
            </div>
        </div>
        <div className="settings-bar-avatar">
          <img 
            src={getImageModule(sessionStorage.getItem('stmn_image_url'))}
            width="100%"
            height="100%"
            onClick={() => {
              dispatch(setExpandUserPanel(true));
            }}
          />
        </div>
      </div>
      <div className="settings-bar-content">
        {/* PUT CONTENT HERE */}
      </div>
    </div>
  )
};

export default SettingsBar;

