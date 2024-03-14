import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './StoryTeller.scss';
import storyTellerData from './StoryTellerData.jsx';

import { useParallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import OverviewParagraphBlock from './Components/OverviewParagraphBlock';
import SolutionDemo from './Components/SolutionDemo';
import ProjectOverview from './Components/ProjectOverview';
import Team from './Components/Team';
import SectionImg from './Components/SectionImg';
import ParagraphBlock from './Components/ParagraphBlock';
import BulletPoints from './Components/BulletPoints.jsx';
import IllustrationDiagram from './Components/IllustrationDiagram';
import ParagraphImg from './Components/ParagraphImg';
import IlllustrationGallery from './Components/IlllustrationGallery';

import StoryTellerDesktopView from './StoryTellerDesktopView.jsx';
import StoryTellerMdLgView from './StoryTellerMdLgView.jsx';
import StoryTellerSmSx from './StoryTellerSmSxView.jsx';

import DesignSystemBackground from './Images/DesignSystemBackground.png';


function StoryTeller() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 4600px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1366px)' });
    const isMobile = useMediaQuery({ query: '(min-width: 360px) and (max-width: 428px)'});
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const xs = useMediaQuery({ query: '(max-width: 767px)' });
    const sm = useMediaQuery({ query: 'only screen and (min-width: 576px) and (max-width: 767px)' });
    const md = useMediaQuery({ query: 'only screen and (min-width: 768px) and (max-width: 991px)' });
    const lg = useMediaQuery({ query: 'only screen and (min-width: 992px) and (max-width: 1200px)' });
    const laptop = useMediaQuery({ query: 'only screen and (min-width: 1200px)' });

    const screenDevice = {
        isDesktopOrLaptop: isDesktopOrLaptop,
        isTablet: isTablet,
        isMobile: isMobile,
        isPortrait: isPortrait,
        isRetina: isRetina,
        sm: sm,
        xs: xs,
        md: md,
        lg: lg,
        laptop: laptop
    };

    // Dekstop/Laptop view


    if ( xs || sm) {
        return (
            <StoryTellerSmSx
                contentData={storyTellerData}
                screenDevice={screenDevice} 
            />
        );
    } else if ( md || lg) {

        return (
            <StoryTellerMdLgView
                contentData={storyTellerData}
                screenDevice={screenDevice} 
            />
        );
    } else if (  laptop ) {
        return (
            <StoryTellerDesktopView
                contentData={storyTellerData}
                screenDevice={screenDevice} 
            />
        );
       
    }

            {/*
            <div className='container-body'>
                    <ParallaxBanner
                        layers={[
                            { image: "/images/projects/storyteller/clouds-layer-4.png", speed: 60 },
                            { image: "/images/projects/storyteller/clouds-layer-2.png", speed: 10 },
                            { image: "/images/projects/storyteller/clouds-layer-3.png", speed: 5 },
                            { image: "/images/projects/storyteller/clouds-layer-1.png", speed: -10 },
                           
                        ]}
                        className="test-class"
                    >
                        <div>
                            <h1 className="banner_title">Walt Disney World</h1>
                            <h1 className="banner_subtitle">Augmented Reality Magic Tours</h1>
                            <p className='banner_description'> 
                                A graduate research project at University of Washington
                                Human Centered Design & Engineering exploring the use of
                                computer vision, machine learning and Augmented Reality at
                                Disney theme parks.
                            </p>
                        </div>
                    </ParallaxBanner>
            </div>
            */}
          
}

export default StoryTeller;