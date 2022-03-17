import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import Icon from "Components/Icon/Icon";

import { setExpandUserPanel, setView, setUserPanelView, setUserSettingsView, setIsLogin } from "Store/Features/navigationSlice";
import { setUserThreadCount, setUserBookmarkCount } from "Store/Features/userSlice";
import { clearUser } from "Store/Features/userSlice";

import "./UserPanel.css";

const UserPanel = () => {

  const dispatch = useDispatch();
  const expandUserPanel = useSelector((state) => (state.navigation.expandUserPanel));
  const userPanelView = useSelector((state) => (state.navigation.userPanelView));
  const userSettingsView = useSelector((state) => (state.navigation.userSettingsView));
  const userThreadCount = useSelector((state) => (state.user.threadCount));
  const userBookmarkCount = useSelector((state) => (state.user.bookmarkCount));

  const variants = {
    userPanel: {
      expand: {
        x: 0,
      },
      collapse: {
        x: 600,
      },
    }
  }

  const getUserSettingsView = (view) => {
    switch (view) {
      case "profile":
        return <div>profile</div>
      case "account":
        return <div>account</div>
      case "appearance":
        return <div>appearance</div>
      case "accessibility":
        return <div>accessibility</div>
    }
  };

  const getImageModule = (image) => {
    try {
      return require(`../Ressources/Images/Avatars/${image}`);
    } catch (error) {
      return require("../Ressources/Images/Avatars/default.png");
    }
  };

  useEffect(() => {
    dispatch(setUserThreadCount());
    dispatch(setUserBookmarkCount());
  }, []);

  return (
    <motion.div 
      className="user-panel" 
      variants={variants.userPanel}
      initial={variants.userPanel.collapse}
      animate={expandUserPanel ? "expand" : "collapse"}
      transition={{ type: "linear", duration: 0.5 }}
      style={{
        padding: userPanelView === "stats" ? "190px 30px 50px 10px" : "50px 30px 50px 10px",
      }}
    >

      <div 
        className="user-panel-close-icon-container"
        onClick={() => {
          dispatch(setExpandUserPanel(false));
        }}
      >
        <Icon icon="CrossCircle" iconColor="#FFFFFF"/>
      </div>

      {
        userPanelView === "stats" &&
        <div className="user-panel-avatar-big">
          <img 
            src={getImageModule(sessionStorage.getItem('stmn_image_url'))}
            width="100%"
            height="100%"
            onClick={() => {
              dispatch(setExpandUserPanel(true));
            }}
          />
        </div>
      }

      <div className="user-panel-content">
        {
          userPanelView === "stats" &&
          <div className="user-panel-content-top">
            <p>{sessionStorage.getItem('stmn_email')}</p>
            <h1>{sessionStorage.getItem('stmn_pseudonym')}</h1>
            <h2>{userThreadCount} Threads</h2>
            <h3>{userBookmarkCount} Bookmarks</h3>
            <p>492 Redirections</p>
            <p>18 Comments</p>
            <p>667 Upvotes</p>
          </div>
        }

        {
          userPanelView === "settings" &&
          <div className="user-panel-content-top">
            <h1 className="user-panel-settings-header">Settings</h1>
            <div className="user-panel-navbar">
              <div 
                onClick={() => {
                  dispatch(setUserSettingsView("profile"))
                }}
                style={{
                  opacity: userSettingsView === "profile" ? 0.5 : 1,
                }}
              >
                Profile
              </div>
              <div 
                onClick={() => {
                  dispatch(setUserSettingsView("account"))
                }}
                style={{
                  opacity: userSettingsView === "account" ? 0.5 : 1,
                }}
              >
                Account
              </div>
              <div 
                onClick={() => {
                  dispatch(setUserSettingsView("appearance"))
                }}
                style={{
                  opacity: userSettingsView === "appearance" ? 0.5 : 1,
                }}
              >
                Appearance
              </div>
              <div 
                onClick={() => {
                  dispatch(setUserSettingsView("accessibility"))
                }}
                style={{
                  opacity: userSettingsView === "accessibility" ? 0.5 : 1,
                }}
              >
                Accessibility
              </div>
            </div>

            <div className="user-panel-settings-content">
              {getUserSettingsView(userSettingsView)} 
            </div>
          </div>
        }

        <div className="user-panel-actions">
          <div
            onClick={() => {
              dispatch(setUserPanelView("stats"));
              console.log(userPanelView);
            }}
            style={{
              opacity: userPanelView === "stats" ? 0.5 : 1,
            }}
          >
            <p>Profile</p>
            <div className="user-panel-action-icon">
              <Icon icon="Friends" iconColor="#FFFFFF"/>
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(setUserPanelView("settings"));
            }}
            style={{
              opacity: userPanelView === "settings" ? 0.5 : 1,
            }}
          >
            <p>Settings</p>
            <div className="user-panel-action-icon">
              <Icon icon="CogCircle" iconColor="#FFFFFF"/>
            </div>
          </div>
          <div 
            className="user-panel-logout-container"
            onClick={() => {
              dispatch(clearUser())
              dispatch(setView("login"));
              dispatch(setIsLogin(false));
            }}
          >
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