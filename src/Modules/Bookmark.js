import React, { useEffect } from "react";

import "./Bookmark.css";

const Bookmark = (props) => {

  const pigtailColor = props.pigtailColor || '#555555'
  const pigtailWidth = props.pigtailWidth || 100;
  const pigtailHeight = props.pigtailHeight || 100;
  const pigtailStrokeWidth = props.pigtailStrokeWidth || 8;

  const bookmarkWidth = props.bookmarkWidth || 400; // WITH pigtail
  const bookmarkAnchorTop = props.bookmarkAnchorTop || 20;

  const title = props.title || "Error: No title provided";

  useEffect(() => {
    props.setThreadHeight(props.parentRef.current.clientHeight);
  }, []);

  return (
    <div 
      className="bookmark"
      style={{
        width: `${bookmarkWidth}px`,
      }}
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
      >
        <h1 className="bookmark-title">{title}</h1>
      </div>

    </div>
  );
};
 
export default Bookmark;