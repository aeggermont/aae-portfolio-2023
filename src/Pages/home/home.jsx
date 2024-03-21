import React from 'react';
import Layout from '../../Layouts';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';

import BackgroundSection from './Components/BackgroundSection';
import LandingPage from './Components/LandingPage';
import MainProjectsSection from '../../Components/main-projects-section/main-projects-section';
import Testimonials from '../../Components/testimonials/Testimonials';
import Contact from '../../Components/contact/Contact';
import WriteMe from '../../Components/write-me/Writeme';


// import LandingPage from '../../Components/landing_page/landing_page';
// import BackgroundSection from '../../Components/background-section/background-section';

function Home() {

    const xs = useMediaQuery({ query: '(max-width: 767px)' });
    const sm = useMediaQuery({ query: 'only screen and (min-width: 576px) and (max-width: 767px)' });
    const md = useMediaQuery({ query: 'only screen and (min-width: 768px) and (max-width: 991px)' });
    const lg = useMediaQuery({ query: 'only screen and (min-width: 992px) and (max-width: 1200px)' });
    const desktop = useMediaQuery({ query: 'only screen and (min-width: 1200px)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

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
            {/* 
            <Parallax translateY={['-100px', '50px']}>
            </Parallax>
            <Parallax translateY={['-150px', '200px']}>
            </Parallax>
            */}
            
            <LandingPage/>
            
            <BackgroundSection screenDevice = {screenDevice} />
       

       
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
