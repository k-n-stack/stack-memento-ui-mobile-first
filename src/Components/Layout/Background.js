import React from "react";

import DivBackgroundLeft   from "./BackgroundLeft";
import DivBackgroundRight  from "./BackgroundRight";
import DivBackgroundTop    from "./BackgroundTop";

import "./Background.css";

const Background = (props) => {
  return (
    <div className="background-container">
      <div className="background-sub-container">
        <div className="background-left"><DivBackgroundLeft /></div>
        <div className="background-right"><DivBackgroundRight /></div>
        <div className="background-top"><DivBackgroundTop /></div>
        {props.effect === "white" ? <div className="background-sub-overlay"></div> : null}
      </div>

    </div>
  );
};

export default Background;