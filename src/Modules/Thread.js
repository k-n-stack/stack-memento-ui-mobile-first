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
  const bookmarkAnchorTop = props.bookmarkAnchorTop || 20;
  const bookmarkTitleSize = props.bookmarkTitleSize || 22;
  const pigtailWidth = props.pigtailWidth || 100;
  const pigtailHeight = props.pigtailHeight || 100;

  const lineBottomY = threadHeight - threadStrokeWidth / 2 + bottomExtraLine;
  const lineTotalHeight = threadHeight + bottomExtraLine + bottomDropLength * 2 + bottomDropGap * 2;

  const bookmarksOnly = props.bookmarksOnly !== undefined;
  const bookmarkTitleOnly = props.bookmarkTitleOnly !== undefined;
  const compactBookmark = props.compactBookmark !== undefined;

  const getBookmarks = (bookmarks) => {
    console.log(bookmarkTitleSize);

    return bookmarks.map((value) => {
      return (
        <Bookmark 
          {...value}
          pigtailColor={threadColor}
          pigtailStrokeWidth={threadStrokeWidth}
          pigtailWidth={pigtailWidth}
          pigtailHeight={pigtailHeight}
          bookmarkTitleSize={bookmarkTitleSize}
          bookmarkAnchorTop={bookmarkAnchorTop}
          compactBookmark={compactBookmark}
          setThreadHeight={getThreadHeight}
          parentRef={threadRef}
          bookmarkTitleOnly={bookmarkTitleOnly}
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
          // marginLeft: `-${dotRadius + threadStrokeWidth / 2}px`,
          marginLeft: `${dotRadius - threadStrokeWidth / 2}px`,
          marginTop: `${bookmarksTop}px`,
          height: "0px",
          overflow: "hidden"
        }}
      >
        {getBookmarks(props.bookmarks)}
      </div>
    </div>
  ) 
};

export default Thread;