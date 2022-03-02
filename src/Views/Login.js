import React from "react";
import { useDispatch } from "react-redux";
import { 
  setIsLogin, 
  setView, 
} from "Store/Features/Navigation/navigationSlice";

import Button from "Components/Input/Button";

const Login = (props) => {

  const dispatch = useDispatch();

  return (
    <>
      <div>Login page</div>
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
    </>
  );
};

export default Login;