import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


import Home from './Pages/home';
import AboutMe from './Pages/about-me/about-me';
import MyWork from './Pages/my-work/my-work';
import Contact from './Pages/contact/contact';
import ResponsiveTests from './Pages/responsive-tests'
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        <Route exact path="/mywork" >
          <MyWork />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/screen-test">
          <ResponsiveTests />
        </Route>
      </Router>
    </div>
  );
}

export default App;
