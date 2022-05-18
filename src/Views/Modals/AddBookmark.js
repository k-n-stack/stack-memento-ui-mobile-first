import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";

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
  const fullTags = useSelector((state) => (state.navigation.tags));
  const [selectedThreads, setSelectedThreads] = useState([]);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [comment, setComment] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const control = useAnimation();
  const tagsInput = useRef();

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

  const errorMessageAnimation = {
    x: [-10, 10, -10, 10, 0],
    opacity: [1, 1, 0],
    transition: {
      x: {
        duration: 0.5, 
        times: [0, 0.4, 0.6, 0.8, 1] 
      },
      opacity: {
        duration: 4.5,
        times: [0, 0.85, 1],
      }
    },
  };

  const getThreads = (threads) => {
    return threads.map((thread) => {
      return (
        <motion.div 
          onClick={() => {
            const _selectedThreads = [...selectedThreads];
            if (_selectedThreads.includes(thread.alphanumeric_id)) {
              const i = _selectedThreads.indexOf(thread.alphanumeric_id);
              if (i > -1) {
                _selectedThreads.splice(i, 1);
              }
            } else {
              _selectedThreads.push(thread.alphanumeric_id);
            }
            setSelectedThreads(_selectedThreads);
          }}
          variants={variants.thread}
          initial={variants.thread.off}
          animate={selectedThreads.includes(thread.alphanumeric_id) ? "on" : "off"}
        >
          <div className="add-bookmark-thread-list-dot-container">
            <ThreadDot 
              color={thread.color}
              dotRadius={10}
            />
          </div>
          <div className="add-bookmark-thread-list-title">{thread.title}</div>
        </motion.div>
      )
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMessage('');

    switch (true) {
      case selectedThreads.length === 0 :
        setErrorMessage(`At least one thread must be selected\n`);
        break;
      case !description :
        setErrorMessage(`A description must be provided\n`);
        break;
      case !url :
        setErrorMessage(`A url must be provided\n`);
        break;
    }

    if (!description || !url || selectedThreads.length === 0) {
      setShowError(true);
    } else {
      dispatch(postBookmarks({
        thread_anids: selectedThreads,
        url: url,
        description: description,
        comment: comment,
        tags: tags,
      }));
    }
  }

  const handleTags = (event) => {
    const _tags = event.target.value.split(" ");
    setTags(_tags);
  }

  useEffect(() => {
    if (showError) {
      control.start(errorMessageAnimation);
      setShowError(false);
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
          <input onChange={handleTags} ref={tagsInput}/>

          <div></div>
          <div className="add-bookmark-tags-container">
            {fullTags.map(function (tag) {
              return (
                <div onClick={() => {
                  const _tags = tagsInput.current.value;
                  tagsInput.current.value = `${_tags} ${tag}`;
                }}>
                  {tag}
                </div>
              );
            })}
          </div>

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

        <motion.div 
          className="add-bookmark-error"
          animate={control}
        >
          {errorMessage}
        </motion.div>

      </div>
    </div>
  );
};

export default AddBookmark;