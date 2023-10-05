import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import {
    TransformWrapper,
    TransformComponent,
    ReactZoomPanPinchRef,
  } from "react-zoom-pan-pinch";
import './AutomaticSeater.scss';

/* Project Banner */

import ProjectBanner from './Components/ProjectBanner';


/* Landing page demo animated gifs*/
import LandingPageDemoMobile from './Images/LandingPageDemo.svg';
import LandingPageDemoTablet from './Images/LandingPageDemo.svg';
import LandingPageDesktop from './Images/LandingPageDemo.svg';

import STBannerDesktop from './Images/STBannerDesktop.svg';
import STBannerTablet from './Images/STBannerTablet.svg';
import STBannerMobile from './Images/STBannerMobile.svg';
import ResearchMethod from './Images/researchMethod.svg';

/* Reusable components */
import SectionTitle from './Components/SectionTitle';
import TitleParagraph from './Components/TitleParagraph';
import ParagraphText from './Components/ParagraphText';
import ParagraphBlock from './Components/ParagraphBlock';
import ParagraphImg from './Components/ParagraphImg';
import DemoAnimation from './Components/DemoAnimation';
import ProjectOverview from './Components/ProjectOverview';
import BulletPoints from './Components/BulletPoints';
import IllustrationDiagram from './Components/IllustrationDiagram';
import Persona from './Components/Persona';
import WireframeIllustration from './Components/WireframeIllustration';


/***   Star Tours Section  ***/

import ActivityTheoryR3XTablet from './Images/ActivityTheoryR3X-Tablet.svg';
import ActivityTheoryR3XDesktop from './Images/ActivityTheoryR3X-Desktop.svg';
import ActivityTheoryR3XMobile from './Images/ActivityTheoryR3X-Mobile.svg';
import ActivityTheoryR3XMobileLarge from './Images/ActivityTheoryR3X-Mobile-Large.png';
import InformationArchitectureDesktop from './Images/InformationArchitecture-Desktop.png';
import InformationArchitectureMobile from './Images/InformationArchitecture-Mobile.png';
import InformationArchitectureTablet from './Images/InformationArchitecture-Tablet.png';

import iPadViewAnimated from './Images/iPadViewAnimated.png';
import STSectionLogo from './Images/STSectionLogo.png';
import STSectionLogoDesktop from './Images/STSectionLogoDesktop.png';
import STSectionLogoTablet from './Images/STSectionLogoTablet.png';
import STSectionLogoMobile from './Images/STSectionLogoMobile.png';


// Site Map Diagrams
import SiteMapMobile from './Images/SiteMap-Mobile.svg';
import SitemapTablet from './Images/Sitemap-Tablet.svg';
import SitemapDesktop from './Images/Sitemap-Desktop.svg';

// Personas
import GrouperPersonaDesktop from './Images/GrouperPersona-Desktop.svg';
import GateAgentPersonaDesktop from './Images/GateAgentPersona-Desktop.svg';

import GrouperPersonaTablet from './Images/GrouperPersona-Tablet.svg';
import GateAgentPersonaTablet from './Images/GateAgentPersona-Tablet.svg';

import GrouperPersonaMobile from './Images/GrouperPersona-Mobile.svg';
import GateAgentPersonaMobile from './Images/GateAgentPersona-Mobile.svg';

// Wireframes Landing Page

import LandingScreenStarToursDesktop from './Images/LandingScreen-StarTours-Desktop.svg';
import LandingScreenStarToursTablet from './Images/LandingScreen-StarTours-Tablet.svg';
import LandingScreenStarToursMobile from './Images/LandingScreen-StarTours-Mobile.svg';

import LandingScreenStarToursSpecsDesktop from './Images/LandingScreen-StarToursSpecs-Desktop.svg';
import LandingScreenStarToursSpecsTablet from './Images/LandingScreen-StarToursSpecs-Tablet.svg';
import LandingScreenStarToursSpecsMobile from './Images/LandingScreen-StarToursSpecs-Mobile.svg';


import { FaRProject } from 'react-icons/fa';


