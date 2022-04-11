import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import InterfaceLayout from "Modules/InterfaceLayout";

import { useSelector } from "react-redux";
import Homepage from "Views/Homepage";

import Global from "Views/Global";
import MyThreads from "Views/MyThreads";
import PinnedThreads from "Views/PinnedThreads";
import Fellows from "Views/Fellows";
import Groups from "Views/Groups";
import UserPanel from "Modules/UserPanel";
import SearchPanel from "Modules/SearchPanel";
import ThreadBrowser from "Views/ThreadBrowser";

import Modal from "./Modal";

import { setUserThreads, setUserSubscribedGroups, setUserOwnGroups, setUserFriends } from "Store/Features/userSlice";
import { setGlobalThreads } from "Store/Features/globalSlice";


const Interface = () => {

  const dispatch = useDispatch();
  const view = useSelector((state) => (state.navigation.view));

  const hasSubPanel = (view) => {
    return ["myThreads", "pinnedThreads", "fellows", "groups"].includes(view) ? true : undefined;
  };

  const getPageName = (view) => {
    const pageNames = {
      global: "Global",
      myThreads: "My Threads",
      pinnedThreads: "Pinned Threads",
      fellows: "Fellows",
      groups: "Groups",
      threadBrowser: "test",
    }

    return view in pageNames ? pageNames[view] : undefined;
  }

  const getIconName = (view) => {
    const iconNames = {
      global: "Global",
      myThreads: "Threads",
      pinnedThreads: "Pinned",
      fellows: "Friends",
      groups: "Groups",
    }

    return view in iconNames ? iconNames[view] : undefined;
  };

  const viewPage = (view) => {
    switch (true) {
      case view === "global" :
        return <Global />;
      case view === "myThreads" :
        return <MyThreads />;
      case view === "pinnedThreads" :
        return <PinnedThreads />;
      case view === "fellows" :
        return <Fellows />;
      case view === "groups" :
        return <Groups />;
      case view === "threadBrowser":
        return <ThreadBrowser />;
      default: 
        return <Homepage />;
    }
  };

  useEffect(() => {
    dispatch(setUserThreads());
    dispatch(setGlobalThreads());
    dispatch(setUserSubscribedGroups());
    dispatch(setUserOwnGroups());
    dispatch(setUserFriends());
  }, []);

  return (
    <>
      <UserPanel/>
      <SearchPanel/>
      <Modal />
      <InterfaceLayout 
        hasSubPanel={hasSubPanel(view)}
        pageName={getPageName(view)}
        iconName={getIconName(view)}
      >
        {viewPage(view)}
      </InterfaceLayout>
    </>
  );
}

export default Interface;