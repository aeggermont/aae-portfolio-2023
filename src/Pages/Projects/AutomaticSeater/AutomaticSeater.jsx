import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
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
import ReusableComp from './Components/ReusableComp';


/***   Star Tours Section Images  ***/

import ActivityTheoryR3XTablet from './Images/ActivityTheoryR3X-Tablet.svg';
import ActivityTheoryR3XDesktop from './Images/ActivityTheoryR3X-Desktop.png';
import ActivityTheoryR3XMobile from './Images/ActivityTheoryR3X-Mobile.svg';
import ActivityTheoryR3XMobileLarge from './Images/ActivityTheoryR3X-Mobile-Large.png';
import InformationArchitectureDesktop from './Images/InformationArchitecture-Desktop.png';
import InformationArchitectureMobile from './Images/InformationArchitecture-Mobile.png';
import InformationArchitectureTablet from './Images/InformationArchitecture-Tablet.png';
import BulletPoint from './Images/BulletPoint.svg'
import SeaterVideoRecording from './Images/SeaterVideoRecording-Desktop.gif';
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
import LandingScreenStarToursTablet from './Images/LandingScreen-StarTours-Tablet.png';
import LandingScreenStarToursMobile from './Images/LandingScreen-StarTours-Mobile.svg';

import LandingScreenStarToursSpecsDesktop from './Images/LandingScreen-StarToursSpecs-Desktop.svg';
import LandingScreenStarToursSpecsTablet from './Images/LandingScreen-StarToursSpecs-Tablet.svg';
import LandingScreenStarToursSpecsMobile from './Images/LandingScreen-StarToursSpecs-Mobile.svg';

import InteractiveModeStarToursDesktop from './Images/InteractiveMode-StarTours-Desktop.svg';
import InteractiveModeStarToursTablet from './Images/InteractiveMode-StarTours-Tablet.svg';
import InteractiveModeStarToursMobile from './Images/InteractiveMode-StarTours-Mobile.svg';

import InteractiveModeStarToursSpecsDesktop from './Images/InteractiveMode-StarToursSpecs-Desktop.svg';
import InteractiveModeStarToursSpecsTablet from './Images/InteractiveMode-StarToursSpecs-Tablet.svg';
import InteractiveModeStarToursSpecsMobile from './Images/InteractiveMode-StarToursSpecs-Mobile.svg';

// Reusable Components+

import TheSeatReusableCompDesktop from './Images/TheSeatReusableComp-Desktop.svg';
import TheSeatReusableCompTablet from './Images/TheSeatReusableComp-Tablet.svg';
import TheSeatReusableCompMobile from './Images/TheSeatReusableComp-Mobile.svg';

import KeypadReusableCompDesktop from './Images/KeypadReusableComp-Desktop.svg';
import KeypadReusableCompTablet from './Images/KeypadReusableComp-Tablet.svg';
import KeypadReusableCompMobile from './Images/KeypadReusableComp-Mobile.svg';

import GeometryReusableCompDesktop from './Images/GeometryReusableComp-Desktop.svg';
import GeometryReusableCompTablet from './Images/GeometryReusableComp-Tablet.svg';
import GeometryReusableCompMobile from './Images/GeometryReusableComp-Mobile.svg';

import GeometryConfigReusableCompDesktop from './Images/GeometryConfigReusableComp-Desktop.svg';
import GeometryConfigReusableCompTablet from './Images/GeometryConfigReusableComp-Tablet.svg';
import GeometryConfigReusableCompMobile from './Images/GeometryConfigReusableComp-Mobile.svg';


//import { FaRProject } from 'react-icons/fa';


