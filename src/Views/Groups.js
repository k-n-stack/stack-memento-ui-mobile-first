import React from "react";

import InterfaceLayout from "Modules/InterfaceLayout";

import { useSelector } from "react-redux";

import "./Groups.css";
import GroupCarousel from "Components/Input/GroupCarousel";

const Groups = () => {

  const subscribedGroups = useSelector((state) => (state.user.subscribedGroups));
  const ownGroups = useSelector((state) => (state.user.ownGroups));

  const getGroups = (groups) => {
    return groups.map(function (group) {
      return (
        <div>
          <div className="groups-group-container">
            <div className="groups-group-image">
              <img src={group.image_url} />
            </div>
            <div className="groups-group-infos">
              <div className="groups-group-infos-left">
                <div className="group-title">{group.name}</div>
                <div className="group-owner">Owner : {group.owner.pseudonym}</div>
                <div className="group-threads-count">25 Threads</div>
              </div>

              <div className="groups-group-infos-right">
                <div className="groups-group-subscriber-header">Subscribers : </div>
                <div className="group-subscribers">
                  <GroupCarousel groups={group.subscribers} />
                </div>
              </div>
            </div>
          </div>
          <div className="groups-group-threads">
            <div className="groups-group-threads-header">Threads&nbsp;: </div>
            <div className="groups-group-threads-list">
              {
                group.threads.map(function (thread) {
                  return <div>{thread.title}</div>
                })
              }
            </div>
          </div>
        </div>
      )
    });
  }

  return (
    <div className="groups-group">
      {getGroups(subscribedGroups.concat(ownGroups))}
      {getGroups(subscribedGroups.concat(ownGroups))}
      {getGroups(subscribedGroups.concat(ownGroups))}
    </div>
  );
};

export default Groups;