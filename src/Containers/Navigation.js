import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Homepage from "Views/Homepage";
import Login from "Views/Login";
import Register from "Views/Register";
import Validation from "Views/Validation";
import Fail from "Views/Fail";
import Success from "Views/Success";

import Interface from "./Interface";
import { setView } from "Store/Features/navigationSlice";

const Navigation = (props) => {

  const dispatch = useDispatch();
  const view = useSelector((state) => (state.navigation.view));
  const isLogin = useSelector((state) => (state.navigation.isLogin));

  const getView = (view, isLogin) => {

    // view = props.override || view;

    switch (true) {
      case view === "void" :
        return <></>;
      case view === "homepage" :
        return <Homepage />;
      case view === "login" :
        return <Login />;
      case view === "register" :
        return <Register />;
      case view === "validation" :
        return <Validation />;
      case view === "validationFail" :
        return <Fail />
      case view === "validationSuccess" :
        return <Success />
      case isLogin :
        return <Interface />;
      default:
        return <Homepage />
    }
  }

  useEffect(() => {
    if (view === "void") {
      dispatch(setView("homepage"));
    }
  });

  return getView(view, isLogin);
};

export default Navigation;