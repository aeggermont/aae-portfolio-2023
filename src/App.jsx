import React from 'react';

/*
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; */

import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';
import Home from './Pages/home';
import AboutMe from './Pages/about/about';
import MyWork from './Components/my-work/my-work';
import Contact from './Pages/contact/contact';
import ResponsiveTests from './Pages/responsive-tests'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
            path="/" 
            element={<Home />}/>
        
          <Route 
            path="/aboutme" 
            element={<AboutMe />}/>  
          
          <Route 
            path="/mywork" 
            element={<MyWork />}/> 
          
          <Route 
            path="/contact" 
            element={<Contact />}/> 
          
          <Route 
            path="/screen-test" 
            element={<ResponsiveTests />}/>
      </Routes>¡
    </div>
  );
}

export default App;
