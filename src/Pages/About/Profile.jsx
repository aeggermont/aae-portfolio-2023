import React, { useState, useEffect } from "react";
import './Profile.scss';
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import AboutMeData from "./AboutData";
import Skills from './Components/skills';
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

    let profilePhotoStyle = {
        width: '24rem',
        height: '24rem',
        marginTop: '3rem',
        borderRadius: '1rem'
    }

    const smsxView = () => {
        return (
            <div className="aae-about">
                <div className="container">
                    <div className="about-title"><h3> {AboutMeData.pageTitle}</h3></div>
                    <div style={{textAlign: 'center'}}>
                        <img 
                            src={AboutMeData.profilePhoto}
                            alt="icon"
                            style = {profilePhotoStyle}
                        />
                    </div>
                    <div className="content">
                        <div>
                            <div className="info">
                                <h3> {AboutMeData.pageWelcome} </h3>
                                {
                                    AboutMeData.pageParagraphs.map (  (paragraph, index)  => (
                                        <p> {paragraph} </p>
                                    ))
                                }
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
        </div> );
    }

    const mdlgDesktopView = () => {
        return (
            <div> 
                <p>Desktop View </p>
                <div className="aae-about">
                    <div className="container">
                            <div 
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="about-title">
                                    <div className="label">  { AboutMeData.pageTitle } </div>
                            </div>

                            <div className="intro-container">

                                <img 
                                    src={AboutMeData.profilePhoto}
                                    alt="icon"
                                    style = {profilePhotoStyle}
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

    if ( screenDevice.md || screenDevice.lg ) {
        profilePhotoStyle = {
            width: '16rem',
            height: '16rem',
            marginTop: '3rem',
            borderRadius: '1rem'
        }
        
        return mdlgDesktopView();

    } else if (screenDevice.desktop ) {
        
        return mdlgDesktopView();
    } else if ( screenDevice.xs || screenDevice.sm ) {
        profilePhotoStyle = {
            width: '15rem',
            height: '15rem',
            marginTop: '3rem',
            borderRadius: '1rem'
        }

        return smsxView();
    }
}

export default Profile;

Profile.prototype = {
    screenDevice: PropTypes.object.isRequired
}
