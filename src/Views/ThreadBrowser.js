import React from "react";

import Thread from "Modules/Thread";

import { useSelector } from "react-redux";

import "./ThreadBrowser.css";

const ThreadBrowser = () => {

  const browseThread = useSelector((state) => (state.navigation.browseThread));

  const style = {
    multipleBookmarksThread: {
      nameSize: 20,
      dotRadius: 33,
      pigtailWidth: 60,
      pigtailHeight: 60,
      bookmarksTop: 40,
      noMenu: true,
      bookmarksOnly: true,
    },
  }
  
  return (
    <>
      <div className="thread-browser-left-container">
        <Thread 
          {...browseThread}
          {...style.multipleBookmarksThread}
        />
      </div>
    </>
  );
};

export default ThreadBrowser;