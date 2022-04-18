import React, { useEffect, useState } from "react";

import Icon from "Components/Icon/Icon";

import { setSelectedBookmark, setShowBookmark } from "Store/Features/navigationSlice";

import "./Bookmark.css";
import { useDispatch, useSelector } from "react-redux";

const Bookmark = (props) => {

  const dispatch = useDispatch();
  const [showUrl, setShowUrl] = useState(false);
  const selectedBookmark = useSelector((state) => (state.navigation.selectedBookmark));

  const {
    pigtailColor = "555555",
    pigtailWidth = 100,
    pigtailHeight = 100,
    pigtailStrokeWidth = 8,
    bookmarkTitleSize = 22,
    bookmarkAnchorTop = 20,
    bookmarkTitleOnly = false,
    compactBookmark = false,
    bookmarkClickable = false,
    noPigtail = false,
  } = {...props}

  // !!! RECURSIVE
  const getComments = (comments, _marginLeft = 0) => {
    return comments.map(function (comment) {
      return (
        <div style={{ marginLeft: _marginLeft }}>
          <div style={{
            backgroundColor: "pink"
          }}>
            <p>{comment.body}</p>
            <p>{comment.poster_name}</p>
          </div>
          {comment.childs.length ? getComments(comment.childs, _marginLeft + 20) : null}
        </div>
      );
    });
  }

  useEffect(() => {
    if (props.parentRef !== undefined) {
      props.setThreadHeight(props.parentRef.current.clientHeight);
    }
  });

  return (
    <div 
      className="bookmark"
      onClick={bookmarkClickable === true ? () => {
        dispatch(setSelectedBookmark(props.bookmark));
        dispatch(setShowBookmark(true));
      } : null}
    >
      {
        !noPigtail &&
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
              stroke={`#${pigtailColor}`}
              strokeWidth={pigtailStrokeWidth} 
              shapeRendering="geometricPrecision"
            />
          </svg>
        </div>
      }

      <div 
        className="bookmark-container"
        style={{
          left: noPigtail ? 0 : pigtailWidth,
          width: `calc(100% - ${noPigtail ? 0 : pigtailWidth}px)`,
          paddingTop: compactBookmark ? "2px" : "",
          paddingBottom: compactBookmark ? "2px" : "",
          paddingLeft: compactBookmark ? "10px" : "",
          paddingRight: compactBookmark ? "10px" : "",
          borderColor: bookmarkClickable === true ? ( selectedBookmark.id === props.bookmark.id ? "#6839d6" : "" ) : "",
        }}
        onClick={() => setShowUrl(!showUrl)}
      >
        <div className="bookmark-content-container">

          <p 
            className="bookmark-title"
            style={{
              fontSize: `${bookmarkTitleSize}px`,
            }}
          >
            {props.bookmark.description || "Error: No title provided"}
          </p>
          {
            !bookmarkTitleOnly &&
            <>
              <a className="bookmark-url">{props.bookmark.url}</a>
              <div className="bookmark-info">
                <div className="bookmark-stats">
                  <div>
                    <div className="bookmark-icon-container">
                      <Icon icon="Redirections"/>
                    </div>
                    <div>{props.bookmark.redirection_count}</div>
                  </div>
                  <div>
                    <div className="bookmark-icon-container">
                      <Icon icon="Upvotes"/>
                    </div>
                    <div>{props.bookmark.vote_count}</div>
                  </div>
                  <div>
                    <div className="bookmark-icon-container">
                      <Icon icon="Comments"/>
                    </div>
                    <div>{props.bookmark.comment_count}</div>
                  </div>
                </div>
                <p>{props.bookmark.created_at}</p>
              </div>
              <div className="bookmark-tags">
                {
                  props.bookmark.tags.map((tag) => {
                    return <div className="bookmark-tag">{tag.name}</div>
                  })
                }
              </div>

              {/* !!! RECURSIVE */}
              <div className="bookmark-comments">
                {getComments(props.bookmark.comments)}
              </div>
            </>  
          }

        </div>
      </div>

    </div>
  );
};
 
export default Bookmark;