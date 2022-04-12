import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./FellowsSub.css";

const FellowsSub = () => {

  const fellows = useSelector((state) => (state.user.friends));

  useState(() => {
    console.log("toto", fellows);
  });

  const getFellowList = (fellows) => {
    return fellows.map(function (fellow) {
      return (
        <div className="fellows-sub-list-element">
          <img src={`http://localhost:8000/api/${fellow.image_url}`} />
          <div>{fellow.pseudonym}</div>
        </div>
      )
    });
  }

  return (
    <div className="fellows-sub">
      {getFellowList(fellows)}
    </div>
  );
};

export default FellowsSub;