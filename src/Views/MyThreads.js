import React, { useState } from "react";
import InterfaceLayout from "Modules/InterfaceLayout";
import Thread from "Modules/Thread";

import fake from "Ressources/Static/fakeData.json";
import "./Global.css";
import ThreadCarousel from "Modules/ThreadsCarousel";

const MyThreads = () => {

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
    <InterfaceLayout
      hasSubPanel
    >
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
    </InterfaceLayout>
  );
};

export default MyThreads;