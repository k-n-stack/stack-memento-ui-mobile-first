import React, { useEffect, useState } from "react";

import Icon from "Components/Icon/Icon";

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

  const description = props.description || "Error: No title provided";
  const url = props.url || "Error: No url provided";

  // !!! RECURSIVE
  const getComments = (comments, _marginLeft = 0) => {
    return comments.map(function (comment) {
      return (
        <div style={{ marginLeft: _marginLeft }}>
          <div>{comment.body}</div>
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
        <div className="bookmark-content-container">

          <p className="bookmark-title">{description}</p>
          <a className="bookmark-url">{url}</a>
          <div className="bookmark-info">
            <div className="bookmark-stats">
              <div>
                <div className="bookmark-icon-container">
                  <Icon icon="Redirections"/>
                </div>
                <div>{props.redirection_count}</div>
              </div>
              <div>
                <div className="bookmark-icon-container">
                  <Icon icon="Upvotes"/>
                </div>
                <div>{props.vote_count}</div>
              </div>
              <div>
                <div className="bookmark-icon-container">
                  <Icon icon="Comments"/>
                </div>
                <div>{props.comment_count}</div>
              </div>
            </div>
            <p>{props.created_at}</p>
          </div>
          <div className="bookmark-tags">
            {
              props.tags.map((tag) => {
                return <div className="bookmark-tag">{tag}</div>
              })
            }
          </div>

          {/* !!! RECURSIVE */}
          <div className="bookmark-comments">
            {/* <div className="parent">hello</div>
            <div className="child">hello</div>
            <div className="child">hello</div>
            <div className="parent">hello</div>
            <div className="parent">hello</div>
            <div className="child">hello</div> */}
            {getComments(props.comments)}
          </div>

        </div>
      </div>

    </div>
  );
};
 
export default Bookmark;