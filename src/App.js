import React from "react";
import {Navbar} from "./components";
import {SimpleCard} from "./components";
// import {Welcome} from "./components";
import { HashRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NewForm from "./pages/NewForm";

function App() {
  return (
    <Router>
      <Navbar />
      <SimpleCard />
    </Router>
  );
}

export default App;