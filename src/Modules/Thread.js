import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Bookmark from "./Bookmark";
import ThreadDot from "Components/Svg/ThreadDot";
import ThreadLine from "Components/Svg/ThreadLine";

import "./Thread.css";

const Thread = (props) => {

  const threadRef = useRef(null);
  const [threadHeight, setThreadHeight] = useState(0);
  const [threadStaticHeight, setThreadStaticHeight] = useState(0);
  const [isExpand, setIsExpand] = useState(false);

  const {
    color = "555555",
    threadStrokeWidth = 12,
    dotRadius = 50,
    bottomExtraLine = 30,
    bottomDropLength = 25,
    bottomDropGap = 35,
    nameGap = 10,
    nameSize = 30,
    nameColor = "555555",
    nameContainerWidth = "",
  } = {...props}
  
  const bookmarksTop = props.bookmarksTop || dotRadius * 2;
  
  const bookmarksOnly = props.bookmarksOnly !== undefined;
  
  const bookmarkProps = {
    pigtailColor: color,
    pigtailStrokeWidth: threadStrokeWidth,
    pigtailWidth: props.pigtailWidth || 100,
    pigtailHeight: props.pigtailHeight || 100,
    bookmarkTitleSize: props.bookmarkTitleSize || 22,
    bookmarkAnchorTop: props.bookmarkAnchorTop || 20,
    setThreadHeight: props.setThreadHeight,
    parentRef: props.parentRef,
    compactBookmark: props.compactBookmark || false,
    bookmarkTitleOnly: props.bookmarkTitleOnly || false,
    bookmarkClickable: props.bookmarkClickable || false,
    bookmarkImage: props.bookmarkImage || false,
  }

  const threadLineProps = {
    lineTotalHeight: (props.expandable === undefined ? threadHeight : threadStaticHeight) + bottomExtraLine + bottomDropLength * 2 + bottomDropGap * 2,
    dotRadius: props.dotRadius || 50,
    lineBottomY: (props.expandable === undefined ? threadHeight : threadStaticHeight) - threadStrokeWidth / 2 + bottomExtraLine,
    color: color,
    threadStrokeWidth: props.threadStrokeWidth || 12,
    bottomDropGap: props.bottomDropGap || 35,
    bottomDropLength: props.bottomDropLength || 25,
  }

  const threadDotProps = {
    dotRadius: props.dotRadius || 50,
    color: color,

  }

  const getBookmarks = (bookmarks) => {
    return bookmarks.map((bookmark) => {
      return (
        <Bookmark 
        bookmark={bookmark}
        {...bookmarkProps}
        setThreadHeight={getThreadHeight}
        parentRef={threadRef}
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
        overflow: "visible",
        transition: {
          overflow : {
            delay : 0.3
          }
        }
      },
      collapse: {
        height: "0px",
        overflow: "hidden",
      },
    }
  }

  useEffect(() => {
    setThreadStaticHeight((props.bookmarks.length) * 37);
  })

  return (
    <div className="thread" ref={threadRef}
      style={{ 
        marginBottom: `${props.noBottomLine === undefined ? bottomExtraLine + bottomDropLength * 2 + bottomDropGap * 2 : 0}px`,
      }}
    >

      <div 
        className="thread-vertical-line-container"
        style={{
          width: `${dotRadius * 2}px`,
        }}
      >
        { !bookmarksOnly &&
          <div className="thread-dot-name">
            <div
              className="hello-papa"
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                setIsExpand(!isExpand);
              }}
              style={{
                width: dotRadius * 2,
                height: dotRadius * 2,
              }}
            >
              <ThreadDot 
                {...threadDotProps}
                expandable={props.bookmarks.length === 0 ? undefined : props.expandable}
                isExpand={isExpand}
              />
            </div>
            <div 
              className="thread-name-container"
              style={{
                height: dotRadius * 2,
                width: nameContainerWidth === "" ? "" : `${nameContainerWidth}px`
              }}
            >
              <h1 
                className="thread-name"
                style={{
                  marginLeft: nameGap,
                  fontSize: `${nameSize}px`,
                  color: `#${nameColor}`,
                }}
              >
                {props.title || "Error: No thread name"}
              </h1>
            </div>
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
              {...threadLineProps}
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
        }}
      >
        {
          !props.noBookmarks &&
          getBookmarks(props.bookmarks)
        }
      </motion.div>
    </div>
  ) 
};

export default Thread;