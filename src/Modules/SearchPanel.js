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
          <p>hello hello hello</p>
        </div>
        <div 
          className="search-magnifier-cog-icon"
          onClick={() => {
            dispatch(setExpandSearchOptions(!expandSearchOptions));
          }}
        >
          <Icon icon={expandSearchOptions ? "MagnifierCog" : "MagnifierCross"} iconColor="#FFFFFF"/>
        </div>
      </div>

      <div className="search-panel-options">
        hello
      </div>

    </motion.div>
  );
};

export default SearchPanel;