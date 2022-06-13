import React from "react";

import "./ImagesGroup.css";

const ImagesGroups = (props) => {

  const getGroups = (group) => {
    return group.map(function (element) {
      return (
        <div 
          className="image-group-image-container"
        >
          <img src={`${process.env.REACT_APP_API_DOMAIN}/${element.image_url}`}/>
        </div>
      );
    });
  }

  return (
    <div className="image-group">
      {getGroups(props.group)}
    </div>
  );

};

export default ImagesGroups;