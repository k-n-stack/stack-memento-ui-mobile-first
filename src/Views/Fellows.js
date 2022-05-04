import InterfaceLayout from "Modules/InterfaceLayout";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Thread from "Modules/Thread";

const Fellows = () => {

  const selectedFellow = useSelector((state) => (state.navigation.selectedFellow));

  const style = {
    multipleBookmarksThread: {
      nameSize: 20,
      dotRadius: 13,
      threadStrokeWidth: 5,
      bottomExtraLine: 10,
      bottomDropLength: 12,
      bottomDropGap: 15,
      pigtailWidth: 25,
      pigtailHeight: 25,
      bookmarksTop: 45,
      bookmarkTitleSize: 18,
      bookmarkAnchorTop: 15,
      nameContainerWidth: 270,
      noMenu: true,
      bookmarkTitleOnly: true,
      compactBookmark: true,
    },
  }

  const getFellowThreads = (fellow) => {
    if (Object.keys(fellow).length === 0) {
      return <div>Select a fellow to proceed</div>
    }

    const threads = fellow.threads;

    if (threads.length === 0) {
      return <div>No thread... please select one fellows.</div>
    }

    return threads.map(function (thread) {
      return thread !== null ? <div>
        <Thread 
          {...thread}
          {...style.multipleBookmarksThread}
        />
      </div> : null;
    });
  };

  return (
    <div>
      {getFellowThreads(selectedFellow)}
    </div>
  );
}

export default Fellows;