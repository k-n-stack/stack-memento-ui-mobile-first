import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Button from "Components/Input/Button";
import ThreadDot from "Components/Svg/ThreadDot";

import "./AddBookmark.css";
import { useDispatch } from "react-redux";
import { postBookmarks } from "Store/Features/userSlice";

import { setStatus } from "Store/Features/userSlice";
import { setUserThreads, setUserSubscribedGroups, setUserOwnGroups, setUserFriends } from "Store/Features/userSlice";
import { setGlobalThreads } from "Store/Features/globalSlice";

const AddBookmark = () => {

  const dispatch = useDispatch();
  const threads = useSelector((state) => (state.user.threads));
  const status = useSelector((state) => (state.user.status));
  const [selectedThreads, setSelectedThreads] = useState([]);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [comment, setComment] = useState("");

  const variants = {
    thread: {
      on: {
        opacity: 1,
      },
      off: {
        opacity: 0.5,
      }
    }
  }

  const getThreads = (threads) => {
    return threads.map((thread) => {
      return (
        <motion.div 
          onClick={() => {
            const _selectedThreads = [...selectedThreads];
            if (_selectedThreads.includes(thread.id)) {
              const i = _selectedThreads.indexOf(thread.id);
              if (i > -1) {
                _selectedThreads.splice(i, 1);
              }
            } else {
              _selectedThreads.push(thread.id);
            }
            setSelectedThreads(_selectedThreads);
          }}
          variants={variants.thread}
          initial={variants.thread.off}
          animate={selectedThreads.includes(thread.id) ? "on" : "off"}
        >
          <div className="add-bookmark-thread-list-dot-container">
            <ThreadDot 
              threadColor={`#${thread.color}`}
              dotRadius={10}
              dotDiameter={20}
            />
          </div>
          <div className="add-bookmark-thread-list-title">{thread.title}</div>
        </motion.div>
      )
    });
  }

  const handleSubmit = () => {
    dispatch(postBookmarks({
      thread_ids: selectedThreads,
      url: url,
      description: description,
      comment: comment,
      tags: tags,
    }));
  }

  const handleTags = (event) => {
    const _tags = event.target.value.split(" ");
    setTags(_tags);
  }

  useEffect(() => {
    if (status.status === "bookmark added") {
      dispatch(setUserThreads());
      dispatch(setGlobalThreads());
      dispatch(setUserSubscribedGroups());
      dispatch(setUserOwnGroups());
      dispatch(setUserFriends());

      dispatch(setStatus(""));
    }
  });

  return (
    <div className="add-bookmark">
      <div className="add-bookmark-thread-list">
        {getThreads(threads)}
      </div>
      <div className="add-bookmark-form-container">
        <div className="add-bookmark-form-inputs">
          <label>Description :</label>
          <input onChange={(event) => {
            setDescription(event.target.value);
          }}/>

          <label>URL :</label>
          <input onChange={(event) => {
            setUrl(event.target.value);
          }}/>

          <div></div><div></div>

          <label>Add tag(s) :</label>
          <input onChange={handleTags}/>

          <div></div>
          <div className="add-bookmark-tags-container"></div>

          <label className="add-bookmark-textarea-label">Main comment : </label>
          <textarea onChange={(event) => {
            setComment(event.target.value);
          }}/>
        </div>
        <div className="add-bookmark-button-container">
          <Button 
            noIcon 
            buttonText="Add bookmark"
            onClick={handleSubmit}
          />
        </div>

      </div>
    </div>
  );
};

export default AddBookmark;