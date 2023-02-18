import React from 'react';
import Home from './Pages/home';
import './App.scss';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  console.log('THis is App page!');
  return (
    <div className="App">
      <Router>
        <Route exact path="/test">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
