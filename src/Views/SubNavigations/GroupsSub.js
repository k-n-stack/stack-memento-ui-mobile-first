import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { setSelectedGroup } from "Store/Features/navigationSlice";

import "./GroupsSub.css";

const GroupsSub = () => {

  const dispatch = useDispatch();
  const subscribedGroups = useSelector((state) => (state.user.subscribedGroups));
  const ownGroups = useSelector((state) => (state.user.ownGroups));
  const selectedGroup = useSelector((state) => (state.navigation.selectedGroup));

  useEffect(() => {
    console.log(selectedGroup);
  });

  const getGroups = (groups) => {
    if (groups.length === 0) {
      return null;
    }

    return groups.map(function (group) {
      return (
        <motion.div
          className="group-sub-list-element"
          onClick={() => {
            dispatch(setSelectedGroup(group));
          }}
          animate={selectedGroup.alphanumeric_id === group.alphanumeric_id ? 
            { backgroundColor: "rgba(255, 255, 255, 0.3)" } : 
            { backgroundColor: "rgba(255, 255, 255, 0)" }
          }
        >
          <img src={`http://localhost:8000/api/${group.image_url}`} />
          <div className="group-sub-list-element-infos">
            <div className="group-sub-list-element-infos-name">{group.name}</div>
            <div className="group-sub-list-element-infos-owner"><span>Owner :&nbsp;</span>{group.owner.pseudonym}</div>
            <div className="group-sub-list-element-stats">
              <div>{group.subscribers.length} Users</div>
              <div>{group.threads.length} Threads</div>
            </div>
          </div>
        </motion.div>
      );
    });
  }

  return (
    <div className="groups-sub">
      {getGroups(ownGroups)}
      {getGroups(subscribedGroups)}
    </div>
  );
};

export default GroupsSub;