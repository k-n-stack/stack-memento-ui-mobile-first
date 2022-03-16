import React from "react";
import { useDispatch } from "react-redux";
import { 
  setIsLogin, 
  setView, 
} from "Store/Features/navigationSlice";

import Button from "Components/Input/Button";
import Background from "Components/Layout/Background";
import LineInput from "Components/Input/LineInput";
import Icon from "Components/Icon/Icon";

import "./Login.css";
import ToggleSwitch from "Components/Input/ToggleSwitch";

const Login = (props) => {

  const dispatch = useDispatch();

  return (
    <>

      <Background />

      <div className="login-container">

        <div 
          className="login-title-container"
          onClick={() => {
            dispatch(setView("homepage"));
          }}
        >
          <Icon icon="MascotColor"/>
          <h1 className="login-logo-title-container">STACK-MEMENTO</h1>
        </div>

        <div className="login-header-container">
          <h1>Login</h1>
        </div>

        <form className="login-form">
          <div className="login-form-inputs">
            <label>Email :</label>
            <LineInput />
            <label>Password :</label>
            <LineInput />
          </div>
          <div className="login-form-buttons">
            <div className="remember-option-container">
              <p>Remember me</p>
              <ToggleSwitch />
            </div>
            <div>    
              <Button 
                buttonText="Login Action !" 
                icon="Login"
                onClick={() => {
                  dispatch(setView("global"));
                  dispatch(setIsLogin(true));
                }}
                backgroundColor="#99D17E"
              />
            </div>
          </div>
        </form>

        <div className="login-bottom-container">
          <div className="login-bottom-link">
            <p>Don't have an account yet?</p>
            <a
              onClick={() => {
                dispatch(setView("register"));
              }}
            >
              ← Go to register page
            </a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Login;