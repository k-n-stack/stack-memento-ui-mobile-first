import React, { useEffect, useState } from "react";

import "./Bookmark.css";

const Bookmark = (props) => {

  const [showUrl, setShowUrl] = useState(false);

  const pigtailColor = props.pigtailColor || '#555555'
  const pigtailWidth = props.pigtailWidth || 100;
  const pigtailHeight = props.pigtailHeight || 100;
  const pigtailStrokeWidth = props.pigtailStrokeWidth || 8;

  const bookmarkTitleSize = props.bookmarkTitleSize || 18;
  const bookmarkAnchorTop = props.bookmarkAnchorTop || 20;
  const compactBookmark = props.compactBookmark || false;

  const title = props.title || "Error: No title provided";
  const _testUrl = "http://www.stack-memento.com/";

  useEffect(() => {
    props.setThreadHeight(props.parentRef.current.clientHeight);
  });

  return (
    <div 
      className="bookmark"
    >

      <div 
        className="pigtail"
        style={{
          top: `${-(pigtailHeight - bookmarkAnchorTop)}px`,
        }}
      >
        <svg 
          width={`${pigtailWidth}px`} 
          height={`${pigtailHeight}px`} 
          viewBox={`0 0 ${pigtailWidth} ${pigtailHeight}`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d={`M ${pigtailStrokeWidth / 2} 0 
              Q ${pigtailStrokeWidth / 2} ${pigtailHeight - pigtailStrokeWidth / 2},
              ${pigtailWidth} ${pigtailHeight - pigtailStrokeWidth / 2}`}
            stroke={pigtailColor}
            strokeWidth={pigtailStrokeWidth} 
            shape-rendering="geometricPrecision"
          />
        </svg>
      </div>

      <div 
        className="bookmark-container"
        style={{
          left: pigtailWidth,
          width: `calc(100% - ${pigtailWidth}px)`,
        }}
        onClick={() => setShowUrl(!showUrl)}
      >
        <h1 
          className="bookmark-title"
          style={{
            fontSize: `${bookmarkTitleSize}px`,
            marginTop: compactBookmark === false ? "" : "6px",
            marginBottom: compactBookmark === false ? "" : "6px",
          }}
        >
          {title}
        </h1>
        {showUrl && <h2 className="bookmark-url">{_testUrl}</h2>}
      </div>

    </div>
  );
};
 
export default Bookmark;