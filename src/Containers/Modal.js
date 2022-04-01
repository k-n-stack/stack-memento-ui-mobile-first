import React from "react";

import AddBookmark from "Views/Modals/AddBookmark";

import "./Modal.css";

const Modal = () => {
  return (
      <div className="modal">
        <div className="modal-top">
            <div>Add bookmark</div>
            <div>Add multiple bookmarks</div>
        </div>
        <div className="modal-content-container">
            <AddBookmark />
        </div>
      </div>
  )
};

export default Modal; 