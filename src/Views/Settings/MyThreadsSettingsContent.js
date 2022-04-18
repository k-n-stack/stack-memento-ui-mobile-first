import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./MyThreadsSettingsContent.css";
import Icon from "Components/Icon/Icon";

const MyThreadsSettingsContent = (props) => {

  const thread = useSelector((state) => (state.navigation.selectedThread));

  return (
    <div className="settings-content-mythreads">
      <div className="settings-content-mythreads-headers">
        <div className="settings-content-mythreads-color">
          <div
            className="settings-content-mythreads-color-picker"
            style={{
              backgroundColor: `#${thread.color}`,
            }}
          >
          </div>
          <div 
            className="settings-content-mythreads-color-input"
            // contentEditable={true}
          >
            {`#${thread.color || "000000"}`}
          </div>
        </div>
        <div className="settings-content-mythreads-name">Thread name : {thread.title || ""}</div>
        <div className="settings-content-mythreads-visibility"><strong>Visibility :</strong> {thread.visibility || ""}</div>
        <div className="settings-content-mythreads-bookmarks"><strong>Bookmarks :</strong> {thread.bookmarks ? thread.bookmarks.length : ""}</div>
        <div className="settings-content-mythreads-id"><strong>ID :</strong> {thread.alphanumeric_id || ""}</div>
      </div>
      <div className="settings-content-mythreads-stats">
        <div className="settings-content-mythreads-stats-date">
          <div>Creation date : {thread.created_at}</div>
          <div>Last bookmark : </div>
          <div>Last contribution : </div>
        </div>
        <div className="settings-content-mythreads-stats-stats">
          <div>
            <div className="settings-content-mythreads-stats-icon-container">
              <Icon icon="Redirections" />
            </div>
            <div>{thread.redirection_count}</div>
          </div>
          <div>
            <div className="settings-content-mythreads-stats-icon-container">
              <Icon icon="Upvotes" />
            </div>
            <div>{thread.vote_count}</div>
          </div>
          <div>
            <div className="settings-content-mythreads-stats-icon-container">
              <Icon icon="Comments" />
            </div>
            <div>{thread.comment_count}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyThreadsSettingsContent;