import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setView, setIsLogin } from "Store/Features/navigationSlice";
import { setStatus } from "Store/Features/userSlice";
import { login } from "Store/Features/userSlice";

import Button from "Components/Input/Button";
import Background from "Components/Layout/Background";
import LineInput from "Components/Input/LineInput";
import Icon from "Components/Icon/Icon";

import "./Login.css";
import ToggleSwitch from "Components/Input/ToggleSwitch";

const Login = (props) => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const loginStatus = useSelector((state) => (state.user.status));

  useEffect(() => {
    if (loginStatus === 'authenticated') {
      dispatch(setStatus(""));
      dispatch(setIsLogin(true));
      dispatch(setView("global"));
    }
  });

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
            <LineInput onChange={handleEmailChange}/>
            <label>Password :</label>
            <LineInput onChange={handlePasswordChange}/>
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
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(login({ email: email, password: password }));
                }}
                color="green"
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