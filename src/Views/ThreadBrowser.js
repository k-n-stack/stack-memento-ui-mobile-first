import React from "react";

import Thread from "Modules/Thread";

import { useSelector } from "react-redux";

const ThreadBrowser = () => {

  const browseThread = useSelector((state) => (state.navigation.browseThread));
  
  return (
    <>
      <Thread 
        {...browseThread}
      />
    </>
  );
};

export default ThreadBrowser;