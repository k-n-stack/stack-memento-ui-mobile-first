import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setView, setIsLogin } from "Store/Features/navigationSlice";
import { setStatus, login } from "Store/Features/userSlice";

import Button from "Components/Input/Button";
import Background from "Components/Layout/Background";
import LineInput from "Components/Input/LineInput";
import Icon from "Components/Icon/Icon";
import ToggleSwitch from "Components/Input/ToggleSwitch";

import "./Login.css";

const Login = (props) => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const errorControl = useAnimation();
  const loginControl = useAnimation();

  const loginStatus = useSelector((state) => (state.user.status));
  
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };



  const errorMessageAnimation = {
    x: [-10, 10, -10, 10, 0],
    opacity: [1, 1, 0],
    transition: {
      x: {
        duration: 0.5, 
        times: [0, 0.4, 0.6, 0.8, 1] 
      },
      opacity: {
        duration: 4.5,
        times: [0, 0.85, 1],
      }
    },
  }

  const handleLogin = () => {
    let check = true;
    switch (true) {
      case !String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) :
        setErrorMessage("Email is invalid");
        check = false;
        break;
      // case !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{12,128}$/) :
      //   setErrorMessage("Password condition : At least 1 lowercase, 1 uppercase, 1 digit, 1 special char, no space, between 12 and 128 char");
      //   check = false;
      //   break;
    }

    if (!check) {
      errorControl.start(errorMessageAnimation);
    }
    return check;
  };

  useEffect(() => {
    if (loginStatus === "pending login") {
      loginControl.start({
        opacity: 0.7,
      });
    }

    if (loginStatus === "unauthenticated") {
      setErrorMessage("Email do not exist or wrong password");
      loginControl.start({
        opacity: 1,
      });
      errorControl.start(errorMessageAnimation);
      dispatch(setStatus(''));
    }

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

        <motion.div animate={loginControl}>
          <form className="login-form">
            <div className="login-form-inputs">
              <label>Email :</label>
              <LineInput onChange={handleEmailChange}/>
              <label>Password :</label>
              <LineInput 
                onChange={handlePasswordChange} 
                iconRight="Eye"
                hasRightIcon
                password
              />
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
                    if (loginStatus === "pending login") {
                      return false;
                    }
                    if (handleLogin()) {
                      dispatch(login({ email: email, password: password }));
                    }
                  }}
                  color="green"
                />
              </div>
              <motion.div 
                className="login-error-message"
                animate={errorControl}
              >
                {errorMessage}
              </motion.div>
            </div>
          </form>
        </motion.div>

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