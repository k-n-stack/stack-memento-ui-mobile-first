import React from "react";

import BackgroundLeft   from "./BackgroundLeft";
import BackgroundRight  from "./BackgroundRight";
import BackgroundTop    from "./BackgroundTop";

import "./Background.css";

const Background = () => {
  return (
    <div className="background-container">
      <div className="background-sub-container">
        <div className="background-left"><BackgroundLeft /></div>
        <div className="background-right"><BackgroundRight /></div>
        <div className="background-top"><BackgroundTop /></div>
      </div>
    </div>
  );
};

export default Background;