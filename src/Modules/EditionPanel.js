import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Icon from "Components/Icon/Icon";

import "./EditionPanel.css";

const EditionPanel = (props) => {

  const view = useSelector((state) => (state.navigation.view));
  const myThreadsSelection = useSelector((state) => (state.navigation.myThreadsSelection));
  const pinnedThreadsSelection = useSelector((state) => (state.navigation.pinnedThreadsSelection));
  const fellowsSelection = useSelector((state) => (state.navigation.fellowsSelection));
  const groupsSelection = useSelector((state) => (state.navigation.groupsSelection));
  const groupOwner = useSelector((state) => (state.navigation.groupOwner));

  const options = {
    myThreads: {
      selection: [
        {
          name: "New thread", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Add bookmark", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Import/Export", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Manage group subscription", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Delete PHP thread",
          icon: "", 
          color: "#882E2E",
          isLast: true,
          action: () => {},
        },
      ],
      noSelection: [
        {
          name: "New thread", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Add bookmark", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Import/Export", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
      ],
    },
    pinnedThreads: {
      selection: [
        {
          name: "Pin a thread", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Delete Global:JavaScript pin", 
          icon: "", 
          color: "#882E2E",
          isLast: true,
          action: () => {},
        },
      ],
      noSelection: [
        {
          name: "Pin a thread", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Delete pins", 
          icon: "", 
          color: "#882E2E",
          isLast: true,
          action: () => {},
        },
      ],
    },
    fellows: {
      selection: [
        {
          name: "Send fellow request", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Pending demands", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Revoke Scripty~Gurlz", 
          icon: "", 
          color: "#882E2E",
          isLast: true,
          action: () => {},
        },
      ],
      noSelection: [
        {
          name: "Send fellow request", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
        {
          name: "Pending demands", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
      ],
    },
    groups: {
      selection: {
        owner: [
          {
            name: "New group", 
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: () => {},
          },
          {
            name: "Send subscription invit", 
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: () => {},
          },
          {
            name: "Pending subscription req (2)", 
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: () => {},
          },
          {
            name: "Manage MyGroup", 
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: () => {},
          },
          {
            name: "Leave MyGroup", 
            icon: "", 
            color: "#882E2E",
            isLast: true,
            action: () => {},
          },
        ],
        notOwner: [
          {
            name: "New group", 
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: () => {},
          },
          {
            name: "Send invit suggestion", 
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: () => {},
          },
          {
            name: "Leave Gr4ph15m", 
            icon: "", 
            color: "#882E2E",
            isLast: true,
            action: () => {},
          },
        ],
      },
      noSelection: [
        {
          name: "New group", 
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: () => {},
        },
      ],
    },
  };

  const getOptions = (view) => {
    switch (view) {
      case "myThreads" :
        return myThreadsSelection ?
          options[view]["selection"] :
          options[view]["noSelection"];
      case "pinnedThreads" :
        return pinnedThreadsSelection ?
          options[view]["selection"] :
          options[view]["noSelection"];
      case "fellows" :
        return fellowsSelection ?
          options[view]["selection"] :
          options[view]["noSelection"];            
      case "groups" :
        return groupsSelection ?
          groupOwner ? 
            options[view]["selection"]["owner"] :
            options[view]["selection"]["notOwner"] :
          options[view]["noSelection"];
      default :
        return [];
    }
  }

  const buildOptionsComponents = (options) => {
    return options.map(function (option) {
      return (
        <div className={option.isLast ? "edition-panel-container-last" : null}>
          <div className="edition-panel-icon-container">
            <Icon icon="Plus" iconColor={option.color} />
          </div>
          <p style={{color: option.color}}>{option.name}</p>
        </div>
      );
    });
  }

  const editionPanelRef = useRef();

  useEffect(() => {
    props.setEditionPanelRef(editionPanelRef);
  });

  return (
    <div className="edition-panel" ref={editionPanelRef}>
      { 
        !props.isSubPanelStatic &&
        <div className="edition-panel-title">
          <div className="edition-panel-title-logo-container">
            <Icon icon="Threads" iconColor="#3650AB" />
          </div>
          <h1 className="edition-panel-title-header">{props.title}</h1>
        </div>
      }
      <div className="edition-panel-bottom">
        {buildOptionsComponents(getOptions(view))}
      </div>
    </div>
  );
};

export default EditionPanel;