import React from "react";

import "./Bookmark.css";

const Bookmark = (props) => {
  return (
    <div className="bookmark">
      <div className="pigtail">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0 Q 5 95, 100 95" stroke="black" fill="transparent" strokeWidth="10" shape-rendering="geometricPrecision"/>
        </svg>
      </div>
      <div className="bookmark-container">hello</div>
    </div>
  );
};
 
export default Bookmark;