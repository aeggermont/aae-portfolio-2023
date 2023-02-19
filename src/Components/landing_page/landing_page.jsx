// import { render } from '@testing-library/react';
import React from 'react';
import shapeImg from "../../assets/shapes/shape_1.png";
import bannerPhoto from "../../assets/images/AE-Front-Page-Photo.png";
import "./landing_page.scss";


function LandingPage() {
    console.log('THis is the loanding page!');
    return(
        <section className="main-baner-area">
           
                <div className="aae-banner">
                    <div class="banner-photo">
                        <img src={bannerPhoto} width="100%" id="banner-image-dimension" alt="Antonio Aranda Eggermont" />   
                    </div>
                    
                    <div class="heading-info">
                        <span className="heading-primary-intro"> Hello, my name is Antonio </span>
                        <span className="heading-primary-main"> UX Engineer, Applications Developer & Technologist </span>
                        <span className="heading-primary-sub"> I design and engineer experiences from inception to completion, and adopt emerging technologies through Human -Centered Design</span>
                    </div>

                    <div class="contact-area">
                        <span> Linkedin </span>

                    </div>
                </div>
                <div className="sphere-shape"></div> 
            
            
        </section>
 
    );
}

export default LandingPage;
