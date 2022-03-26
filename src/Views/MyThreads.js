import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Thread from "Modules/Thread";

import "./MyThreads.css";

const MyThreads = () => {

  const threads = useSelector((state) => (state.user.threads));

  const testStyle = {
    nameSize: 16,
    dotRadius: 10,
    threadStrokeWidth: 5,
    pigtailWidth: 20,
    pigtailHeight: 20,
    bookmarkTitleSize: 16,
    bookmarkAnchorTop: 12,
    bookmarksTop: 0,
    bottomExtraLine: 1,
    bottomDropLength: 1,
    bottomDropGap: 1,
    noMenu: true,
    bookmarkTitleOnly: true,
    compactBookmark: true,
  }

  const getExpandableThreads = (threads) => {
    return threads.map((thread) => {
      return (
        <Thread 
          {...thread}
          {...testStyle}
        />
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