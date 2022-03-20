import React, { useState } from "react";
import InterfaceLayout from "Modules/InterfaceLayout";
import Thread from "Modules/Thread";

import fake from "Ressources/Static/fakeData.json";
import "./Global.css";
import ThreadCarousel from "Modules/ThreadsCarousel";

const Global = () => {

  const _lastCommented = fake.global.lastCommented.threads;
  const _lastBookmarks = fake.global.lastBookmarks.threads;
  const _topRedirections = fake.global.topRedirections.threads;
  const _topContributed = fake.global.topContributed.threads;
  const _topViewed = fake.global.topViewed.threads;
 
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
      {/* <div className="last-commented">
        <h1>Last commented</h1>
        <div className="last-commented-threads-container">
          {getSingleBookmarkThread(_lastCommented)}
        </div>

      </div>
      <div className="last-bookmarks">
        <h1>Last bookmarks</h1>
        <div className="last-bookmarks-threads-container">
          {getSingleBookmarkThread(_lastBookmarks)}
        </div>
      </div>
      <div className="top-redirections">
        <h1>Top redirection</h1>
        <ThreadCarousel threads={_topRedirections} />
      </div>
      <div className="top-contributed">
        <h1>Top contributed</h1>
        <ThreadCarousel threads={_topContributed} />
      </div>
      <div className="top-viewed">
        <h1>Top viewed</h1>
        <ThreadCarousel threads={_topViewed} />
      </div> */}
    </>
  );
};

export default Global;