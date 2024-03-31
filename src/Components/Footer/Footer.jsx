import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./Footer.scss";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import siteLogo from  "../../assets/logos/AAELogo.png";
import FooterImg from './Footer.png';

function Footer(props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const screenDevice = props.screenDevice;
    
    const handleLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/antonio-aranda-eggermont-23aa7b8/';
    };

    return (
        <div className="container" >

            <div className="footer-container"  style={{ backgroundImage: `url("images/footer-background.svg")`, backgroundRepeat: 'no-repeat' }}>
                <div className="logo-section "> 
                    <img src={siteLogo}  alt="Antonio Aranda Eggermont"/>
                    {/*
                    

                    <div class="contact-area">
                        <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleLinkedIn}>
                            <input hidden accept="image/*" type="file" />
                            <LinkedInIcon />
                        </IconButton>
                    </div>     */}
                </div>
                <div className="copyright-section"> <span> Antonio Aranda Eggermont - All RIghts Serserved </span></div>
                <div className="navigation-section">                 
                    <div className="navigation-title"> Navigation</div>
                    <span> Home</span>
                    <span> About Me</span>
                    <span> My Work</span>
                    <span> Contact Me</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;

Footer.prototype = {
    screenDevice: PropTypes.object.isRequired
}
