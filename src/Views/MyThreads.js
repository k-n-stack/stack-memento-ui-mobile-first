import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Thread from "Modules/Thread";

import "./Global.css";

const MyThreads = () => {
  const userThreads = useSelector((state) => (state.user.threads));

  const testStyle = {
    nameSize: 16,
    dotRadius: 10,
    threadStrokeWidth: 5,
    pigtailWidth: 20,
    pigtailHeight: 20,
    bookmarkTitleSize: 14,
    bookmarksTop: 40,
    bottomExtraLine: 1,
    bottomDropLength: 1,
    bottomDropGap: 1,
  }

  useEffect(() => {
    
  }, []);

  return (
    <>
      <Thread 
        bookmarks={userThreads[2].bookmarks}
        title={userThreads[2].title}
        threadColor={"#"+userThreads[2].color}
        nameColor={"#"+userThreads[2].color}
        {...testStyle}
      />
    </>
  );
};

export default MyThreads;