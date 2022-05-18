import React, { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useOutsideAlerter } from "Hooks/useOutsideAlerter";

import Button from "./Button";

import { setShowConfirmationModal } from "Store/Features/navigationSlice";
import { deleteThread } from "Store/Features/userSlice";

import "./ConfirmationModal.css";

const ConfirmationModal = (props) => {

  const dispatch = useDispatch();
  const showModal = useSelector((state) => (state.navigation.showConfirmationModal));
  const modalText = useSelector((state) => (state.navigation.confirmationModalText));
  const selectedThread = useSelector((state) => (state.navigation.selectedThread));

  const modalRef = useRef();

  useOutsideAlerter(modalRef, () => {
    dispatch(setShowConfirmationModal(false));
  });

  return (
    showModal &&
    <div 
      className="confirmation-modal"
      ref={modalRef}
    >
      <div>{modalText}</div>

      <div className="confirmation-modal-buttons">
        <div 
          onClick={() => {
            console.log('clicked');
            dispatch(deleteThread({
              alphanumeric_id : selectedThread.alphanumeric_id,
            }));
          }}
        >
          <Button 
            noIcon 
            buttonText="Ok"
          />
        </div>
        <div
          onClick={() => {
            dispatch(setShowConfirmationModal(false));
          }}
        >
          <Button 
            noIcon 
            buttonText="Cancel"
          />
        </div>
      </div>

    </div>
  )
};

export default ConfirmationModal;