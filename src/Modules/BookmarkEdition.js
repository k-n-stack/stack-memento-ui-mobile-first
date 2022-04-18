import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BookmarkEdition.css";

import { setShowBookmark } from "Store/Features/navigationSlice";
import Icon from "Components/Icon/Icon";
import { updateBookmark } from "Store/Features/userSlice";

import { deactivateBookmark } from "Store/Features/userSlice";

const BookmarkEdition = (props) => {

  const dispatch = useDispatch();
  const titleRef = useRef();
  const urlRef = useRef();
  const selectedBookmark = useSelector((state) => (state.navigation.selectedBookmark));

  const [editTitle, setEditTitle] = useState(false);
  const [initialTitle, setInitialTitle] = useState("");
  const [title, setTitle] = useState("");

  const [editUrl, setEditUrl] = useState(false);
  const [initialUrl, setInitialUrl] = useState("");
  const [url, setUrl] = useState("");

  const handleUpdateBookmark = () => {
    setEditTitle(false);
    setEditUrl(false);
    if (title !== initialTitle) {
      dispatch(updateBookmark({ 
        id: props.bookmark.id, 
        description: title 
      }));
    }
    if (url !== initialUrl) {
      dispatch(updateBookmark({ 
        id: props.bookmark.id, 
        url: url
      }));
    }
    setTitle("");
    setUrl("");
  };

  return (
    <div className="bookmark-edition">
      <div className="bookmark-edition-top">
        <div>
          <div 
            onClick={() => {
              setEditTitle(true);
              setTitle(titleRef.current.innerHTML);
              setInitialTitle(titleRef.current.innerHTML);
            }}
          >
            Edit title
          </div>
          <div
            onClick={() => {
              setEditUrl(true);
              setUrl(urlRef.current.innerHTML);
              setInitialUrl(urlRef.current.innerHTML);
            }}
          >
            Edit link
          </div>
          <div 
            className="bookmark-edition-remove"
            onClick={() => {
              dispatch(deactivateBookmark({
                id: props.bookmark.id,
              }));
            }}
          >
            Delete bookmark
          </div>
        </div>
        <div 
          className="bookmark-edition-close-icon"
          onClick={() => {
            dispatch(setShowBookmark(false));
          }}
        >
          <Icon icon="CrossCircle" iconColor="#3650AB"/>
        </div>
      </div>

      <div className="bookmark-edition-title-url">
        {
          editTitle ?
          <input 
            className="bookmark-edition-title-input" 
            ref={titleRef} 
            value={title}
            autoFocus
            onKeyPress={(event) => {
              if (["Enter", "NumpadEnter"].includes(event.key)) {
                handleUpdateBookmark();
              }
            }}
            onBlur={() => {
              handleUpdateBookmark();
            }}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          /> :
          <div className="bookmark-edition-title" ref={titleRef}>{title || selectedBookmark.description}</div>
        }
        {
          editUrl ?
          <input 
            className="bookmark-edition-url-input" 
            ref={urlRef} 
            value={url}
            autoFocus
            onKeyPress={(event) => {
              if (["Enter", "NumpadEnter"].includes(event.key)) {
                handleUpdateBookmark();
              }
            }}
            onBlur={() => {handleUpdateBookmark();}}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          /> :
          <div className="bookmark-edition-url" ref={urlRef}>{url || selectedBookmark.url}</div>
        }
      </div>

      <div className="bookmark-edition-tags">
        <div>Add tags</div>
        <div>Delete tags</div>
      </div>

      <div className="bookmark-edition-tags-list">
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
        <div>hello</div><div>hello</div><div>hello</div><div>hello</div>
      </div>

      <div className="bookmark-edition-comments">
        <div>Validate comment</div>
        <div>Reject comment</div>
      </div>
      <div className="bookmark-edition-comments-list">
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>
        <div>hello hgwo mlkaaaenn fafoijawehf feawfjle</div>

      </div>
    </div>
  );
}

export default BookmarkEdition;