import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
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

/* Diagrams */

import ActivityTheoryR3XTablet from './Images/ActivityTheoryR3X-Tablet.png';
import ActivityTheoryR3XMobile from './Images/ActivityTheoryR3X-Mobile.png';
import ActivityTheoryR3XDesktop from './Images/ActivityTheoryR3X-Desktop.png';

import InformationArchitectureDesktop from './Images/InformationArchitecture-Desktop.png';
import InformationArchitectureMobile from './Images/InformationArchitecture-Mobile.png';
import InformationArchitectureTablet from './Images/InformationArchitecture-Tablet.png';
 
/* Star Tours Section */

import iPadViewAnimated from './Images/iPadViewAnimated.png';
import STSectionLogo from './Images/STSectionLogo.png';
import STSectionLogoDesktop from './Images/STSectionLogoDesktop.png';
import STSectionLogoTablet from './Images/STSectionLogoTablet.png';
import STSectionLogoMobile from './Images/STSectionLogoMobile.png';
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
            ]
        },
        afinityDiagram : {
            title: "Affinity Map",
            description: ["The  information collected as part of the research from physical observations, security camera surveillance videos, qualitative from interviews with Cast Members and co-design sessions was use to create an affinity diagram map."]
        },
        ideation : {
            title: "3. Ideation",
            subTitle: "Organizing a Framework",
            paragraphs: [ "Based on the activity theory analysis and affinity diagram data, the ideas and concepts were sorted and min features and functionality were identified through a sitemap. ",
                          "This was presented as a way to visualize the navigation structure and information architecture of proposed screens."]
        },
        infoArch : {
            tittle: "Site Map",
            description: "App is designed with reusable components",
            images: [
                InformationArchitectureDesktop,
                InformationArchitectureMobile,
                InformationArchitectureTablet
            ]
        },
        infoArch : {
            subTitle: "Personas",
            paragraphs: ["Two user flows were mapped based on the user research and the identified activities, actions and at the facility's operation. "]
        }
    }


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
                title={starToursData.infoArch.tittle}
                description={starToursData.infoArch.description}
                screenDevice={screenDevice}
                images={starToursData.infoArch.images}
                alt="Star Tours Interactive View"
                width="100%"
                height="189px"
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