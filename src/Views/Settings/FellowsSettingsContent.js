import React from "react";
import { useSelector } from "react-redux";

import "./FellowsSettingsContent.css";

const FellowsSettingsContent = () => {

  const selectedFellow = useSelector((state) => (state.navigation.selectedFellow));

  return (
    <div className="settings-content-fellows">
      <div className="settings-content-fellows-headers">
        <div className="settings-content-fellow-headers-infos">
          <div>name</div>
          <div>subsribed since</div>
        </div>
        <div className="settings-content-fellow-header-avatar">
          <img src={`http://localhost:8000/api/ressource/avatars/${selectedFellow}`} />
        </div>
      </div>
    </div>
  )
};

export default FellowsSettingsContent;