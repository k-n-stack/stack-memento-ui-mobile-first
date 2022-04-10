import React, { useEffect } from "react";

import "./GroupCarousel.css";

const GroupCarousel = (props) => { 

  const getGroups = (groups) => {
    return groups.map(function (group) {
      return (
        <div className="group-carousel-image-container">
          <img src="http://localhost:8000/api/ressource-avatar/test"/>
        </div>
      );
    });
  };
  
  return (
    <div className="groups-carousel">
      {getGroups(props.groups)}
    </div>
  );
}

export default GroupCarousel;