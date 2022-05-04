import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import InterfaceLayout from "Modules/InterfaceLayout";

import { setSelectedGroup } from "Store/Features/navigationSlice";

import { useSelector } from "react-redux";


import "./Groups.css";
import GroupCarousel from "Components/Input/GroupCarousel";
import ImagesGroups from "Modules/ImagesGroup";

const Groups = () => {

  const dispatch = useDispatch();
  const subscribedGroups = useSelector((state) => (state.user.subscribedGroups));
  const ownGroups = useSelector((state) => (state.user.ownGroups));
  const selectedGroup = useSelector((state) => (state.navigation.selectedGroup));

  const getGroups = (groups) => {
    return groups.map(function (group) {
      return (
        <motion.div
          onClick={() => {
            dispatch(setSelectedGroup(group));
          }}
          animate={selectedGroup.alphanumeric_id === group.alphanumeric_id ? 
            { backgroundColor: "rgba(255, 255, 255, 0.3)" } : 
            { backgroundColor: "rgba(255, 255, 255, 0)" }
          }
        >
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
                  <ImagesGroups group={group.subscribers} />
                </div>
              </div>
            </div>
          </div>
          <div className="groups-group-threads">
            <div className="groups-group-threads-header">Threads&nbsp;: </div>
            <div className="groups-group-threads-list">
              {
                group.threads.map(function (thread) {
                  return (
                    <div>
                      {thread.title}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </motion.div>
      )
    });
  }

  return (
    <div className="groups-group">
      {getGroups(subscribedGroups.concat(ownGroups))}
    </div>
  );
};

export default Groups;