import React, { useState } from "react";
import Thread from "Modules/Thread";

import "./Global.css";

const MyThreads = () => {
 
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
          threadColor={value.color}
          title={value.name}
          nameColor={value.color}
          {...style.singleBookmarkThread}
        />
      );
    });
  };

  return (
    <>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
    </>
  );
};

export default MyThreads;