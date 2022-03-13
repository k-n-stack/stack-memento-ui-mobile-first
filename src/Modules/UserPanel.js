import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import Icon from "Components/Icon/Icon";

import { setExpandUserPanel } from "Store/Features/Navigation/navigationSlice";

import "./UserPanel.css";
import avatar from "Ressources/Images/Avatars/john_doe.png";

const UserPanel = () => {

  const dispatch = useDispatch();
  const expandUserPanel = useSelector((state) => (state.navigation.expandUserPanel));

  const variants = {
    userPanel: {
      expand: {
        x: 0,
      },
      collapse: {
        x: 300,
      },
    }
  }

  return (
    <motion.div 
      className="user-panel" 
      variants={variants.userPanel}
      initial={variants.userPanel.collapse}
      animate={expandUserPanel ? "expand" : "collapse"}
      transition={{ type: "linear", duration: 0.5 }}
    >

      <div 
        className="user-panel-close-icon-container"
        onClick={() => {
          dispatch(setExpandUserPanel(false));
        }}
      >
        <Icon icon="CrossCircle" iconColor="#FFFFFF"/>
      </div>

      <div className="user-panel-avatar-big">
        <img 
          src={avatar}
          width="100%"
          height="100%"
          onClick={() => {
            dispatch(setExpandUserPanel(true));
          }}
        />
      </div>

      <div className="user-panel-content">
        <div className="user-panel-stats">
          <h1>John Doe</h1>
          <h2>350 Bookmarks</h2>
          <h3>10 Threads</h3>
          <p>492 Redirections</p>
          <p>18 Comments</p>
          <p>667 Upvotes</p>
        </div>

        <div className="user-panel-actions">
          <div>
            <p>Profile</p>
            <div className="user-panel-action-icon">
              <Icon icon="Friends" iconColor="#FFFFFF"/>
            </div>
          </div>
          <div>
            <p>Settings</p>
            <div className="user-panel-action-icon">
              <Icon icon="CogCircle" iconColor="#FFFFFF"/>
            </div>
          </div>
          <div>
            <p className="user-panel-logout">Logout</p>
            <div className="user-panel-action-icon">
              <Icon icon="ExitCircle" iconColor="#FF4141"/>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default UserPanel;