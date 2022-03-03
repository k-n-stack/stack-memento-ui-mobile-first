import React from "react";
import { useDispatch } from "react-redux";
import { 
  setIsLogin, 
  setView, 
} from "Store/Features/Navigation/navigationSlice";

import Button from "Components/Input/Button";
import Background from "Components/Layout/Background";

import "./Login.css";
import LineInput from "Components/Input/LineInput";

const Login = (props) => {

  const dispatch = useDispatch();

  return (
    <>

      <Background />

      <div className="login-container">

        <div className="login-header-container">
          <h1>Login</h1>
        </div>

        <form className="login-form">
          <label>Email :</label>
          <LineInput />
          <label>Password :</label>
          <LineInput />
        </form>

        <Button 
          buttonText="To Register" 
          icon="Login"
          onClick={() => {
            dispatch(setView("register"));
          }}
        />
        <Button 
          buttonText="To Homepage" 
          icon="Login"
          onClick={() => {
            dispatch(setView("homepage"));
          }}
        />
        <Button 
          buttonText="Login Action !" 
          icon="Login"
          onClick={() => {
            dispatch(setView("global"));
            dispatch(setIsLogin(true));
          }}
        />
      </div>
    </>
  );
};

export default Login;