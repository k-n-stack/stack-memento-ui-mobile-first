import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Button from "Components/Input/Button";
import ThreadDot from "Components/Svg/ThreadDot";

import "./AddBookmark.css";

const AddBookmark = () => {

  const threads = useSelector((state) => (state.user.threads));
  const [selectedThreads, setSelectedThreads] = useState([]);

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

  useEffect(() => {
    console.log(selectedThreads);
  });

  return (
    <div className="add-bookmark">
      <div className="add-bookmark-thread-list">
        {getThreads(threads)}
        {getThreads(threads)}
      </div>
      <div className="add-bookmark-form-container">
        <div className="add-bookmark-form-inputs">
          <label>Description :</label>
          <input/>

          <label>URL :</label>
          <input/>

          <div></div><div></div>

          <label>Add tag(s) :</label>
          <input/>

          <div></div>
          <div className="add-bookmark-tags-container"></div>

          <label className="add-bookmark-textarea-label">Main comment : </label>
          <textarea/>
        </div>
        <div className="add-bookmark-button-container">
          <Button noIcon buttonText="Add bookmark"/>
        </div>

      </div>
    </div>
  );
};

export default AddBookmark;