import React from "react";
import "./App.css";


import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects"
import Main from "./Main/Main";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/">
          <Main />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
