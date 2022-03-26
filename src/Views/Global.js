import React, { useState } from "react";
import InterfaceLayout from "Modules/InterfaceLayout";
import Thread from "Modules/Thread";

import fake from "Ressources/Static/fakeData.json";
import "./Global.css";
import ThreadCarousel from "Modules/ThreadsCarousel";
import { useSelector } from "react-redux";

const Global = () => {

  const _lastCommented = fake.global.lastCommented.threads;
  const _lastBookmarks = fake.global.lastBookmarks.threads;
  const _topRedirections = fake.global.topRedirections.threads;
  const _topContributed = fake.global.topContributed.threads;
  const _topViewed = fake.global.topViewed.threads;

  const threads = useSelector((state) => state.global.threads);
 
  const style = {
    singleBookmarkThread: {
      nameSize: 20,
      dotRadius: 13,
      threadStrokeWidth: 5,
      pigtailWidth: 25,
      pigtailHeight: 25,
      bookmarksTop: 25,
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
      <div className="top-redirections">
        <h1>Top redirection</h1>
        <ThreadCarousel threads={threads} />
      </div>
    </>
  );
};

export default Global;