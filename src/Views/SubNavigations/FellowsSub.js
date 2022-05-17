import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import "./FellowsSub.css";
import { setSelectedFellow } from "Store/Features/navigationSlice";
import { useDispatch } from "react-redux";

const FellowsSub = () => {

  const dispatch = useDispatch();
  const fellows = useSelector((state) => (state.user.friends));
  const selectedFellow = useSelector((state) => (state.navigation.selectedFellow));

  const getFellowList = (fellows) => {

    return fellows.map(function (fellow) {
      return (
        <motion.div 
          className="fellows-sub-list-element"
          onClick={() => {
            dispatch(setSelectedFellow(fellow));
          }}
          animate={selectedFellow.alphanumeric_id === fellow.alphanumeric_id ? 
            { backgroundColor: "rgba(255, 255, 255, 0.3)" } : 
            { backgroundColor: "rgba(255, 255, 255, 0)" }
          }
        >
          <img src={`http://localhost:8000/api/${fellow.image_url}`} />
          <div className="fellows-sub-list-element-infos">
            <div className="fellows-sub-list-element-infos-name">{fellow.pseudonym}</div>
            <div className="fellows-sub-list-element-stats">
              <div className="fellows-sub-list-element-infos-id">
                <div>Fellow since :</div>
                <div>{fellow.friend_since}</div>
              </div>
              <div className="fellows-sub-list-element-infos-stats">
                <div><span>Threads : </span>{fellow.total_threads}</div>
                <div><span>Bookmark : </span>{fellow.total_bookmarks}</div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    });
  }

  useEffect(() => {
    // console.log(fellows);
  })

  return (
    <div className="fellows-sub">
      {getFellowList(fellows)}
    </div>
  );
};

export default FellowsSub;