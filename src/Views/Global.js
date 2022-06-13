import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import ThreadCarousel from "Modules/ThreadsCarousel";

import "./Global.css";

const Global = () => {

  const threads = useSelector((state) => state.global.threads);

  useEffect(() => {console.log(threads)});

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