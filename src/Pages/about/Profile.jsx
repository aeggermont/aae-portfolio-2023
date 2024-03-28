import React, { useState, useEffect } from "react";
import './Profile.scss';
import Experience from "./Experience";
import Education from "./Education";
import AboutMeData from "./AboutData";
import Skills from './skills';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Profile(props) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    function toggleModalOne() {
      setIsOpen(!isOpen);
    }

    const screenDevice = props.screenDevice;

    const smsxView = () => {
        return (
            <div className="smsx-about-container"> 
                <p>Phone View </p>
                <div className="aae-about">
                    <div className="container">
                        <div className="about-title"><h3> {AboutMeData.pageTitle}</h3></div>
                        <div className="content">
                            <div>
                                <div className="info">
                                    <h3> {AboutMeData.pageWelcome} </h3>
                                    {
                                        AboutMeData.pageParagraphs.map (  (paragraph, index)  => (
                                            <p> {paragraph} </p>
                                        ))
                                    }

                                    {/*
                                    <p> {AboutMeData.pageParagraphs[0]} </p>
                                    <p> {AboutMeData.pageParagraphs[1]} </p>
                                     */}
                                   
                                </div>
                                <div className="personal-info">
                                    <div><h3> Personal Info </h3></div>
                                    <div className="section-info"><div className="item"> <span>First Name: &nbsp; </span> Antonio</div> <div className="item"> <span>Last Name: &nbsp; </span>Aranda Eggermont</div></div>
                                    <div className="section-info"><div className="item"> <span>Cities of Residence: &nbsp;</span>Seattle, Mexico City</div>  <div className="item"><span>Email: &nbsp; </span>Antonio.Eggermont@post.harvard.edu</div></div>
                                    <div className="section-info"><div className="item"> <span> Languages: &nbsp;</span>  English, Spanish</div>  <div className="item"><span>Nacionalities: &nbsp; </span>USA, Mexico</div></div>
                                </div> 
                                <div className="qualifications">
                                    <h3>Engineering Skills</h3>
                                    <p className="desc"></p>
                                    <div className="wrapper">
                                        <div className="dodo_progress">
                                            <Skills 
                                                data={AboutMeData.skills.engineering}
                                                screenDevice={screenDevice} />
                                        </div>
                                    </div>
                                </div>
                                <div className="qualifications">
                                    <h3 className="title">Design Skills</h3>
                                    <p className="desc"></p>
                                    <div className="wrapper">
                                        <div className="dodo_progress">
                                            <Skills 
                                                data={AboutMeData.skills.design}
                                                screenDevice={screenDevice} />
                                        </div>
                                    </div>
                                </div>
                                <div className="qualifications">
                                    <h3 className="title">Professional Experience</h3>
                                    <p className="desc"></p>
                                    <div className="wrapper">
                                        <div className="dodo_progress">
                                            <Experience 
                                                data={AboutMeData.experience}
                                                screenDevice={screenDevice} />
                                        </div>
                                    </div>
                                </div>

                                <div className="qualifications">
                                    <h3 className="title">Education</h3>
                                    <p className="desc"></p>
                                    <div className="wrapper">
                                        <div className="dodo_progress">
                                            <Education 
                                                data={AboutMeData.education}
                                                screenDevice={screenDevice} />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    const mdlgView = () => {
        return (
            <div className="mdlg-about-container"> 
                <p>Tablet View </p>
                <div className="aae-about" id="about">
                    <div className="container">
                        <div className="about-title"><h3> {AboutMeData.pageTitle}</h3></div>
                        <div className="content">
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1200"
                                data-aos-delay="100">
                                <div className="info">
                                    <h3> {AboutMeData.pageWelcome} </h3>
                                    <p> {AboutMeData.pageParagraphs[0]} </p>
                                    <p> {AboutMeData.pageParagraphs[1]} </p>
                                   
                                </div>
                                <div className="personal-info">
                                    <h3> Personal Info </h3>
                                    <div className="section-info-container">
                                        <div className="section-info"><div className="item"> <span>First Name: &nbsp;</span> Antonio</div> <div className="item"> <span>Last Name: &nbsp; </span>Aranda Eggermont</div></div>
                                        <div className="section-info"><div className="item"> <span>Cities of Residence: &nbsp;</span>Seattle, Mexico City</div>  <div className="item"><span>Email: &nbsp; </span> Antonio.Eggermont@post.harvard.edu</div></div>
                                        <div className="section-info"><div className="item"> <span>Languages: &nbsp;</span>English, Spanish</div>  <div className="item"><span>Nacionalities: &nbsp; </span> USA, Mexico</div></div>
                                    </div>
                                </div> 
                                <div className="qualifications">
                                    <h3>Engineering Skills</h3>
                                    <p className="desc"></p>
                                    <div className="wrapper">
                                        <div className="dodo_progress">
                                            <Skills 
                                                data={AboutMeData.skills.engineering}
                                                screenDevice={screenDevice} />
                                        </div>
                                    </div>
                                </div>
                                <div className="qualifications">
                                    <h3 className="title">Design Skills</h3>
                                    <p className="desc"></p>
                                    <div className="wrapper">
                                        <div className="dodo_progress">
                                            <Skills 
                                                data={AboutMeData.skills.design}
                                                screenDevice={screenDevice} />
                                        </div>
                                    </div>
                                </div>
                                <div className="qualifications">
                                    <h3 className="title">Professional Experience</h3>
                                    <p className="desc"></p>
                                    <div className="wrapper">
                                        <div className="dodo_progress">
                                            <Experience 
                                                data={AboutMeData.experience}
                                                screenDevice={screenDevice} />
                                        </div>
                                    </div>
                                </div>

                                <div className="qualifications">
                                    <h3 className="title">Education</h3>
                                    <p className="desc"></p>
                                    <div className="wrapper">
                                        <div className="dodo_progress">
                                            <Education 
                                                data={AboutMeData.education}
                                                screenDevice={screenDevice} />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    const desktopView = () => {
        return (
            <div className="desktop-about-container"> 
                <p>Desktop View </p>
                <div className="aae-about">
                    <div className="container">
                            <div 
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="about-title">
                                    <h3> { AboutMeData.pageTitle } </h3>
                            </div>

                            <div className="intro-container">

                                <img 
                                    src={AboutMeData.profilePhoto}
                                    alt="icon"
                                    style = {{
                                        width: '24rem',
                                        height: '24rem',
                                        marginTop: '3rem',
                                        borderRadius: '1rem'
                                    }}
                                />
                                <div className="intro-desc">
                                    <span className="welcome">  { AboutMeData.pageWelcome } </span>
                                    <div 
                                       
                                        className="info">
                                        {
                                            AboutMeData.pageParagraphs.map ( paragraph => (
                                                <p 
                                                   data-aos="fade-up"
                                                   data-aos-delay="50"
                                                   data-aos-duration="500"
                                                > {paragraph} </p>
                                            ))
                                        }
                                    </div>
                                </div>
                             
                            </div>

                        <div className="content">
                            <div 
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="personal-info">
                                <h3> Personal Info </h3>
                                <div className="section-info-container">
                                    <div className="section-info"><div className="item"> <span>First Name: &nbsp;&nbsp; </span>Antonio</div> <div className="item"> <span>Last Name: &nbsp;&nbsp; </span>Aranda Eggermont</div></div>
                                    <div className="section-info"><div className="item"> <span>Cities of Residence: &nbsp;&nbsp;</span>Seattle, Mexico City</div>  <div className="item"><span>Email: &nbsp;&nbsp; </span>aaeggermont@outlook.com</div></div>
                                    <div className="section-info"><div className="item"> <span>Languages: &nbsp;&nbsp;</span>English, Spanish</div>  <div className="item"><span>Nacionalities: &nbsp;&nbsp; </span>USA, Mexico</div></div>
                                </div>
                            </div> 
                            <div 
                                data-aos="fade-up"
                                data-aos-duration="700"
                                className="qualifications">
                                <h3 className="title">Engineering Skills</h3>
                                <p className="desc"></p>
                                <div className="wrapper">
                                    <div className="dodo_progress">
                                        <Skills 
                                            data={AboutMeData.skills.engineering}
                                            screenDevice={screenDevice} />
                                    </div>
                                </div>
                            </div>
                            <div 
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                className="qualifications">
                                <h3 className="title">Design Skills</h3>
                                <p className="desc"></p>
                                <div className="wrapper">
                                    <div className="dodo_progress">
                                        <Skills 
                                            data={AboutMeData.skills.design}
                                            screenDevice={screenDevice} />
                                    </div>
                                </div>
                            </div>

                            <div 
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay="00"
                                className="qualifications">
                                <h3 className="title">Professional Experience</h3>
                                <p className="desc"></p>
                                <div className="wrapper">
                                    <div className="dodo_progress">
                                        <Experience 
                                            data={AboutMeData.experience}
                                            screenDevice={screenDevice} />
                                    </div>
                                </div>
                            </div>

                            <div
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                className="qualifications">
                                <h3 className="title">Education</h3>
                                <p className="desc"></p>
                                <div className="wrapper">
                                    <div className="dodo_progress">
                                        <Education 
                                            data={AboutMeData.education}
                                            screenDevice={screenDevice} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
        );
    }


    if ( screenDevice.laptop ) { 
        return desktopView();
    } else if ( screenDevice.md || screenDevice.lg) { 
        return mdlgView();
    } else if ( screenDevice.xs || screenDevice.sm ) {    
        return smsxView();
    }
}

export default Profile;

Profile.prototype = {
    screenDevice: PropTypes.object.isRequired
}
