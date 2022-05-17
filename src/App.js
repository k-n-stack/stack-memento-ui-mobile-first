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
window.history.replaceState(null, null, 'https://stack.mn');

function App() {

  const overrideView = (status) => {
    switch (true) {
      case status === "fail" :
        return "validationFail";
      case status === "success" :
        return "validationSuccess";
    }
    return null;
  }

  return <Navigation override={overrideView(status)}/>
}

export default App;

