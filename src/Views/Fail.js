import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Background from "Components/Layout/Background";
import Icon from "Components/Icon/Icon";

import { setView } from "Store/Features/navigationSlice";

import "./Validation.css";

const Fail = (props) => {

  const dispatch = useDispatch();

  return (
    <>

      <Background />

      <div className="validation-container">

        <div 
          className="validation-title-container"
          onClick={() => {
            dispatch(setView("homepage"));
          }}
        >
          <Icon icon="MascotColor"/>
          <h1 className="validation-logo-title-container">STACK-MEMENTO</h1>
        </div>

        <div className="validation-header-container">
          <h1>Registration Succeeded</h1>
        </div>

        <div className="validation-body-container">
          <p>FAAAAAAAIL</p>
        </div>

        <div className="validation-bottom-container">
          <div className="validation-bottom-link">
            <a
              onClick={() => {
                dispatch(setView("homepage"));
              }}
            >
              ← Back to homepage
            </a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Fail;