import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Icon from "Components/Icon/Icon";

import { 
  setSelectedBookmark, 
  setShowBookmark, 
  setSelectedComment, 
  setSelectedCommentBookmarkId,
} from "Store/Features/navigationSlice";

import { 
  postComment 
} from "Store/Features/userSlice";

import "./Bookmark.css";
import { useDispatch, useSelector } from "react-redux";

const Bookmark = (props) => {

  const dispatch = useDispatch();
  const [showUrl, setShowUrl] = useState(false);
  const selectedBookmark = useSelector((state) => (state.navigation.selectedBookmark));
  const selectedComment = useSelector((state) => state.navigation.selectedComment);
  const selectedCommentBookmarkId = useSelector((state) => (state.navigation.selectedCommentBookmarkId));
  const [comment, setComment] = useState(false);
  const [reply, setReply] = useState(false);
  const [body, setBody] = useState('');

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
    bookmarkImage = false,
  } = {...props}

  // !!! RECURSIVE
  const getComments = (comments, bookmarkId, _marginLeft = 0) => {
    return comments.map(function (comment) {
      // console.log(comment);
      return (
        <>
          <motion.div 
            style={{ marginLeft: _marginLeft }}
            onClick={() => {
              dispatch(setSelectedComment(comment));
              dispatch(setSelectedCommentBookmarkId(bookmarkId));
              setReply(true);
              setComment(false);
            }}
            animate={{
              x: selectedComment.id === comment.id ? 2 : 0,
              backgroundColor: selectedComment.id === comment.id ? "rgb(162, 209, 253)" : "rgb(209, 232, 253)",
            }}
          >
            <div className="comment">
              <div>{comment.body}</div>
              <div className="comment-pseudonym">{comment.user.pseudonym}</div>
            </div>
          </motion.div>
          {comment.childs.length ? getComments(comment.childs, bookmarkId, _marginLeft + 20) : null}
        </>
      );
    });
  };

  const handleCommentSubmit = () => {
    console.log('here');
    if (body !== "") {
      dispatch(postComment({
        body: body,
        bookmark_id: props.bookmark.id,
        parent_id: Object.keys(selectedComment).length !== 0 ? selectedComment.id : 0,
      }));
    }
  }

  useEffect(() => {
    if (props.parentRef !== undefined) {
      props.setThreadHeight(props.parentRef.current.clientHeight);
    }
  });

  useEffect(() => {
    // console.log('comment', comment);
    // console.log('reply', reply);
    // console.log(selectedComment);
    console.log(props.bookmark.comments);
    console.log(props);
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
          <div className="bookmark-title-container">
            {
              props.bookmark.user && bookmarkImage &&
              <img src={`http://localhost:8000/api/${props.bookmark.user.image_url}`} />
            }
            <p 
              className="bookmark-title"
              style={{
                fontSize: `${bookmarkTitleSize}px`,
              }}
            >
              {props.bookmark.description || "Error: No title provided"}
            </p>
          </div>
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
              {
                props.bookmark.comments.length !== 0 &&
                <div className="bookmark-comments">
                  {getComments(props.bookmark.comments, props.bookmark.id)}
                </div>
              }

              <div className="bookmark-comment-edition-panel">
                <div
                  style={{
                    opacity: (Object.keys(selectedComment).length !== 0 && props.bookmark.id === selectedCommentBookmarkId) ? 0.5 : 1
                  }} 
                  onClick={() => {
                    setComment(true);
                    setReply(false);
                    dispatch(setSelectedComment({}));
                    dispatch(setSelectedCommentBookmarkId(0));
                  }}
                >
                  Comment
                </div>
                <div
                  style={{
                    opacity: props.bookmark.id === selectedCommentBookmarkId ? 1 : 0.5,
                  }}
                >
                  Reply
                </div>
              </div>

              <motion.div
                className="bookmark-comment-container"
                initial={{
                  height: "0px",
                }}
                animate={{
                  height: (comment || reply) ? "auto" : "0px",
                }}
              > 

                <textarea 
                  className="bookmark-comment-textarea" 
                  onChange={(event) => {
                    setBody(event.target.value);
                  }}  
                />

                <div className="bookmark-comment-validation-panel">

                  <div
                    onClick={() => {
                      handleCommentSubmit();
                    }}
                  >
                    Send
                  </div>

                  <div
                    onClick={() => {
                      setComment(false);
                      setReply(false);
                      dispatch(setSelectedComment({}));
                      dispatch(setSelectedCommentBookmarkId(0));
                    }}
                  >
                    Cancel
                  </div>

                </div>
              </motion.div>

            </>  
          }

        </div>
      </div>

    </div>
  );
};
 
export default Bookmark;