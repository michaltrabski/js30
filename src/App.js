import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lesson1 from "./pages/Lesson1";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/lesson-1" component={Lesson1} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
