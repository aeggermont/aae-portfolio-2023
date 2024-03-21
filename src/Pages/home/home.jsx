import React from 'react';
import Layout from '../../Layouts';
//import LandingPage from '../../Components/landing_page/landing_page';
import LandingPage from './Components/LandingPage';

import BackgroundSection from '../../Components/background-section/background-section';
import MainProjectsSection from '../../Components/main-projects-section/main-projects-section';
import Testimonials from '../../Components/testimonials/Testimonials';
import Contact from '../../Components/contact/Contact';
import WriteMe from '../../Components/write-me/Writeme';
import { Parallax } from 'react-scroll-parallax';

function Home() {
    return (  
        <Layout>
            {/* 
            <Parallax translateY={['-100px', '50px']}>
            </Parallax>
            <Parallax translateY={['-150px', '200px']}>
            </Parallax>
            */}
            
            <LandingPage/>
            
            <BackgroundSection />
       

       
            <MainProjectsSection />

            <Contact />
             {/* 
            <Parallax translateY={['-150px', '300px']}>
                <MainProjectsSection />
            </Parallax>

            <Parallax translateY={['250px', '200px']}>
                <Testimonials />
            </Parallax>

            <Parallax translateY={['300px', '300px']}>
                <div className='contact-write-section'>
                    <div>
                        <Contact />
                    </div>
                    <div>
                        <WriteMe /> 
                    </div>  
                </div>
            </Parallax> */}
        </Layout>
    )
}

export default Home;
