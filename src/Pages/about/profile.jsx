import React, { useState } from "react";
import './Profile.scss';
//import './AboutMe.scss';
import Experience from "./Experience";
import Education from "./Education";
import AboutMeData from "./AboutData";
import Skills from './Skills';

import PropTypes from 'prop-types';

function Profile(props) {
    const [isOpen, setIsOpen] = useState(false);
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
                                    <div><h3> Personal Info </h3></div>
                                    <div className="section-info"><div className="item"> First Name: &nbsp; Antonio</div> <div className="item"> Last Name: &nbsp; Aranda Eggermont</div></div>
                                    <div className="section-info"><div className="item"> Cities of Residence: &nbsp;Seattle, Mexico City</div>  <div className="item">Email: &nbsp; Antonio.Eggermont@post.harvard.edu</div></div>
                                    <div className="section-info"><div className="item"> Languages: &nbsp;English, Spanish</div>  <div className="item">Nacionalities: &nbsp; USA, Mexico</div></div>
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
                                    <div><h3> Personal Info </h3></div>
                                    <div className="section-info"><div className="item"> First Name: &nbsp; Antonio</div> <div className="item"> Last Name: &nbsp; Aranda Eggermont</div></div>
                                    <div className="section-info"><div className="item"> Cities of Residence: &nbsp;Seattle, Mexico City</div>  <div className="item">Email: &nbsp; Antonio.Eggermont@post.harvard.edu</div></div>
                                    <div className="section-info"><div className="item"> Languages: &nbsp;English, Spanish</div>  <div className="item">Nacionalities: &nbsp; USA, Mexico</div></div>
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
                                    <p>
                                        {AboutMeData.pageParagraphs[0]}
                                        {AboutMeData.pageParagraphs[1]} 
                                    </p>
                                </div>
                                <div className="personal-info">
                                    <div><h3> Personal Info </h3></div>
                                    <div className="section-info"><div className="item"> First Name: &nbsp;&nbsp; Antonio</div> <div className="item"> Last Name: &nbsp;&nbsp; Aranda Eggermont</div></div>
                                    <div className="section-info"><div className="item"> Cities of Residence: &nbsp;&nbsp;Seattle, Mexico City</div>  <div className="item">Email: &nbsp;&nbsp; antonio.eggermont@post.harvard.edu</div></div>
                                    <div className="section-info"><div className="item"> Languages: &nbsp;&nbsp;English, Spanish</div>  <div className="item">Nacionalities: &nbsp;&nbsp; USA, Mexico</div></div>
                                </div> 

                                <div className="qualifications">
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
