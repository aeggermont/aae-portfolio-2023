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


/* Media Assets */
import CloudsLayer1 from './Images/clouds-layer-1.png';
import CloudsLayer2 from './Images/clouds-layer-2.png';
import CloudsLayer3 from './Images/clouds-layer-3.png';
import CloudsLayer4 from './Images/clouds-layer-4.png';


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