import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Thread from "Modules/Thread";

import { setUserThreads } from "Store/Features/userSlice";

import "./Global.css";

const MyThreads = () => {

  const dispatch = useDispatch();
  const userThreads = useSelector((state) => (state.user.threads));
 
  const style = {
    singleBookmarkThread: {
      nameSize: 20,
      dotRadius: 13,
      threadStrokeWidth: 5,
      pigtailWidth: 25,
      pigtailHeight: 25,
      bookmarksTop: 25,
      bookmarkTitleSize: 16,
      noBottomLine: true,
      noMenu: true,
    },
  };

  const getSingleBookmarkThread = (threads) => {
    return threads.map((value) => {
      return (
        <Thread
          bookmarks={value.bookmarks}
          threadColor={"#"+value.color}
          title={value.title}
          nameColor={"#"+value.color}
          {...style.singleBookmarkThread}
        />
      );
    });
  };

  useEffect(() => {
    dispatch(setUserThreads());
    console.log(userThreads);
  }, []);

  return (
    <>
      {/* <Thread 
        bookmarks={[]}
      /> */}
      {getSingleBookmarkThread(userThreads)}
    </>
  );
};

export default MyThreads;