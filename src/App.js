import Navigation from "Containers/Navigation";

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let status = params.status;
window.history.replaceState(null, null, 'http://localhost:3000/');

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

