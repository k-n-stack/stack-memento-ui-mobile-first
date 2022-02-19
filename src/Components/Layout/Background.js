import React from "react";

import BackgroundLeft   from "./BackgroundLeft";
import BackgroundRight  from "./BackgroundRight";
import BackgroundTop    from "./BackgroundTop";

import "./Background.css";

const Background = (props) => {
  return (
    <div className="background-container">
      <div className="background-sub-container">
        <div className="background-left"><BackgroundLeft /></div>
        <div className="background-right"><BackgroundRight /></div>
        <div className="background-top"><BackgroundTop /></div>
        {props.effect === "white" ? <div className="background-sub-overlay"></div> : null}
      </div>

    </div>
  );
};

export default Background;