import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BookmarkEdition.css";
import { motion } from "framer-motion";

import { setShowBookmark } from "Store/Features/navigationSlice";
import Icon from "Components/Icon/Icon";
import { deleteBookmarkTags, postBookmarkTags, updateBookmark } from "Store/Features/userSlice";

import { deactivateBookmark } from "Store/Features/userSlice";

const BookmarkEdition = (props) => {

  const dispatch = useDispatch();
  const titleRef = useRef();
  const urlRef = useRef();
  const tagsRef = useRef();
  const selectedBookmark = useSelector((state) => (state.navigation.selectedBookmark));

  const [editTitle, setEditTitle] = useState(false);
  const [initialTitle, setInitialTitle] = useState("");
  const [title, setTitle] = useState("");

  const [editUrl, setEditUrl] = useState(false);
  const [initialUrl, setInitialUrl] = useState("");
  const [url, setUrl] = useState("");

  const [editTags, setEditTags] = useState(false);
  const [tags, setTags] = useState("");

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);

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

  const handleAddTags = () => {
    const _tags = tags.split(" ");

    if (_tags.length !== 0) {
      dispatch(postBookmarkTags({
        bookmark_id: props.bookmark.id,
        tags: _tags,
      }));
    }

    setTags("");
    setEditTags(false);
  }

  const handleRemoveTags = () => {
    if (selectedTags.length !== 0) {
      dispatch(deleteBookmarkTags({
        bookmark_id: props.bookmark.id,
        tags: selectedTags,
      }));
    }
  }

  const getTags = (tags) => {
    return tags.length === 0 ? <div>Bookmark have no tag yet</div> :
      tags.map(function (tag) {
        return (
          <motion.div 
            className="bookmark-edition-tag"
            onClick={() => {
              const _selectedTags = [...selectedTags];
              if (_selectedTags.includes(tag.name)) {
                const i = _selectedTags.indexOf(tag.name);
                if (i > -1) {
                  _selectedTags.splice(i, 1);
                }
              } else {
                _selectedTags.push(tag.name);
              }
              setSelectedTags(_selectedTags);
            }}
            animate={
              selectedTags.includes(tag.name) ?
              { opacity: 0.5 } :
              { opacity: 1 }
            }
          >
            {tag.name}
          </motion.div>
        )
      });
  }

  const getComments = (comments, _marginLeft = 0) => {
    return comments.length === 0 ? <div>No comments yet</div> :
      comments.map(function (comment) {
      return (
        <motion.div 
          className="bookmark-edition-comment-container" 
          style={{ marginLeft: _marginLeft }}
          onClick={() => {
            const _selectedComments = [...selectedComments];
            if (_selectedComments.includes(comment.id)) {
              const i = _selectedComments.indexOf(comment.id);
              if (i > -1) {
                _selectedComments.splice(i, 1);
              }
            } else {
              _selectedComments.push(comment.id);
            }
            setSelectedComments(_selectedComments);
          }}
          animate={
            selectedComments.includes(comment.id) ?
            { opacity: 0.5 } :
            { opacity: 1 }
          }
        >
          <div className="bookmark-edition-comment">
            <p>{comment.body}</p>
            <p>{comment.user.pseudonym}</p>
          </div>
          {comment.childs.length ? getComments(comment.childs, _marginLeft + 20) : null}
        </motion.div>
      );
    });
  }

  useEffect(()=> {console.log(selectedComments)});

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
        <div
          onClick={() => {
            setEditTags(true)
          }}
        >
          Add tags
        </div>
        <div
          onClick={() => {
            handleRemoveTags();
          }}
        >
          Delete tags
        </div>
      </div>

      {
        editTags &&
        <input
          className="bookmark-edition-tags-input"
          ref={tagsRef}
          autoFocus
          onKeyPress={(event) => {
            if (["Enter", "NumpadEnter"].includes(event.key)) {
              handleAddTags();
            }
          }}
          onBlur={() => {handleAddTags();}}
          onChange={(event) => {
            setTags(event.target.value);
          }}
        />
      }

      <div 
        className="bookmark-edition-tags-list"
      >
        {getTags(props.bookmark.tags)}
      </div>

      <div className="bookmark-edition-comments">
        <div>Validate comment</div>
        <div>Reject comment</div>
      </div>
      <div className="bookmark-edition-comments-list">
        {getComments(props.bookmark.comments)}
      </div>
    </div>
  );
}

export default BookmarkEdition;