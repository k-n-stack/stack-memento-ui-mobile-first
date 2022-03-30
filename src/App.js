import Navigation from "Containers/Navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { setOverrideView } from "Store/Features/navigationSlice";
import { setView } from "Store/Features/navigationSlice";

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let status = params.status;
window.history.replaceState(null, null, 'http://localhost:3000/');

function App() {

  const dispatch = useDispatch();
  // const override = useSelector((state) => (state.navigation.overrideView));

  const overrideView = (status) => {
    switch (true) {
      case status === "fail" :
        // return "validationFail";
        dispatch(setView("validationFail"));
        break;
      case status === "success" :
        // return "validationSuccess";
        dispatch(setView("validationSuccess"));
        break;
    }
    dispatch(setView("homepage"));
  }
  
  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    const status = params.status;
    window.history.replaceState(null, null, 'http://localhost:3000/');
    overrideView(status);
  });
  // useEffect(() => {
  //   dispatch(setOverrideView(overrideView(status)));
  // });

  // return (
  //   <>
  //     <Navigation override={override}/>
  //   </>
  // );

  return <Navigation />
}

export default App;

