import React from "react";

import { useSelector } from "react-redux";
import "./MyThreadsSub.css";

const MyThreadsSub = () => {

  const threads = useSelector((state) => (state.user.threads));

  const getThreads = (threads) => {
    return Object.keys(threads).length === 0 ? <div>NO threads provided</div> :
    threads.map(function (thread) {
      return (
        <div>
          <div>
            <div>{thread.title}</div>
            <div>bookmarks: 112</div>
          </div>

          <div>
            <div>count1</div>
            <div>count2</div>
            <div>count3</div>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      {getThreads(threads)}
    </div>
  );
};

export default MyThreadsSub;