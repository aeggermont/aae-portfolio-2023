import React from 'react';
import { useState, useEffect } from 'react';
import './AutomaticSeater.scss';
import SectionTitle from './Components/SectionTitle';
import TitleParagraph from './Components/TitleParagraph';
import ParagraphText from './Components/ParagraphText';
import ParagraphBlock from './Components/ParagraphBlock';
import ParagraphImg from './Components/ParagraphImg';
import iPadViewAnimated from './Images/iPadViewAnimated.png';
import STSectionLogo from './Images/STSectionLogo.png';
//import STSectionLogoDesktop from './Images/STSectionLogoDesktop.png'
//import STSectionLogoTablet from './Images/STSectionLogoTablet.png';
import ProjectOverview from './Components/ProjectOverview';
import { useMediaQuery } from 'react-responsive'

/* Images */

import STSectionLogoDesktop from './Images/STSectionLogoDesktop.png';
import STSectionLogoTablet from './Images/STSectionLogoTablet.png';
import STSectionLogoMobile from './Images/STSectionLogoMobile.png';

function AutomaticSeater()  {

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });

    /*
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1367, maxWidth: 3840 });
    const isTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1366 });
    const isMobile = useMediaQuery({ minWidth: 360, maxWidth: 1170 });
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const isRetina = useMediaQuery({ minResolution: '2dppx' }); */
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 2600px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1366px)' });
    const isMobile = useMediaQuery({ query: '(min-width: 360px) and (max-width: 428px)'});

    /*
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    */
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const screenDevice = {
        isDesktopOrLaptop: isDesktopOrLaptop,
        isTablet: isTablet,
        isMobile: isMobile,
        isPortrait: isPortrait,
        isRetina: isRetina
    }

    const overviewParagraphs  = [
        "Disney Theme Parks operate on the principle of serving as many Guests as possible and as quickly as possible. ",
        "Maintaining high attraction capacity and throughput is essential to getting Guests into the gates and keeping them happy while maximize attractions capacity. "
    ];

    const problemParagraphs  = [
        "How might we increase the throughput and optimize the seating assignments of guests at rides and attractions  while preserving current operation standards at Disney theme parks?"
    ];

    const solutionParagraphs  = [
        "A scalable, configuration driven Web mobile app designed to automate the seating assignments for Guests in attractions and rides at  Disney theme parks. "
    ];

    const starToursData = {
        sectionImages : [
            STSectionLogoDesktop,
            STSectionLogoTablet,
            STSectionLogoMobile
        ] 
    }

    return (
        <>
            <h1>Device Test!</h1>
            <div>
              <ul>
                <li>Width: <strong>{screenSize.dynamicWidth}</strong></li>
                <li>Height: <strong>{screenSize.dynamicHeight}</strong></li>
              </ul>    
            </div>
        
            {isRetina && <p>You are retina</p>}

            <ParagraphBlock
               title="Overview"
               paragraphs={overviewParagraphs}
               screenDevice={screenDevice}
            />

            <ParagraphBlock
               title="Problem"
               paragraphs={problemParagraphs}
               screenDevice={screenDevice}
            />

            <ParagraphBlock
               title="Solution"
               paragraphs={solutionParagraphs}
               screenDevice={screenDevice}
            />

            <ParagraphImg
                src={STSectionLogo}
                screenDevice={screenDevice}
                images={starToursData.sectionImages}
                alt="Star Tours Interactive View"
                width="100%"
                height="189px"
            />

            <SectionTitle 
                title="Star Tours Case Study"
                screenDevice={screenDevice}
            />
        </>
    )
}

export default AutomaticSeater;



/* 
        <div>
            <ParagraphBlock
               title="Overview"
               paragraphs={overviewParagraphs}
            />

            <ParagraphBlock
               title="Problem"
               paragraphs={problemParagraphs}
            />

            <ParagraphBlock
               title="Solution"
               paragraphs={solutionParagraphs}
            />

            <ParagraphImg
                src={iPadViewAnimated}
                alt="Star Tours Interactive View"
                width="325px"
                height="226px"
            />
            <TitleParagraph 
                  title="Project Overview"
            />
            <ProjectOverview />

            <ParagraphImg
                src={STSectionLogo}
                alt="Star Tours Interactive View"
                width="100%"
                height="189px"
            />
        </div>
        */