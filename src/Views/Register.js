import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { 
  setView, 
} from "Store/Features/navigationSlice";

import Button from "Components/Input/Button";
import Background from "Components/Layout/Background";
import LineInput from "Components/Input/LineInput";
import Icon from "Components/Icon/Icon";

import { register, setStatus } from "Store/Features/userSlice";
import { setIsRegistered } from "Store/Features/navigationSlice";

import "./Register.css";
import ToggleSwitch from "Components/Input/ToggleSwitch";

const Register = (props) => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pseudonym, setPseudonym] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const errorControl = useAnimation();
  const registerControl = useAnimation();

  const registerStatus = useSelector((state) => (state.user.status));

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

  const handleRegistration = () => {
    let check = true;
    switch (true) {
      case !String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) :
        setErrorMessage("Email is invalid");
        check = false;
        break;
      case password !== passwordRepeat :
        setErrorMessage("The passwords does not matches");
        check = false;
        break;
      case !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{12,128}$/) :
        setErrorMessage("Password condition : At least 1 lowercase, 1 uppercase, 1 digit, 1 special char, no space, between 12 and 128 char");
        check = false;
        break;
      case !terms || !privacy :
        setErrorMessage("Terms and Policies are required to register an account on stackmemento");
        check = false;
        break;
    }

    if (!check) {
      errorControl.start(errorMessageAnimation);
    }
    return check;
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePseudonymChange = (value) => {
    setPseudonym(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handlePasswordRepeatChange = (value) => {
    setPasswordRepeat(value);
  };

  const handleTerms = (value) => {
    setTerms(value);
  };

  const handlePrivacy = (value) => {
    setPrivacy(value);
  }

  useEffect(() => {
    if (registerStatus === "pending registration") {
      registerControl.start({
        opacity: 0.7,
      });
    }

    if (registerStatus === "Registration success") {
      dispatch(setStatus(""));
      dispatch(setIsRegistered);
      dispatch(setView("validation"));
    }
  });

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

        <motion.div animate={registerControl}>
          <form className="register-form">
            <div className="register-form-inputs">
              <label>Email :</label>
              <LineInput onChange={handleEmailChange}/>
              <label>Pseudonym :</label>
              <LineInput onChange={handlePseudonymChange}/>
              <label>Password :</label>
              <LineInput 
                onChange={handlePasswordChange}
                iconRight="Eye"
                hasRightIcon
                password
              />
              <label>Password (repeat) :</label>
              <LineInput 
                onChange={handlePasswordRepeatChange}
                iconRight="Eye"
                hasRightIcon
                password
              />
            </div>
            <div className="register-form-buttons">
              <div className="remember-option-container">
                <p>I accept the <span className="terms-link">Terms and Conditions.</span></p>
                <ToggleSwitch onClick={handleTerms}/>
              </div>
              <div className="remember-option-container">
                <p>I agree to the <span className="terms-link">Privacy Policie.</span></p>
                <ToggleSwitch onClick={handlePrivacy}/>
              </div>
              <div>    
                <Button 
                  buttonText="Register Action !" 
                  icon="Register"
                  onClick={(event) => {
                    event.preventDefault();
                    if (registerStatus === "pending registration") {
                      return false;
                    }
                    if (handleRegistration()) {
                      dispatch(register({ email: email, pseudonym: pseudonym, password: password }));
                    }
                  }}
                  backgroundColor="#99D17E"
                />
              </div>
              <motion.div 
                className="register-error-message"
                animate={errorControl}
              >
                {errorMessage}
              </motion.div>
            </div>
          </form>
        </motion.div>

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