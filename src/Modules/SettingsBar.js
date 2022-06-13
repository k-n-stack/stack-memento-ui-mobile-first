import React from "react";
import { useDispatch } from "react-redux";
import Icon from "Components/Icon/Icon";
import LineInput from "Components/Input/LineInput";

import { motion } from "framer-motion";

import { setExpandSearchPanel, setExpandUserPanel } from "Store/Features/navigationSlice";

import MyThreadsSettingsContent from "Views/Settings/MyThreadsSettingsContent";
import FellowsSettingsContent from "Views/Settings/FellowsSettingsContent";
import GroupsSettingsContent from "Views/Settings/GroupsSettingsContent";
import PinnedThreadsSettingsContent from "Views/Settings/PinnedThreadsSettingsContent";

import "./SettingsBar.css";
import { useSelector } from "react-redux";
import Bookmark from "./Bookmark";
import BookmarkEdition from "./BookmarkEdition";

const SettingsBar = (props) => {

  const bookmarkProps = {

  }

  const dispatch = useDispatch();
  const view = useSelector((state) => (state.navigation.view));
  const bookmark = useSelector((state) => (state.navigation.selectedBookmark));
  const showBookmark = useSelector((state) => (state.navigation.showBookmark));

  const getContent = (view) => {
    switch (true) {
      case view === "myThreads" :
        return <MyThreadsSettingsContent />;
      case view === "pinnedThreads" :
        return <PinnedThreadsSettingsContent />;
      case view === "fellows" :
        return <FellowsSettingsContent />;
      case view === "groups" :
        return <GroupsSettingsContent />;
      default: 
        return <MyThreadsSettingsContent />;
    };
  };

  return (
    <div className="settings-bar">

      {/* BOOKMARK EDITION */}
      {/* ################ */}
      { 
        showBookmark && view === "myThreads" &&
        <div className="bookmark-edition-container">
          <BookmarkEdition bookmark={bookmark} />
        </div>
      }
      {/* ################ */}

      <div className="settings-bar-title">
        <div className="settings-bar-icon-container">
            <Icon icon="Friends" iconColor="#3650AB"/>
        </div>
        <h1>hello title</h1>
      </div>
      <div className="settings-bar-right-container">
        <div className="settings-bar-search">
            <div className="settings-bar-magnifier">
              <Icon icon="Magnifier" iconColor="#3650AB" />
            </div>
            <div className="settings-bar-advanced">
              <LineInput hasLeftIcon hasRightIcon/>
              <div 
                className="settings-bar-search-advanced"
                onClick={() => {
                  dispatch(setExpandSearchPanel(true));
                }}
              >
                <div className="settings-bar-search-advanced-icon">
                  <Icon icon="ChevronCircle" iconColor="#3650AB"/>
                </div>
                <p>Open advanced search panel</p>
              </div>
            </div>
        </div>
        <div className="settings-bar-avatar">
          <img 
            src={`${process.env.REACT_APP_API_DOMAIN}/${sessionStorage.getItem('stmn_image_url')}`}
            width="100%"
            height="100%"
            onClick={() => {
              dispatch(setExpandUserPanel(true));
            }}
          />
        </div>
      </div>
      <div className="settings-bar-content">
        {getContent(view)}
      </div>
    </div>
  )
};

export default SettingsBar;

