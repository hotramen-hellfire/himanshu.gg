import React from "react";
import NavBar from "./components/NavBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resources from "./components/Resources";
import Stuff from "./components/Stuff";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Resources" component={Resources} />
        <Route path="/stuff" component={Stuff} />
      </Switch>
    </Router>
  );
};

export default App;
