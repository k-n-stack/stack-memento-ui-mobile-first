import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Bookmark from "./Bookmark";
import ThreadDot from "Components/Svg/ThreadDot";
import ThreadLine from "Components/Svg/ThreadLine";

import "./Thread.css";
import { useDispatch } from "react-redux";

const Thread = (props) => {


  const threadRef = useRef(null);
  const [threadHeight, setThreadHeight] = useState(0);
  const [threadStaticHeight, setThreadStaticHeight] = useState(0);
  const [isExpand, setIsExpand] = useState(false);

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
  const nameContainerWidth = props.nameContainerWidth || "";
  
  const bookmarksTop = props.bookmarksTop || dotDiameter;
  const bookmarkAnchorTop = props.bookmarkAnchorTop || 20;
  const bookmarkTitleSize = props.bookmarkTitleSize || 22;
  const pigtailWidth = props.pigtailWidth || 100;
  const pigtailHeight = props.pigtailHeight || 100;

  const lineBottomY = (props.expandable === undefined ? threadHeight : threadStaticHeight) - threadStrokeWidth / 2 + bottomExtraLine;
  const lineTotalHeight = (props.expandable === undefined ? threadHeight : threadStaticHeight) + bottomExtraLine + bottomDropLength * 2 + bottomDropGap * 2;

  const bookmarksOnly = props.bookmarksOnly !== undefined;
  const bookmarkTitleOnly = props.bookmarkTitleOnly !== undefined;
  const compactBookmark = props.compactBookmark !== undefined;

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

  const variants = {
    threadLine: {
      expand: {
        height: "auto",
      }, 
      collapse: {
        height: "0px",
      },
    },
    bookmarkContainer: {
      expand: {
        height: "auto",
      },
      collapse: {
        height: "0px",
      },
    }
  }

  useEffect(() => {
    setThreadStaticHeight((props.bookmarks.length) * 31);
  }, [])

  return (
    <div className="thread" ref={threadRef}
      style={{ 
        marginBottom: `${props.noBottomLine === undefined ? bottomExtraLine + bottomDropLength * 2 + bottomDropGap * 2 : 0}px`,
      }}
      onClick={() => {
        setIsExpand(!isExpand);
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
                width: nameContainerWidth === "" ? "" : `${nameContainerWidth}px`
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
          <motion.div
            variants={props.expandable ? variants.threadLine : null}
            initial={props.expandable ? variants.threadLine.collapse : null}
            animate={props.expandable ? (isExpand ? "expand" : "collapse") : null}
            style={{
              overflow: props.expandable ? "hidden" : "",
            }}
          >
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
          </motion.div>
        }
      </div>

      <motion.div 
        className="thread-bookmarks-container"
        variants={props.expandable ? variants.bookmarkContainer : null}
        initial={props.expandable ? variants.bookmarkContainer.collapse : null}
        animate={props.expandable ? (isExpand ? "expand" : "collapse") : null}
        style={{
          marginLeft: `${dotRadius - threadStrokeWidth / 2}px`,
          marginTop: `${bookmarksTop}px`,
          overflow: props.expandable ? "hidden" : "",
        }}
      >
        {getBookmarks(props.bookmarks)}
      </motion.div>
    </div>
  ) 
};

export default Thread;