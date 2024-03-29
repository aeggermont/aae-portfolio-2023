import React, { useState, useEffect } from 'react';
import './ContactPage.scss';
import Layout from '../../Layouts';
import Contact from '../Home/Components/Contact';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function ContactPage()  {
    
    const xs = useMediaQuery({ query: '(max-width: 767px)' });
    const sm = useMediaQuery({ query: 'only screen and (min-width: 576px) and (max-width: 767px)' });
    const md = useMediaQuery({ query: 'only screen and (min-width: 768px) and (max-width: 991px)' });
    const lg = useMediaQuery({ query: 'only screen and (min-width: 992px) and (max-width: 1200px)' });
    const desktop = useMediaQuery({ query: 'only screen and (min-width: 1200px)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    
    const screenDevice = {
        isPortrait: isPortrait,
        isRetina: isRetina,
        sm: sm,
        xs: xs,
        md: md,
        lg: lg,
        desktop: desktop
    };
    
    return (
        <Layout>
             <div className="contact">
                <div className="container">
                    <div 
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="about-title">
                            <h3> Contact </h3>
                    </div>
                    <div className='contact-form'>
                        <Contact screenDevice={screenDevice} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ContactPage;