import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Thread from "Modules/Thread";

import "./Global.css";

import fakeData from "Ressources/Static/fakeData.json";
import Bookmark from "Modules/Bookmark";

const MyThreads = () => {

  const _bookmark = fakeData.bookmark;

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
    </>
  );
};

export default MyThreads;