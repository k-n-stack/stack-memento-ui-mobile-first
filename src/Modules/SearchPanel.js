import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import Icon from "Components/Icon/Icon";
import LineInput from "Components/Input/LineInput";

import { setExpandSearchPanel, setExpandSearchOptions } from "Store/Features/Navigation/navigationSlice";

import "./SearchPanel.css";

const SearchPanel = () => {

  const dispatch = useDispatch();
  const expandSearchPanel = useSelector((state) => (state.navigation.expandSearchPanel));
  const expandSearchOptions = useSelector((state) => (state.navigation.expandSearchOptions));

  const variants = {
    searchPanel: {
      expand: {
        x: 0,
      },
      collapse: {
        x: 450,
      }
    }
  }

  return (
    <motion.div
      className="search-panel"
      variants={variants.searchPanel}
      initial={variants.searchPanel.collapse}
      animate={expandSearchPanel ? "expand" : "collapse"}
      transition={{ type: "linear", duration: 0.5 }}
    >
      <div 
        className="search-panel-close-icon-container"
        onClick={() => {
          dispatch(setExpandSearchPanel(false));
        }}
      >
        <Icon icon="CrossCircle" iconColor="#FFFFFF"/>
      </div>

      <div className="search-panel-header">
        <div className="search-panel-header-icon">
          <Icon icon="MagnifierPlus" iconColor="#FFFFFF"/>
        </div>
        <h1>Advanced Search</h1>
      </div>

      <div className="search-panel-content">
        <div className="search-panel-input">
          <LineInput light hasRightIcon hasLeftIcon/>
          <p>Everywhere for everything</p>
        </div>
        <div 
          className="search-magnifier-cog-icon"
          onClick={() => {
            dispatch(setExpandSearchOptions(!expandSearchOptions));
          }}
        >
          <Icon icon={expandSearchOptions ? "MagnifierCross" : "MagnifierCog"} iconColor="#FFFFFF"/>
        </div>
      </div>

      <motion.div 
        className="search-panel-options"
        animate={{ 
          height: expandSearchOptions ? 190 : 0,
          borderBottomColor: expandSearchOptions ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{
          borderBottomColor: { delay: 0.2, duration: 0.6 }
        }}
      >
        <div>
          <div className="search-criteria">Search in...</div>
          <div>Everywhere</div>
          <div>Global</div>
          <div>Group</div>
          <div>My threads</div>
          <div>User threads</div>
        </div>
        <div>
          <div className="search-criteria">For...</div>
          <div>Everything</div>
          <div>Group</div>
          <div>User</div>
          <div>Thread</div>
          <div>Bookmark</div>
          <div>Comment</div>
        </div>
        <div>
          <div className="search-criteria">Where...</div>
          <div>Date</div>
          <div>Comments</div>
          <div>Votes</div>
          <div>Bookmark</div>
          <div>Comment</div>
        </div>
        <div>
          <div>Less than</div>
          <div>Greater than</div>
          <div>Between</div>
        </div>
      </motion.div>

      <div className="test">hello</div>

    </motion.div>
  );
};

export default SearchPanel;