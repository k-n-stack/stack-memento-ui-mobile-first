import React, { useEffect, useRef, useState } from "react";

import Bookmark from "./Bookmark";

import "./Thread.css";

const Thread = (props) => {

  const threadRef = useRef(null);
  const [threadHeight, setThreadHeight] = useState(0);

  const threadColor = props.threadColor || "#555555";
  const threadStrokeWidth = props.threadStrokeWidth || 12;
  const threadLineHeight = props.threadLineHeight || 200; /* dot height + line height */

  const dotRadius = props.dotRadius || 50;
  const diameter = dotRadius * 2;


  const getBookmarks = (bookmarks) => {
    return bookmarks.map((value, index) => {
      return (
        <Bookmark 
          title={value.title} 
          pigtailColor="#CCCCCC"
          pigtailStrokeWidth={threadStrokeWidth}
          setThreadHeight={getThreadHeight}
          parentRef={threadRef}
        />
      );
    });
  };

  const getThreadHeight = (height) => {
    setThreadHeight(height);
  }

  useEffect(() => {
    console.log('Thread', threadHeight);
  });

  return (
    <div className="thread" ref={threadRef}>

      <div 
        className="thread-vertical-line-container"
        style={{
          width: `${diameter}px`,
        }}
      >
        <svg 
          width={`${diameter}px`}
          height={`${diameter}px`}
          viewBox={`0 0 ${diameter} ${diameter}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={dotRadius} cy={dotRadius} r={dotRadius} fill=/*{threadColor}*/"#CCCCCC"/>
        </svg>

        <svg 
          width={`${diameter}px`}
          height={`${threadHeight}px`} 
          viewBox={`0 0 ${diameter} ${threadHeight}`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d={`M${dotRadius} ${dotRadius} L${dotRadius} ${threadHeight - threadStrokeWidth / 2}`}
            stroke={threadColor} 
            strokeWidth={threadStrokeWidth} 
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div 
        className="thread-bookmarks-container"
        style={{
          marginLeft: `-${dotRadius + threadStrokeWidth / 2}px`
        }}
      >
        {getBookmarks(props.bookmarks)}
      </div>
    </div>
  ) 
};

export default Thread;