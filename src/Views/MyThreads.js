import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Thread from "Modules/Thread";

import "./MyThreads.css";
import { useDispatch } from "react-redux";

import { setSelectedThread } from "Store/Features/navigationSlice";

const MyThreads = () => {

  const dispatch = useDispatch();
  const threads = useSelector((state) => (state.user.threads));
  const selectedThread = useSelector((state) => (state.navigation.selectedThread));

  const threadProps = {
    nameContainerWidth: 250,
    nameSize: 16,
    dotRadius: 10,
    threadStrokeWidth: 5,
    pigtailWidth: 20,
    pigtailHeight: 20,
    bookmarkTitleSize: 16,
    bookmarkAnchorTop: 12,
    bookmarksTop: 25,
    bottomExtraLine: 1,
    bottomDropLength: 1,
    bottomDropGap: 1,
    noMenu: true,
    bookmarkTitleOnly: true,
    compactBookmark: true,
    expandable: true,
    bookmarkClickable: true,
  }

  const getExpandableThreads = (threads) => {
    return threads.map((thread) => {
      return (
        <motion.div 
          className="mythreads-thread-element"
          style={{
            opacity: thread.bookmarks.length ? 1 : 0.5,
            boxShadow: selectedThread.alphanumeric_id === thread.alphanumeric_id ? 
              "12px -5px rgba(55, 30, 194, 0.1)" :
              "unset",
          }}
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            dispatch(setSelectedThread(thread));
          }}
          animate={selectedThread.alphanumeric_id === thread.alphanumeric_id ? 
            { backgroundColor: "rgba(255, 255, 255, 0.3)" } : 
            { backgroundColor: "rgba(255, 255, 255, 0)" }
          }
        >
          <Thread 
            {...thread}
            {...threadProps}
            nameColor={selectedThread.alphanumeric_id === thread.alphanumeric_id ? "222222" : undefined}
          />
        </motion.div>
      );
    });
  };

  return (
    <>
      <div className="my-threads-threads-container">
        {getExpandableThreads(threads)}
      </div>
    </>
  );
};

export default MyThreads;