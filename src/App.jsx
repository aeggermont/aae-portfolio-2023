import React from 'react';

/*
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; */

import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';
import Home from './Pages/home/home';
import AboutMe from './Pages/about/about';
import MyWork from './Components/my-work/my-work';
import Contact from './Pages/contact/contact';
import Project1 from './Components/my-work/projects/project-1/Project1';
import Project2 from './Components/my-work/projects/project-2/Project2';
import Project3 from './Components/my-work/projects/project-3/Project3';
import Project4 from './Components/my-work/projects/project-4/Project4';
import Project5 from './Components/my-work/projects/project-5/Project5';
import Project6 from './Components/my-work/projects/project-6/Project6';
import Project7 from './Components/my-work/projects/project-7/Project7';
import Project8 from './Components/my-work/projects/project-8/Project8';
import Project9 from './Components/my-work/projects/project-9/Project9';
import Project10 from './Components/my-work/projects/project-10/Project10';

/* Project Pages */
import AutomaticSeater from './Pages/Projects/AutomaticSeater/AutomaticSeater';
import StoryTeller from './Pages/Projects/StoryTeller/StoryTeller';

import { ParallaxProvider } from 'react-scroll-parallax';


import ResponsiveTests from './Pages/responsive-tests'
import './App.scss';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
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
              path="/mywork/projects/project-4"
              element={ <AutomaticSeater />}  />

            <Route 
              path="/mywork/projects/project-1" 
              element={<StoryTeller />}/> 
      
            <Route 
              path="/mywork/projects/project-2" 
              element={<Project2 />}/> 
            
            <Route 
              path="/mywork/projects/project-3" 
              element={<Project3 />}/> 
          
            <Route 
              path="/mywork/projects/project-5" 
              element={<Project5 />}/>
            
            <Route 
              path="/mywork/projects/project-6" 
              element={<Project6 />}/>
            
            <Route 
              path="/mywork/projects/project-7" 
              element={<Project7 />}/>
            
            <Route 
              path="/mywork/projects/project-8" 
              element={<Project8 />}/>
            
            <Route 
              path="/mywork/projects/project-9" 
              element={<Project9 />}/>
            
            <Route 
              path="/mywork/projects/project-10" 
              element={<Project10 />}/>
            
            <Route 
              path="/screen-test" 
              element={<ResponsiveTests />}/>
        </Routes>
      </ParallaxProvider>
    </div>
  );
}

export default App;
