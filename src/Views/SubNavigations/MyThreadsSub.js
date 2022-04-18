import ThreadDot from "Components/Svg/ThreadDot";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { setSelectedThread } from "Store/Features/navigationSlice";
import "./MyThreadsSub.css";

import Icon from "Components/Icon/Icon";

const MyThreadsSub = () => {

  const dispatch = useDispatch();
  const threads = useSelector((state) => (state.user.threads));
  const selectedThread = useSelector((state) => (state.navigation.selectedThread));

  const getThreads = (threads) => {
    return Object.keys(threads).length === 0 ? <div>NO threads provided</div> :
    threads.map(function (thread) {
      return (
        <motion.div 
          className="mythread-sub-thread-element"
          onClick={() => {
            dispatch(setSelectedThread(thread));
          }}
          animate={selectedThread.alphanumeric_id === thread.alphanumeric_id ? 
            { backgroundColor: "rgba(255, 255, 255, 0.2)" } : 
            { backgroundColor: "rgba(255, 255, 255, 0)" }
          }
        >
          <div className="mythread-sub-infos">
            <div className="mythread-title">
              <div className="mythread-dot-container">
                <ThreadDot 
                  color={thread.color}
                  dotRadius={10}
                />
              </div>
              <div className="mythread-title-text">{thread.title}</div>
            </div>
            <div className="mythread-bookmark-count"><span className="mythread-bookmark-count-header">Bookmarks : </span>{thread.bookmarks.length || 0}</div>
          </div>

          <div className="mythread-sub-stats">
            <div>
              <div className="mythread-sub-stats-icon">
                <Icon icon="Redirections" iconColor="#FFFFFF"/>
              </div>
              <div>{thread.redirection_count}</div>
            </div>
            
            <div>
              <div className="mythread-sub-stats-icon">
                <Icon icon="Upvotes" iconColor="#FFFFFF"/>
              </div>
              <div>{thread.vote_count}</div>
            </div>

            <div>
              <div className="mythread-sub-stats-icon">
                <Icon icon="Comments" iconColor="#FFFFFF"/>
              </div>
              <div>{thread.comment_count}</div>
            </div>

            <div className="testasdf">
              <div className="mythread-sub-stats-icon">
                {
                  ['private', 'shareable'].includes(thread.visibility) ?
                  <Icon icon="EyeCross" iconColor="#FFFFFF" /> :
                  <Icon icon="Eye" iconColor="#FFFFFF" />
                }
              </div>
            </div>

          </div>
        </motion.div>
      );
    });
  }

  return (
    <div className="mythreads-sub">
      {getThreads(threads)}
    </div>
  );
};

export default MyThreadsSub;