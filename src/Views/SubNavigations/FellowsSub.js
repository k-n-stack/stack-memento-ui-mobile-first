import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import "./FellowsSub.css";
import { setFellowThreads, setSelectedFellow } from "Store/Features/navigationSlice";
import { useDispatch } from "react-redux";

const FellowsSub = () => {

  const dispatch = useDispatch();
  const fellows = useSelector((state) => (state.user.friends));
  const selectedFellow = useSelector((state) => (state.navigation.selectedFellow));

  useState(() => {
    console.log("toto", fellows);
  });

  const getFellowList = (fellows) => {

    return fellows.map(function (fellow) {
      return (
        <motion.div 
          className="fellows-sub-list-element"
          onClick={() => {
            dispatch(setSelectedFellow(fellow.alphanumeric_id));
            dispatch(setFellowThreads(fellow.threads));
          }}
          animate={selectedFellow === fellow.alphanumeric_id ? 
            { backgroundColor: "rgba(255, 255, 255, 0.3)" } : 
            { backgroundColor: "rgba(255, 255, 255, 0)" }
          }
        >
          <img src={`http://localhost:8000/api/${fellow.image_url}`} />
          <div className="fellows-sub-list-element-infos">
            <div className="fellows-sub-list-element-infos-id">
              <div className="fellows-sub-list-element-infos-name">{fellow.pseudonym}</div>
              <div>Fellow since :</div>
              <div>{fellow.friend_since}</div>
            </div>
            <div className="fellows-sub-list-element-infos-stats">
              <div>Threads</div>
              <div>235</div>
              <div>Bookmark</div>
              <div>12 345</div>
            </div>
          </div>
        </motion.div>
      )
    });
  }

  return (
    <div className="fellows-sub">
      {getFellowList(fellows)}
    </div>
  );
};

export default FellowsSub;