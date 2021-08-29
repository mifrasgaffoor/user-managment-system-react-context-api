import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Setting from "./Pages/Setting";
import Navbar from "./Components/Navbar";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/setting" exact component={Setting} />
          <Route path="/contacts" exact component={Contact} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
