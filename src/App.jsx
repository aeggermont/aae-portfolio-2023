import React from 'react';
import Home from './Pages/home';
import ResponsiveTests from './Pages/responsive-tests'
import './App.scss';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/screen-test">
          <ResponsiveTests />
        </Route>
      </Router>
    </div>
  );
}

export default App;
