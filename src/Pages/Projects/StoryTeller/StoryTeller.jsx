import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './StoryTeller.scss';

import { useParallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

import ProjectBanner from './Components/ProjectBanner';
import AnimationCrowds from './Components/AnimationCrowds';
import OverviewParagraphBlock from './Components/OverviewParagraphBlock';
import SolutionDemo from './Components/SolutionDemo';
import ProjectOverview from './Components/ProjectOverview';
import Team from './Components/Team';
import ParagraphBlock from './Components/ParagraphBlock';
import IllustrationDiagram from './Components/IllustrationDiagram';

/* Media Assets */
import CloudsLayer1 from './Images/clouds-layer-1.png';
import CloudsLayer2 from './Images/clouds-layer-2.png';
import CloudsLayer3 from './Images/clouds-layer-3.png';
import CloudsLayer4 from './Images/clouds-layer-4.png';
import BulletPoint from './Images/BulletPoint.svg'
import BulletPoints from './Components/BulletPoints';
import ResearchMethod from './Images/researchMethod.svg';
import PersonasMotives from './Images/PersonasMotives.png';

function StoryTeller() {

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

    const storyTellerData = {
        designChallenge : {
            title : "Design Challenge",
            paragraphs: [
             "How might we provide an independent tour guide for guests visiting Disney theme parks by making the environment become an attraction itself creating memorable events while waiting in line for attractions and rides?"   
            ]
        },
        theProblem : {
            title : "The inconvenience of waiting ",
            paragraphs: [
                "When visiting  Disney theme Parks worldwide, there’s one thing you can count on doing, which is waiting in line for long times. Because of the popularity of the Disney theme Parks, millions of Guests visit them each year, meaning you’ll more than likely have to wait in lines to ride and experience  attractions."
            ]
        },
        solution: {
            title : "Solution",
            description : "Sample Mobile View of an Augmented View of the Tower of Terror Building",
            paragraphs: [
                "An A.R. platform to make the physical environment of an attraction itself for guests while they wait in long lines. The experience can be used to create memories and learn more about the attractions and the craft and art Disney Imaginers used."
            ]
        },
        team: {
            title: "The Team",
            members: [
                { name: 'Antonio Aranda Eggermont', role: 'Lead Designer & UX Engineer' },
                { name: 'Erik Thornquist' , role: 'Sr. Software Engineer'},
                { name: 'Sergio Torres' , role: 'Sr. Software Engineer'},
                { name: 'Christina Vickers' , role: 'Software Engineer'},
                { name: 'Jeffrey Li' , role: 'Sr. Software Engineer'},
                { name: 'Nathan Bruno' , role: 'Sr. Software Engineer'}
            ]
        },
        contributions : {
            title: "My Contributions",
            paragraphs: [
                "I was the only designer on the project so everything you see was created by myself. I was involved since the very beginning of the project in everything from defining the brand and personas, user research, creating flows and wireframes, backend integrations all the way to creating final UI designs as well as designing different logos and icons."
            ]
        },
        valueDrivenDesign : {
            title: "Value Driven Design",
            paragraphs: [
                "Effective XR designers not only focus on obtaining the technical requirements of the system for system functionality and efficiency, but are also mindful of user values and needs. They care about the user experience and adopt various methods to extract user values and needs in order to drive the XR design and development processes."
            ],
            bulletpoints : [
                { icon: ResearchMethod , text: "Developer introspection: A useful approach for brainstorming but does not give the user´s perspective." },
                { icon: ResearchMethod , text: "Open-ended interviews allow to improvise questions and allow the interviewee to respond in any way."},
                { icon: ResearchMethod , text: "Rapid Ethnography as a method of watching users in a setting where they behave naturally as they use the system."},
                { icon: ResearchMethod , text: "Code Design workshops"}
            ]
        },
        userResearchInsights : {
            title: "Key Insights from Park Guests and Cast Members",
            paragraphs: [
                "The following are insights collected from user research."
              
            ],
            bulletpoints: [
                { icon: BulletPoint , text: "Guests usually think “I know nothings about the rides" },
                { icon: BulletPoint , text: "Ride experiences use paper handouts or blogs, I wish there was a digital version"},
                { icon: BulletPoint , text: "I am waiting for my next ride and am unsure of what to do while I wait..."},
                { icon: BulletPoint , text: "Sometimes I don´t  understand what the the ride experiences are really about"},
                { icon: BulletPoint , text:"I wish I could take better memories home to share"}
            ]
        },
        personasMotives : {
            title: "Personas & Motives",
            illustrationImage: [PersonasMotives, PersonasMotives, PersonasMotives],
            illustrationDescription: "Some explanation",
            paragraphs: [
                "Values can be used throughout the process of design and development to drive that process",
                "Ethics: Refers to a system of conduct based on values that are generally proclaimed and promoted within a particular society"
            ]
        }

    }

    return (
        <>  
            <div className='project-container'>
               
                <ProjectBanner/>

                <AnimationCrowds />

                <OverviewParagraphBlock
                    title1={storyTellerData.designChallenge.title}
                    paragraph1={storyTellerData.designChallenge.paragraphs}
                    title2={storyTellerData.theProblem.title}
                    paragraph2={storyTellerData.theProblem.paragraphs}
                    screenDevice={screenDevice}
                
                />

                <SolutionDemo
                    title={storyTellerData.solution.title}
                    paragraphs={storyTellerData.solution.paragraphs}
                    description={storyTellerData.solution.description}
                    screenDevice={screenDevice}
                />

                <ProjectOverview 
                     screenDevice={screenDevice}
                />

                <Team
                    title={storyTellerData.team.title}
                    members={storyTellerData.team.members}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.contributions.title}
                    paragraphs={storyTellerData.contributions.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.valueDrivenDesign.title}
                    paragraphs={storyTellerData.valueDrivenDesign.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                    bulletPoints={storyTellerData.valueDrivenDesign.bulletpoints}
                    screenDevice={screenDevice}
                />
            
                <ParagraphBlock
                    title={storyTellerData.userResearchInsights.title}
                    paragraphs={storyTellerData.userResearchInsights.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                    bulletPoints={storyTellerData.userResearchInsights.bulletpoints}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.personasMotives.title}
                    paragraphs={storyTellerData.personasMotives.paragraphs}
                    screenDevice={screenDevice}
                />

                <IllustrationDiagram
                    title=""
                    description={storyTellerData.personasMotives.illustrationDescription}
                    screenDevice={screenDevice}
                    images={storyTellerData.personasMotives.illustrationImage}
                    alt="Star Tours Interactive View"
                />
            
            </div>
            
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
          
        </>
    )
}

export default StoryTeller;