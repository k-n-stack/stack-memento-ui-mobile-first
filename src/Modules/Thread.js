import React, { useRef, useState } from "react";

import Bookmark from "./Bookmark";
import ThreadDot from "Components/Svg/ThreadDot";
import ThreadLine from "Components/Svg/ThreadLine";

import "./Thread.css";

const Thread = (props) => {

  const threadRef = useRef(null);
  const [threadHeight, setThreadHeight] = useState(0);

  const threadColor = props.color ? `#${props.color}` : "#555555";
  const threadStrokeWidth = props.threadStrokeWidth || 12;

  const dotRadius = props.dotRadius || 50;
  const dotDiameter = dotRadius * 2;
  const bottomExtraLine = props.bottomExtraLine || 30;
  const bottomDropLength = props.bottomDropLength || 25;
  const bottomDropGap = props.bottomDropGap || 35;

  const nameGap = props.nameGap || 10;
  const nameSize = props.nameSize || 30;
  const nameColor = props.nameColor || "#555555"
  const menuTop = props.menuTop || 100;
  
  const bookmarksTop = props.bookmarksTop || dotDiameter;
  const bookmarkTitleSize = props.bookmarkTitleSize || 18;
  const pigtailWidth = props.pigtailWidth || 100;
  const pigtailHeight = props.pigtailHeight || 100;
  const compactBookmark = props.compactBookmark;

  const lineBottomY = threadHeight - threadStrokeWidth / 2 + bottomExtraLine;
  const lineTotalHeight = threadHeight + bottomExtraLine + bottomDropLength * 2 + bottomDropGap * 2;

  const bookmarksOnly = props.bookmarksOnly !== undefined;

  const getBookmarks = (bookmarks) => {
    return bookmarks.map((value) => {
      return (
        <Bookmark 
          {...value}
          pigtailColor={threadColor}
          pigtailStrokeWidth={threadStrokeWidth}
          pigtailWidth={pigtailWidth}
          pigtailHeight={pigtailHeight}
          bookmarkTitleSize={bookmarkTitleSize}
          compactBookmark={compactBookmark}
          setThreadHeight={getThreadHeight}
          parentRef={threadRef}
        />
      );
    });
  };

  const getThreadHeight = (height) => {
    setThreadHeight(height);
  }

  return (
    <div className="thread" ref={threadRef}
      style={{ 
        marginBottom: `${props.noBottomLine === undefined ? bottomExtraLine + bottomDropLength * 2 + bottomDropGap * 2 : 0}px`,
      }}
    >

      <div 
        className="thread-vertical-line-container"
        style={{
          width: `${dotDiameter}px`,
        }}
      >
        { !bookmarksOnly &&
          <div className="thread-dot-name">
            <ThreadDot 
              dotDiameter={dotDiameter}
              dotRadius={dotRadius}
              threadColor={threadColor}
            />
            <div 
              className="thread-name-container"
              style={{
                height: dotDiameter,
              }}
            >
              <h1 
                className="thread-name"
                style={{
                  marginLeft: nameGap,
                  fontSize: `${nameSize}px`,
                  color: nameColor,
                }}
              >
                {props.title || "Error: No thread name"}
              </h1>
            </div>
          </div>
        }

        {
          props.noMenu === undefined &&
          <div 
            className="thread-menu-container"
            style={{
              left: dotDiameter,
              top: menuTop,
            }}
          >
            <p>Menu placeholder: add a link, expend all, collapse all, quick search...</p>
          </div>
        }

        {
          props.noBottomLine === undefined &&
          <ThreadLine 
            dotDiameter={dotDiameter}
            lineTotalHeight={lineTotalHeight}
            dotRadius={dotRadius}
            lineBottomY={lineBottomY}
            threadColor={threadColor}
            threadStrokeWidth={threadStrokeWidth}
            bottomDropGap={bottomDropGap}
            bottomDropLength={bottomDropLength}
          />
        }
      </div>

      <div 
        className="thread-bookmarks-container"
        style={{
          marginLeft: `-${dotRadius + threadStrokeWidth / 2}px`,
          marginTop: `${bookmarksTop}px`,
        }}
      >
        {getBookmarks(props.bookmarks)}
      </div>
    </div>
  ) 
};

export default Thread;