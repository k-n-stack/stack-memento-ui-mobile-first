import React from "react";
import { useDispatch } from "react-redux";
import { setView } from "Store/Features/Navigation/navigationSlice";

import Button from "Components/Input/Button";

const Register = () => {

  const dispatch = useDispatch();

  return (
    <>
      <div>Register page</div>
      <Button 
        buttonText="To Login" 
        icon="Login"
        onClick={() => {
          dispatch(setView("login"));
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
        buttonText="Register Action !" 
        icon="Login"
        onClick={() => {
          alert("handle registration here");
        }}
      />
    </>
  );
}

export default Register;