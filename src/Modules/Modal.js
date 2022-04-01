import React from "react";

import "./Modal.css";

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal-top">
                <div>Option 01</div>
                <div>Option 02</div>
                <div>Option 03</div>
                <div>Option 04</div>
            </div>

            <div className="modal-content-container">
                <div className="modal-thread-list">
                </div>
                
                <div className="modal-form-container">hello</div>
            </div>
        </div>
    )
};

export default Modal;