function AutomaticSeater()  {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 4600px)' })
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
            SeaterVideoRecording,
            SeaterVideoRecording,
            SeaterVideoRecording
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

        reusableComponents: {
            title: "Reusable Components",
            paragraphs: [
                "The primary  design goal was to build a framework and interactive interface  that can be scalable and reusable across different types of attractions and rides.  To achieve this goal the design was kept minimalistic in the different user interfaces employing material design and a configuration driven backend. ",
                "During the rapid ethnography and user research,  I learned that white boards and cardboards were used to train operation cast members memorize seat numbers  to  mentally do math to allocate groups of people to be seated together in a section of a ride or attraction.",
                "This requires a cognitive effort that could be replaced by automating this process so the cast member focuses mainly on bringing the guest the best possible experience and ensure optimal attraction's throughput.",
                "I identified and developed the following reusable components:"
            ],
            components: [
                {
                    title: "The Seat",
                    alt: "The Seat component",
                    backgroundColor: "#F9F9F9",
                    widthSize: "30%",
                    description: ["The most basic element is the seat component. This element is a clickable component that visualizes the state of a given seat."],
                    images: [
                        TheSeatReusableCompDesktop,
                        TheSeatReusableCompTablet,
                        TheSeatReusableCompMobile
                    ]
                },
                {
                    title: "Keypad",
                    alt: "The Keypad component",
                    backgroundColor: "#FFFFFF",
                    widthSize: "100%",
                    description: ["A key path is used to enter a Guest party size and automatically assign the seats while optimizing seating capacity. This key path can be used in other attractions and rides requiring the seating of more than 4 Guests per cabin or vehicle."],
                    images: [ 
                        KeypadReusableCompDesktop,
                        KeypadReusableCompTablet,
                        KeypadReusableCompMobile 
                    ]
                },
                {
                    title: "The Cabin - Geometry",
                    alt: "The Cabin component",
                    backgroundColor: "#F9F9F9",
                    widthSize: "50%",
                    description: ["Each cabin is represented by a geometry element that contains clickable seats for manual seating assignments.  The geometry is an abstraction component  that can be used in different rides and attractions in the form of cabins, vehicles, and theater seating sections."],
                    images: [
                        GeometryReusableCompDesktop,
                        GeometryReusableCompTablet,
                        GeometryReusableCompMobile
                    ]
                },
                {
                    title: "Configuration Cabin - Geometry",
                    alt: "The Configuration Cabin component",
                    backgroundColor: "#FFFFFF",
                    widthSize: "50%",
                    description: ["Configuration geometry for Cabins. Cabins can be configured independently to mark seats as broken, accessibility seats, infants, etc."],
                    images: [
                        GeometryConfigReusableCompDesktop,
                        GeometryConfigReusableCompTablet,
                        GeometryConfigReusableCompMobile   
                    ]
                }
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
                    disableZoomTools: false,
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
                    disableZoomTools: true,
                    images: [
                        LandingScreenStarToursSpecsDesktop,
                        LandingScreenStarToursSpecsTablet,
                        LandingScreenStarToursSpecsMobile
                    ] 
                },
                {
                    title: 'Grouper View - Interactive Mode',
                    titleFontColor: '#1D2D92',
                    backgroundColor: '#ffffff',
                    disableZoomTools: false,
                    images: [
                        InteractiveModeStarToursDesktop,
                        InteractiveModeStarToursTablet,
                        InteractiveModeStarToursMobile
                    ] 
                },
                {
                    title: 'Grouper View - Interactive Mode Specs',
                    titleFontColor: '#1D2D92',
                    backgroundColor: '#F4F4F4',
                    disableZoomTools: true,
                    images: [
                        InteractiveModeStarToursSpecsDesktop,
                        InteractiveModeStarToursSpecsTablet,
                        InteractiveModeStarToursSpecsMobile
                    ] 
                }
            ]
        },
        testIteration: {
            title: "5. Test, Iterate, Repeat",
            paragraphs: [
                "The primary objective was to gather qualitative data to evaluate Cast Members  interaction with the new design and quantitative data to assess common issues and new feature opportunities that could arise. ",
                "Weekly usability testing sessions during development post launch phase.",
                "Co-design usability testing sessions were conducted during development and post launch phase.",
                "Physical Observations and video surveillance footage was evaluated to analyze new team dynamics and flows in the Guests throughput management ",
                "New features were developed during the iteration and testings phases such as real time asynchronous communication in the app, manual seat assignments and on the fly gate configurations."   
            ] 
        },
        finalResults: {
            title: "Final Results & Key Metrics ",
            bulletPoints: [
                { icon: BulletPoint , text: "Increase in throughout when the  app was used by Cast Members, in some cases upto 10%." },
                { icon: BulletPoint , text: "Reduced training time for new  Cast Members."},
                { icon: BulletPoint , text: "Allowed Cast Members to seat Guests filling all cabins."},
                { icon: BulletPoint , text: "Reduced congestion at merge point of queue, increasing guest flow."},
                { icon: BulletPoint , text: "Ability to simulate different party size  scenarios and measure capacity."}
            ]
        }

    }

    /*
     userResearchMethods: [
            { icon: ResearchMethod , text: "Rapid Ethnography observations at the facility." },
            { icon: ResearchMethod , text: "Contextual Inquiry Interviews with facility managers and Cast Member leads."},
            { icon: ResearchMethod , text: "Development Introspection to understand technical capabilities."},
            { icon: ResearchMethod , text: "Participatory Co-design and ideations with Cast Members working at the facility."}
        ],
    */

    console.log('DATA');
    console.log(starToursData);

    /*** END OF DATA ***/

    return (
        <> 
            <div className='project-container'>
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


                <WireframeIllustration
                    title={starToursData.wireframes.wireframes[0].title}
                    titleFontColor={starToursData.wireframes.wireframes[0].titleFontColor}
                    alt={starToursData.wireframes.wireframes[0].alt}
                    backgroundColor={starToursData.wireframes.wireframes[0].backgroundColor}
                    images={starToursData.wireframes.wireframes[0].images}
                    disableZoomTools={starToursData.wireframes.wireframes[0].disableZoomTools}
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

                <WireframeIllustration
                    title={starToursData.wireframes.wireframes[2].title}
                    titleFontColor={starToursData.wireframes.wireframes[2].titleFontColor}
                    alt={starToursData.wireframes.wireframes[2].alt}
                    backgroundColor={starToursData.wireframes.wireframes[2].backgroundColor}
                    images={starToursData.wireframes.wireframes[2].images}
                    disableZoomTools={starToursData.wireframes.wireframes[2].disableZoomTools}
                    screenDevice={screenDevice}
                />


                <WireframeIllustration
                    title={starToursData.wireframes.wireframes[3].title}
                    titleFontColor={starToursData.wireframes.wireframes[3].titleFontColor}
                    alt={starToursData.wireframes.wireframes[3].alt}
                    backgroundColor={starToursData.wireframes.wireframes[3].backgroundColor}
                    images={starToursData.wireframes.wireframes[3].images}
                    disableZoomTools={starToursData.wireframes.wireframes[3].disableZoomTools}
                    screenDevice={screenDevice}
                />
            
                <ParagraphBlock
                        title={starToursData.reusableComponents.title}
                        paragraphs={starToursData.reusableComponents.paragraphs}
                        screenDevice={screenDevice}
                />

                <ReusableComp 
                    title={starToursData.reusableComponents.components[0].title}
                    backgroundColor={starToursData.reusableComponents.components[0].backgroundColor}
                    widthSize={starToursData.reusableComponents.components[0].widthSize}
                    screenDevice={screenDevice}
                    paragraphs={starToursData.reusableComponents.components[0].description}
                    alt={starToursData.reusableComponents.components[0].title}
                    images={starToursData.reusableComponents.components[0].images}
                />

                <ReusableComp 
                    title={starToursData.reusableComponents.components[1].title}
                    backgroundColor= {starToursData.reusableComponents.components[1].backgroundColor}
                    widthSize={starToursData.reusableComponents.components[1].widthSize}
                    screenDevice={screenDevice}
                    paragraphs={starToursData.reusableComponents.components[1].description}
                    alt={starToursData.reusableComponents.components[1].title}
                    images={starToursData.reusableComponents.components[1].images}
                />


                <ReusableComp 
                    title={starToursData.reusableComponents.components[2].title}
                    backgroundColor= {starToursData.reusableComponents.components[2].backgroundColor}
                    widthSize={starToursData.reusableComponents.components[2].widthSize}
                    screenDevice={screenDevice}
                    paragraphs={starToursData.reusableComponents.components[2].description}
                    alt={starToursData.reusableComponents.components[2].title}
                    images={starToursData.reusableComponents.components[2].images}
                />

                <ReusableComp 
                    title={starToursData.reusableComponents.components[3].title}
                    backgroundColor= {starToursData.reusableComponents.components[3].backgroundColor}
                    widthSize={starToursData.reusableComponents.components[3].widthSize}
                    screenDevice={screenDevice}
                    paragraphs={starToursData.reusableComponents.components[3].description}
                    alt={starToursData.reusableComponents.components[3].title}
                    images={starToursData.reusableComponents.components[3].images}
                />

   
                <ParagraphBlock
                    title={starToursData.testIteration.title}
                    paragraphs={starToursData.testIteration.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={starToursData.finalResults.title}
                    paragraphs={[]}
                    screenDevice={screenDevice}
                />


               <BulletPoints
                    bulletPoints={starToursData.finalResults.bulletPoints}
                    screenDevice={screenDevice}
                />
    
            </div>


            
        
         </>
    )
}

export default AutomaticSeater;

/*

        
             
               

            

              

               
                
             
                
            

             
               
             


            </div>
            */

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