function AutomaticSeater()  {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 2600px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1366px)' });
    const isMobile = useMediaQuery({ query: '(min-width: 360px) and (max-width: 428px)'});
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const screenDevice = {
        isDesktopOrLaptop: isDesktopOrLaptop,
        isTablet: isTablet,
        isMobile: isMobile,
        isPortrait: isPortrait,
        isRetina: isRetina
    }

    /*** START OF DATA ***/

    const bannerData = {
        title: 'Automatic Seating Assignments',
        subtitle: 'Analytics & Park Operations ',
        images: [
            STBannerDesktop,
            STBannerTablet,
            STBannerMobile
        ]
    }

    const animatedImages = {
        title: 'Sample Main Screen Operations',
        subtitle: 'The App iis designed to run on a touch tone tablet device',
        images: [
            LandingPageDemoMobile,
            LandingPageDemoTablet,
            LandingPageDesktop
        ]
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

    const projectOverview = {
        title: 'Project Overview',   
    }


    const starToursData = {
        sectionImages : [
            STSectionLogoDesktop,
            STSectionLogoTablet,
            STSectionLogoMobile
        ],
        overview: [
            "Star Tours was the first attraction where the automatic seater was designed, developed and implemented.",
            "This attraction was chosen because of the very high guest attendance and  long waiting times. ",
            "The Human Centered Design design  was employed during the design, development and implementation phases. Design Thinking and Human Computer Interaction(HCI) were essential methodologies during the initial analysis phase."
        ],
        theProblem: [
            "Cast Members need to keep track of how many Guests were in a given row and try to do some simple mathematical calculations on the fly to squeeze in more parties. This manual process results in longer waiting times for Guests and lowers the attractions throughput.",
            "I needed to identify which tasks and operations could be automated or improved to seat  40 people per vehicle in less than 4:40 minutes. in each cycle.  The goal was to increase the number of ride cycles to improve the attractions throughput."
        ],
        userResearch: [
            "In order to understand better the pain points and current processes, I first focused on understanding the operation aspects of the facility and current workflows and procedures  of Cast Members working at the attraction. ",
            "I employed the following  research methods:"
        ],
        userResearchMethods: [
            { icon: ResearchMethod , text: "Rapid Ethnography observations at the facility." },
            { icon: ResearchMethod , text: "Contextual Inquiry Interviews with facility managers and Cast Member leads."},
            { icon: ResearchMethod , text: "Development Introspection to understand technical capabilities."},
            { icon: ResearchMethod , text: "Participatory Co-design and ideations with Cast Members working at the facility."}
        ],
        reframingTheProblem: [
            "Activity Theory focuses on the motivated human needs and how to perform a given activity based on the underlying needs that motivate the execution of tasks and the ways they can be carried out.",
            "Understanding these underlying needs when Cast Members are interacting with technology and the dea of paying attention to a goal oriented activity helps  understand current manual operation processes and identify processes that could be optimized and automated. The main focus is on meaningful goal oriented activities. "
        ],
        hci : {
            title: "Activity Theory Empathy Mappings",
            description: "Work flow analysis to identify  actions and operations motivated by the activity to optimize the assignment of seats for Guests at Disney rides and attractions.",
            sectionImages: [
                ActivityTheoryR3XDesktop,
                ActivityTheoryR3XTablet,
                ActivityTheoryR3XMobile
            ],
            backgroundColor: "#ffffff"
        },
        afinityDiagram : {
            title: "Affinity Map",
            description: ["The  information collected as part of the research from physical observations, security camera surveillance videos, qualitative from interviews with Cast Members and co-design sessions was use to create an affinity diagram map."]
        },
        ideation : {
            title: "3. Ideation",
            subTitle: "Organizing a Framework",
            paragraphs: [ "Based on the activity theory analysis and affinity diagram data collected,  the ideas and concepts were sorted so features and functionality were identified through a sitemap.",
                          "TThe goal was to architect an application with components that could be reused following configuration defined based on different park attractions and rides."]
        },
        sideMap : {
            title: "Site Map",
            description: "Site Map Visualizing the navigation structure and information architecture for potential screens.",
            images: [
                SitemapDesktop,
                SitemapTablet,
                SiteMapMobile
            ]
        },
        persona: {
            title: "Personas",
            paragraphs: ["Two user flows were mapped based on the user research and the identified activities, actions and at the facility's operation."],
            personas: [
                {
                    title: "Grouper",
                    paragraphs: ["An operations cast member helping organize arriving groups of guests at an attraction into parties and assign them to a gate at ride or theater."],
                    alt: "The Grouper",
                    images: [
                        GrouperPersonaDesktop,
                        GrouperPersonaTablet,
                        GrouperPersonaMobile
                    ]
                },
                {
                    title: "Grouper",
                    paragraphs: ["An operations cast member helping guest grouped into parties find their seats in attraction cabins or theater sections."],
                    alt: "The Grouper",
                    images: [
                        GateAgentPersonaDesktop,
                        GateAgentPersonaTablet,
                        GateAgentPersonaMobile
                    ]
                },
            ]
        },
        design: {
            title: "4. Designing for Users First",
            paragraphs: [
                "Wireframes were developed to depict dashboards to control the flow of Guests into the facility. In addition to data collected from user research, physical artifacts used in operations were used as a source of inspiration to digitize activities and actions. "   
            ] 
        },
        wireframes: {
            title: "Wire frames",
            paragraphs: [ 
                "Wireframes and simulations were developed using Figma and were extensibly used at multiple design and co-design iterations. "
            ],
            wireframes : [
                {
                    title: 'Landing Screen',
                    titleFontColor: '#1D2D92',
                    backgroundColor: '#ffffff',
                    images: [
                        LandingScreenStarToursDesktop,
                        LandingScreenStarToursTablet,
                        LandingScreenStarToursMobile
                    ]
                },
                {
                    title: 'Landing Screen Specs',
                    titleFontColor: '#00000',
                    backgroundColor: '#F4F4F4',
                    images: [
                        LandingScreenStarToursSpecsDesktop,
                        LandingScreenStarToursSpecsTablet,
                        LandingScreenStarToursSpecsMobile
                    ] 
                }
            ]
        }

    }
    console.log('DATA');
    console.log(starToursData);

    /*** END OF DATA ***/

    return (
        <> 
            <ProjectBanner
                title= {bannerData['title']}
                subTitle= {bannerData['subtitle']}
                alt="Automatic Seating Assignments Project"
                images={bannerData['images']}
                screenDevice={screenDevice}
            />
       
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
      
            <DemoAnimation 
                title={animatedImages['title']}
                subTitle={animatedImages['subtitle']}
                images={animatedImages['images']}
                screenDevice={screenDevice}
            ></DemoAnimation>

            <ProjectOverview 
                title={animatedImages['title']}
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

            <ParagraphBlock
               title="Overview"
               paragraphs={starToursData.overview}
               screenDevice={screenDevice}
            />

          

            <ParagraphBlock
               title="1. Understanding the Problem"
               paragraphs={starToursData.theProblem}
               screenDevice={screenDevice}
            />

            <ParagraphBlock
               title="2. User Research"
               paragraphs={starToursData.userResearch}
               screenDevice={screenDevice}
            />

            <BulletPoints
                  bulletPoints={starToursData.userResearchMethods}
                  screenDevice={screenDevice}
            />


            <ParagraphBlock
               title="3. Reframing the Problem"
               subTitle="Human Computer Interaction Analysis"
               paragraphs={starToursData.reframingTheProblem}
               screenDevice={screenDevice}
            />

            <IllustrationDiagram
                title={starToursData.hci.title}
                description={starToursData.hci.description}
                src={STSectionLogo}
                screenDevice={screenDevice}
                images={starToursData.hci.sectionImages}
                alt="Star Tours Interactive View"
                backgroundColor={starToursData.hci.backgroundColor}
                width="100%"
                height="189px"
            />

            <ParagraphBlock
               subTitle={starToursData.afinityDiagram.title}
               paragraphs={starToursData.afinityDiagram.description}
               screenDevice={screenDevice}
            />

            <ParagraphBlock
               title={starToursData.ideation.title}
               subTitle={starToursData.ideation.subTitle}
               paragraphs={starToursData.ideation.paragraphs}
               screenDevice={screenDevice}
            />

            <IllustrationDiagram
                title={starToursData.sideMap.title}
                description={starToursData.sideMap.description}
                screenDevice={screenDevice}
                images={starToursData.sideMap.images}
                backgroundColor={starToursData.sideMap.backgroundColor}
                alt="Star Tours Interactive View"
                width="100%"
                height="189px"
            />


            <ParagraphBlock
               title={starToursData.persona.title}
               paragraphs={starToursData.persona.paragraphs}
               screenDevice={screenDevice}
            />

            <Persona
                title={starToursData.persona.personas[0].title}
                alt={starToursData.persona.personas[0].alt}
                screenDevice={screenDevice}
                paragraphs={starToursData.persona.personas[0].paragraphs}
                images={starToursData.persona.personas[0].images}
            />

            <Persona
                title={starToursData.persona.personas[1].title}
                alt={starToursData.persona.personas[1].alt}
                screenDevice={screenDevice}
                paragraphs={starToursData.persona.personas[1].paragraphs}
                images={starToursData.persona.personas[1].images}
            />

            <ParagraphBlock
               title={starToursData.wireframes.title}
               paragraphs={starToursData.wireframes.paragraphs}
               screenDevice={screenDevice}
            />


            <IllustrationDiagram
                title={starToursData.wireframes.wireframes[0].title}
                description={starToursData.wireframes.wireframes[0].description}
                screenDevice={screenDevice}
                images={starToursData.wireframes.wireframes[0].images}
                backgroundColor={starToursData.wireframes.wireframes[0].backgroundColor}
                alt="Star Tours Interactive View"
                width="100%"
                height="189px"
            />

            <WireframeIllustration
              title={starToursData.wireframes.wireframes[1].title}
              titleFontColor={starToursData.wireframes.wireframes[1].titleFontColor}
              alt={starToursData.wireframes.wireframes[1].alt}
              backgroundColor={starToursData.wireframes.wireframes[1].backgroundColor}
              images={starToursData.wireframes.wireframes[1].images}
              screenDevice={screenDevice}
            />

            <WireframeIllustration
              title={starToursData.wireframes.wireframes[1].title}
              titleFontColor={starToursData.wireframes.wireframes[1].titleFontColor}
              alt={starToursData.wireframes.wireframes[1].alt}
              backgroundColor={starToursData.wireframes.wireframes[1].backgroundColor}
              images={starToursData.wireframes.wireframes[1].images}
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


        // import { subtle } from 'crypto';


/*
function deviceTest() {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
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
        </>
    )
} */

    /*
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1367, maxWidth: 3840 });
    const isTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1366 });
    const isMobile = useMediaQuery({ minWidth: 360, maxWidth: 1170 });
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const isRetina = useMediaQuery({ minResolution: '2dppx' }); */

        /*
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    */