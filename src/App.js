import React from "react";
import { Switch, Route } from "react-router-dom";

//SECTION Internal Components
import Home from "./components/Home/Home";

import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
