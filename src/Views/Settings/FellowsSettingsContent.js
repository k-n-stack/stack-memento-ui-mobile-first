import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./FellowsSettingsContent.css";

const FellowsSettingsContent = () => {

  const selectedFellow = useSelector((state) => (state.navigation.selectedFellow));

  useEffect(() => {console.log(selectedFellow)});

  return (
    <div className="settings-content-fellows">
      <div className="settings-content-fellows-headers">
        <div className="settings-content-fellow-headers-infos">
          <div className="settings-content-fellow-headers-infos-pseudonym">
            {selectedFellow.pseudonym || "Pseudonym"}
          </div>
          <div>Register since : {selectedFellow.register_date}</div>
          <div>Last Bookmark : {selectedFellow.register_date}</div>
          <div>Last Comment : {selectedFellow.register_date}</div>
        </div>
        <div className="settings-content-fellow-header-avatar">
          { 
            Object.keys(selectedFellow).length !== 0 &&
            <img src={`http://localhost:8000/api/ressource/avatars/${selectedFellow.alphanumeric_id}`} />
          }
        </div>
      </div>
    </div>
  )
};

export default FellowsSettingsContent;