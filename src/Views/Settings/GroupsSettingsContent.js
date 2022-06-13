import React, { useEffect } from "react";

import "./GroupsSettingsContent.css";

import { useSelector } from "react-redux";

import Icon from "Components/Icon/Icon";

const GroupsSettingsContent = () => {

  const selectedGroup = useSelector((state) => (state.navigation.selectedGroup));

  const getUsers = (users) => {
    return Object.keys(users).length === 0 ? <div>No user</div> :
      users.map(function (user) {
        console.log(user.image_url);
      return (
        <div className="settings-content-user-element">
          <div className="settings-content-user-element-image">
            {/* <img src={user.image_url} /> */}
            <img src={`${process.env.REACT_APP_API_DOMAIN}/${user.image_url}`} />
          </div>
          <div>{user.pseudonym}</div>
        </div>
      );
    });
  }

  return (
    <div className="settings-content-groups">
      <div className="settings-content-groups-headers">
        <div className="settings-content-group-headers-infos">
          <div className="settings-content-group-headers-infos-pseudonym">
            {selectedGroup.name || "Pseudonym"}
          </div>
          <div className="settings-content-group-owner">
            <div className="settings-content-group-owner-avatar">
              {
                Object.keys(selectedGroup).length !== 0 &&
                // <img src={selectedGroup.owner.image_url} />
                <img src={`${process.env.REACT_APP_API_DOMAIN}/${selectedGroup.owner.image_url}`} />

              }
            </div>



            <div className="settings-content-group-owner-infos">
              <div>Owner :</div>
              <div>{Object.keys(selectedGroup).length !== 0 ? selectedGroup.owner.pseudonym : ""}</div>
            </div>
          </div>
          <div>Register since : </div>
          <div className="settings-content-group-headers-infos-date">
            placeholder
          </div>
          <div>Last Bookmark : </div>
          <div className="settings-content-group-headers-infos-date">
            placeholder 2
          </div>
          <div>Last Comment : </div>
          <div className="settings-content-group-headers-infos-date">
            placeholder 3
          </div>
        </div>
        <div className="settings-content-group-header-avatar">
          { 
            Object.keys(selectedGroup).length !== 0 &&
            <img src={`${process.env.REACT_APP_API_DOMAIN}/ressource/groups/${selectedGroup.alphanumeric_id}`} />
          }

          <div className="test">
            <div>
              <div>redir placeholder</div>
              <div className="settings-content-group-sub-header-icon">
                <Icon icon="Redirections" />
              </div>
            </div>
            <div>
              <div>vote placeholder</div>
              <div className="settings-content-group-sub-header-icon">
                <Icon icon="Upvotes" />
              </div>
            </div>
            <div>
              <div>comments placeholder</div>
              <div className="settings-content-group-sub-header-icon">
                <Icon icon="Comments" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="settings-content-group-sub-header">
        <div className="settings-content-group-sub-header-left">
          <div>
            <div className="settings-content-group-sub-header-left-text">Threads :&nbsp;</div>
            <div>total t placeh</div>
          </div>
          <div>
            <div className="settings-content-group-sub-header-left-text">Bookmarks :&nbsp;</div>
            <div>total b placeh</div>
          </div>
        </div>
      </div>
      <div className="settings-content-group-threads-title">Users</div>
      <div className="settings-content-group-threads">
        {getUsers(Object.keys(selectedGroup).length !== 0 ? selectedGroup.subscribers : {})}
      </div>
    </div>
  )
};

export default GroupsSettingsContent;