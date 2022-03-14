import React from "react";
import { useDispatch } from "react-redux";
import { 
  setView, 
} from "Store/Features/Navigation/navigationSlice";

import Button from "Components/Input/Button";
import Background from "Components/Layout/Background";
import LineInput from "Components/Input/LineInput";
import Icon from "Components/Icon/Icon";

import "./Register.css";
import ToggleSwitch from "Components/Input/ToggleSwitch";

const Register = (props) => {

  const dispatch = useDispatch();

  return (
    <>

      <Background />

      <div className="register-container">

        <div 
          className="register-title-container"
          onClick={() => {
            dispatch(setView("homepage"));
          }}
        >
          <Icon icon="MascotColor"/>
          <h1 className="register-logo-title-container">STACK-MEMENTO</h1>
        </div>

        <div className="register-header-container">
          <h1>Register</h1>
        </div>

        <form className="register-form">
          <div className="register-form-inputs">
            <label>Email :</label>
            <LineInput />
            <label>Username :</label>
            <LineInput />
            <label>Password :</label>
            <LineInput />
            <label>Password (repeat) :</label>
            <LineInput />
          </div>
          <div className="register-form-buttons">
            <div className="remember-option-container">
              <p>I accept the <span className="terms-link">Terms and Conditions.</span></p>
              <ToggleSwitch />
            </div>
            <div className="remember-option-container">
              <p>I agree to the <span className="terms-link">Privacy Policie.</span></p>
              <ToggleSwitch />
            </div>
            <div>    
              <Button 
                buttonText="Register Action !" 
                icon="Register"
                onClick={() => {
                  alert("handle registration...");
                  dispatch(setView("login"));
                }}
                backgroundColor="#99D17E"
              />
            </div>
          </div>
        </form>

        <div className="register-bottom-container">
          <div className="register-bottom-link">
            <p>Already have an account?</p>
            <a
              onClick={() => {
                dispatch(setView("login"));
              }}
            >
              Go to login page →
            </a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Register;