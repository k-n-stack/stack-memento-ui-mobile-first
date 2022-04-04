import Icon from "Components/Icon/Icon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AddBookmark from "Views/Modals/AddBookmark";

import { setShowModal, setModalView } from "Store/Features/navigationSlice";

import "./Modal.css";
import NewThread from "Views/Modals/NewThread";
import ImportExport from "Views/Modals/ImportExport";
import ManageSharing from "Views/Modals/ManageSharing";
import DeleteThread from "Views/Modals/DeleteThread";
import PinThread from "Views/Modals/PinThread";
import DeletePin from "Views/Modals/DeletePin";
import SendFellowReq from "Views/Modals/SendFellowReq";
import PendingDemands from "Views/Modals/PendingDemands";
import RevokeFellow from "Views/Modals/RevokeFellow";
import NewGroup from "Views/Modals/NewGroup";
import SendSubInvit from "Views/Modals/SendSubInvit";
import PendingSubReq from "Views/Modals/PendingSubReq";
import ManageGroup from "Views/Modals/ManageGroup";
import LeaveGroup from "Views/Modals/LeaveGroup";
import SendInvitSuggestion from "Views/Modals/SendInvitSuggestion";


const Modal = (props) => {

  const dispatch = useDispatch();
  const showModal = useSelector((state) => (state.navigation.showModal));
  const modalView = useSelector((state) => (state.navigation.modalView));
  const modalSubOptions = useSelector((state) => (state.navigation.modalSubOptions));

  const getView = (view) => {
    switch (true) {
      // MyThreads
      case view === "newThread":
        return <NewThread/>;
      case view === "addBookmark":
        return <AddBookmark/>;
      case view === "importExport":
        return <ImportExport/>;
      case view === "manageSharing":
        return <ManageSharing/>;
      case view === "deleteThread":
        return <DeleteThread/>;

      // PinnedThreads
      case view === "pinThread":
        return <PinThread/>;
      case view === "deletePins":
        return <DeletePin/>;

      // Fellows
      case view === "sendFellowReq":
        return <SendFellowReq/>;
      case view === "pendingDemands":
        return <PendingDemands/>;
      case view === "revokeFellow":
        return <RevokeFellow/>;
      
      // Groups
      case view === "newGroup":
        return <NewGroup/>;
      case view === "sendSubInvit":
        return <SendSubInvit/>;
      case view === "pendingSubReq":
        return <PendingSubReq/>;
      case view === "manageGroup":
        return <ManageGroup/>;
      case view === "leaveGroup":
        return <LeaveGroup/>;
      case view === "sendInvitSuggestion":
        return <SendInvitSuggestion/>;
    }
  }

  return (
      showModal &&
      <div className="modal">
        <div className="modal-top">
            {modalSubOptions.map(function (subOption) {
              return <div>{subOption}</div>;
            })}
            <div className="modal-top-close">
              <div 
                className="modal-top-close-container"
                onClick={() => {
                  dispatch(setShowModal(false));
                }}
              >
                <div className="modal-top-close-icon-container">
                  <Icon icon="Cross" iconColor="#3650AB" />
                </div>
                <div>Close</div>
              </div>
            </div>
        </div>
        <div className="modal-content-container">
          {getView(modalView)}
        </div>
      </div>
  )
};

export default Modal; 