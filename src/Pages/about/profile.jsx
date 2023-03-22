import React, { useState } from "react";
import Skills from '../skills/Skills';
import './about.scss';
import Experience from "./Experience";
import Education from "./Education";

function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModalOne() {
      setIsOpen(!isOpen);
    }

    return (
       <div className="aae_about" id="about">78
            <div className="container">
                <div className="about_title">
                    <h3>About Me</h3>
                </div>
                <div className="content">

                    {/*  Left Side  */}
                    <div
                        className="leftpart"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100">
                        <div className="info">
                            <h3>
                                Hi, I'm <span>Antonio Aranda Eggermont</span>
                            </h3>
                            <p>
                                I am a full stack applications developer and UX engineer with experience in
                                Web development, AI/ML, data science visualizations, and digital media production. 

                                My interests are interaction design and prototyping of user experiences and user
                                interfaces, Human Centered Design, Web applications development, back-end Web services,
                                content management systems, CDN integrations, and analytics applications. 
                                
                            </p>
                        </div>
                        <div className="my_skills">
                            <h3 className="title">Technical Skills</h3>
                            <p className="desc"></p>
                            <div className="wrapper">
                                <div className="dodo_progress">
                                    <Skills />
                                </div>
                            </div>
                        </div>
                        <div className="row resume-box">
                            <div className="col-6">
                                <h3>Experience</h3>
                                <Experience />
                            </div>
                            <div className="col-6">
                              <h3>Education</h3>
                               <Education />
                            </div>
                        </div>
                    </div>
                </div>           
            </div>        
        </div>
    );
};

export default Profile;