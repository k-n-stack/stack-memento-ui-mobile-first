import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./FellowsSettingsContent.css";

import Icon from "Components/Icon/Icon";
import ThreadDot from "Components/Svg/ThreadDot";

const FellowsSettingsContent = () => {

  const selectedFellow = useSelector((state) => (state.navigation.selectedFellow));

  const testStyle = {
    nameSize: 16,
    dotRadius: 10,
    threadStrokeWidth: 5,
    pigtailWidth: 20,
    pigtailHeight: 20,
    bookmarkTitleSize: 16,
    bookmarkAnchorTop: 12,
    bookmarksTop: 0,
    bottomExtraLine: 1,
    bottomDropLength: 1,
    bottomDropGap: 1,
    noMenu: true,
    bookmarkTitleOnly: true,
    compactBookmark: true,
    noBookmarks: true,
  }

  const getThreads = (threads) => {
    return threads === undefined ? <div>User has no thread</div> :
    threads.map(function (thread) {
      return thread !== null ?
        <div className="settings-content-thread-list-element">
          <div className="settings-thread-dot">
            <ThreadDot 
              dotRadius={12}
              color={thread.color}
            />
          </div>
          <div className="settings-thread-title">{thread.title}</div>
          <div className="bookmark-count">{thread.bookmarks.length}&nbsp;<span className="thread-list-element-small">Bookmarks</span></div>
        </div> :
        null
    });
  }

  return (
    <div className="settings-content-fellows">
      <div className="settings-content-fellows-headers">
        <div className="settings-content-fellow-headers-infos">
          <div className="settings-content-fellow-headers-infos-pseudonym">
            {selectedFellow.pseudonym || "Pseudonym"}
          </div>
          <div>Register since : </div>
          <div className="settings-content-fellow-headers-infos-date">
            {selectedFellow.register_date || "No user selected"}
          </div>
          <div>Last Bookmark : </div>
          <div className="settings-content-fellow-headers-infos-date">
            {selectedFellow.last_bookmark || "No bookmark yet"}
          </div>
          <div>Last Comment : </div>
          <div className="settings-content-fellow-headers-infos-date">
            {selectedFellow.last_comment || "No comment yet"}
          </div>
        </div>
        <div className="settings-content-fellow-header-avatar">
          { 
            Object.keys(selectedFellow).length !== 0 &&
            <img src={`${process.env.REACT_APP_API_DOMAIN}/ressource/avatars/${selectedFellow.alphanumeric_id}`} />
          }
        </div>
      </div>

      <div className="settings-content-fellow-sub-header">
        <div className="settings-content-fellow-sub-header-left">
          <div>
            <div className="settings-content-fellow-sub-header-left-text">Threads :&nbsp;</div>
            <div>{selectedFellow.total_threads}</div>
          </div>
          <div>
            <div className="settings-content-fellow-sub-header-left-text">Bookmarks :&nbsp;</div>
            <div>{selectedFellow.total_bookmarks}</div>
          </div>
        </div>

        <div className="settings-content-fellow-sub-header-right">
          <div>
            <div>{selectedFellow.total_redirections || 0}</div>
            <div className="settings-content-fellow-sub-header-icon">
              <Icon icon="Redirections" />
            </div>
          </div>
          <div>
            <div>{selectedFellow.total_votes || 0}</div>
            <div className="settings-content-fellow-sub-header-icon">
              <Icon icon="Upvotes" />
            </div>
          </div>
          <div>
            <div>{selectedFellow.total_comments || 0}</div>
            <div className="settings-content-fellow-sub-header-icon">
              <Icon icon="Comments" />
            </div>
          </div>
        </div>
      </div>
      <div className="settings-content-fellow-threads-title">Fellow threads</div>
      <div className="settings-content-fellow-threads">
        {getThreads(selectedFellow.threads)}
      </div>
    </div>
  )
};

export default FellowsSettingsContent;