import React from "react";

import Button from "Components/Input/Button";

import "./AddBookmark.css";

const AddBookmark = () => {
  return (
    <>
      <div className="add-bookmark-thread-list"></div>
      <div className="add-bookmark-form-container">
        <div className="add-bookmark-form-inputs">
          <label>Description :</label>
          <input/>

          <label>URL :</label>
          <input/>

          <div></div><div></div>

          <label>Add tag(s) :</label>
          <input/>

          <div></div>
          <div className="add-bookmark-tags-container"></div>

          <label className="add-bookmark-textarea-label">Main comment : </label>
          <textarea/>
        </div>
        <div className="add-bookmark-button-container">
          <Button noIcon buttonText="Add bookmark"/>
        </div>

      </div>
    </>
  );
};

export default AddBookmark;