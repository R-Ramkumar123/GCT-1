import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/LinkPages.js/About";
import Login from "./components/LinkPages.js/Login";
import Staffdetails from "./components/LinkPages.js/Staffdetails";
import Vismis from "./components/LinkPages.js/Vismis";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Homepage} exact />
      <Route path="/about" component={About} />
      <Route path="/vision" component={Vismis} />
      <Route path="/staffdetails" component={Staffdetails} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
