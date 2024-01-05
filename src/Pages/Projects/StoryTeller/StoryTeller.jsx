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
import ParagraphImg from './Components/ParagraphImg';

/* Media Assets */
import CloudsLayer1 from './Images/clouds-layer-1.png';
import CloudsLayer2 from './Images/clouds-layer-2.png';
import CloudsLayer3 from './Images/clouds-layer-3.png';
import CloudsLayer4 from './Images/clouds-layer-4.png';
import BulletPoint from './Images/BulletPoint.svg'
import BulletPoints from './Components/BulletPoints';
import ResearchMethod from './Images/researchMethod.svg';
import PersonasMotives from './Images/PersonasMotives.png';
import TrainingImages from './Images/TrainingImages.png';
import GenericTaskFlow from './Images/GenericTaskFlow.png';
import TowerOfTerrorBannerDesktop from './Images/TowerOfTerrorBanner-Desktop.png';

import GazeCommitIllustrationDesktop from './Images/GazeCommitIllustration-Desktop.png';



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
        },
        designSystem : {
            title: "Design System",
            paragraphs: [
                "The Story Teller A.R. project was embraced using a creative design approach for story telling where aspects of Design Thinking were employed along with design fiction.",
                "Designing for an AR user experience has more tangible and realistic constraints and limitations. The Story Teller was designed  following these concepts:"
            ],
            bulletpoints : [
                { icon: BulletPoint , text: "Environment – Unlike the dedicated space needed for a VR experience, AR experiences can happen almost anywhere. Consider the contexts where your user might be and design for those specifically, whether that’s indoors, outdoors, sitting in one place, or on the move." },
                { icon: BulletPoint , text: "Safety – Likewise, keep your users’ safety in mind. Be helpful without being distracting, as your user might be walking down a crowded street or in a busy airport." },
                { icon: BulletPoint , text: "Simplicity – Just because you can design additional elements in a particular scenario doesn’t mean you should. Keep the digital objects to a minimum while still helping the user progress toward their goal." },
                { icon: BulletPoint , text: "Comfort – Because AR experiences involve the world around your user, design in a way that takes advantage of those limitations. Don’t design in a way that creates either a physical or mental strain for your user." }
            ]
        },
        interactionDesignPrinciples : {
            subTitle: "Interaction Design Principles",
            paragraphs: [""],
            bulletpoints : [
                { icon: BulletPoint , text: "Interactions should be short-lived, less than 15 seconds while waiting in line to do a ride." },
                { icon: BulletPoint , text: "After object detection is done in A.R., content can remain anchored to the physical space as A.R overlays for users to continue exploring during 15 seconds. After that, the A.R. overlays are lock into the smart phone screen for guests to explore them and use them to take selfies." },
                { icon: BulletPoint , text: "All interactions at the park should be non-blocking using translucent backgrounds on screen to avoid slowing down the flow of people walking throughout the attraction." },
                { icon: BulletPoint , text: "Content visualization should be short-lived when involving object detection of dynamic elements locked in space for real time A.R. visualizations." }
            ]
        },
        userInterModSpecs : {
            subTitle: "User Interaction  Mode Specifications",
            paragraphs: [""],
            bulletpoints : [
                { icon: BulletPoint , text: "Grounded interaction with a blended environment: When a guest is standing still or in a set in place position, they can use the camera of their mobile AR device (phone or tablet) to point & click on the Tower of Terror attraction and get overlaid visual blended with the environment to explore and learn about the attraction in a non-linear and explorative way. The field of view ranges between 25 to 50 degrees." },
                { icon: BulletPoint , text: "Gaze and Commit input model to click-through overlaid visuals and AR controls is employed." }
            ]
        },
        GazeCommitIllustration : {
            title: "Gaze and Commit Input Model",
            illustrationImages: [ 
                GazeCommitIllustrationDesktop, GazeCommitIllustrationDesktop, GazeCommitIllustrationDesktop
            ]
        },
        scalablePlatform: {
            subTitle: "Making a scalable and extendable platform ",
            paragraphs: [
                "The grounded interaction with a blended environment is stablished as an interaction pattern that can be used across different attractions and rides in the park.  Machine learning models are published and downloaded on demand with trained data specific to the attraction with enhanced A.R. content for guests to access.",
                "The underlying Machine Learning model for this the Story Teller app is a convolutional neural network (CNN) called MobileNetV2. CNN is a deep-learning algorithm which can take an image input, break it down into different layers, assign weights and biases to different segments in the image and differentiate from one another. MobileNetV2 was chosen as it is optimized for mobile devices. The process of training the model is repeating this step with hundreds of images until we have high precision and recall. The final model output is formatted for each platform - Core ML for Apple and Onnx for Unity. ",
                "Apple’s iOS  and ARKit platform was employed as a front end mobile interface for Guests to access augmented reality content embedded in an attraction. Core ML models were employed for the ARKit component."
            ],
            trainingDataimages: [
                TrainingImages,
                TrainingImages,
                TrainingImages
            ]
        },
        genericTaskFlow : {
            title: "Generic Task Flow",
            images: [GenericTaskFlow, GenericTaskFlow, GenericTaskFlow ],
            description: "SOme description"

        },
        towerOfTerrorPilot : {
            title: "The Hollywood Tower of Terror Story Teller Pilot ",
            images: [TowerOfTerrorBannerDesktop,TowerOfTerrorBannerDesktop, TowerOfTerrorBannerDesktop],
            alt: " The Twilight Zone, Tower of Terror"
        }

    }

    if ( xs || sm) {
        return (
            <div className='project-container'>
                <h1> SCREENS : XS/SM </h1>
                <OverviewParagraphBlock
                    title1={storyTellerData.designChallenge.title}
                    paragraph1={storyTellerData.designChallenge.paragraphs}
                    title2={storyTellerData.theProblem.title}
                    paragraph2={storyTellerData.theProblem.paragraphs}
                    title3={storyTellerData.solution.title}
                    paragraph3={storyTellerData.solution.paragraphs}
                    screenDevice={screenDevice}
                
                />
            </div> )
    } else if ( md || lg) {
        return (
            <div className='project-container'>
                <h1> SCREEN : MD </h1>
                <OverviewParagraphBlock
                    title1={storyTellerData.designChallenge.title}
                    paragraph1={storyTellerData.designChallenge.paragraphs}
                    title2={storyTellerData.theProblem.title}
                    paragraph2={storyTellerData.theProblem.paragraphs}
                    title3={storyTellerData.solution.title}
                    paragraph3={storyTellerData.solution.paragraphs}
                    screenDevice={screenDevice}
                
                />
            </div> )
    } else if (  laptop ) {
        return (
            <div className='project-container'>
                <h1> SCREEN : LG/LAPTOP </h1>
                <OverviewParagraphBlock
                    title1={storyTellerData.designChallenge.title}
                    paragraph1={storyTellerData.designChallenge.paragraphs}
                    title2={storyTellerData.theProblem.title}
                    paragraph2={storyTellerData.theProblem.paragraphs}
                    title3={storyTellerData.solution.title}
                    paragraph3={storyTellerData.solution.paragraphs}
                    screenDevice={screenDevice}
                
                />
            </div> )
    }

               
                {/*
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
                    alt=""
                />

                <ParagraphBlock
                    title={storyTellerData.designSystem.title}
                    paragraphs={storyTellerData.designSystem.paragraphs}
                    screenDevice={screenDevice}
                />
            
                <BulletPoints
                    bulletPoints={storyTellerData.designSystem.bulletpoints}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle={storyTellerData.interactionDesignPrinciples.subTitle}
                    paragraphs={storyTellerData.interactionDesignPrinciples.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                    bulletPoints={storyTellerData.interactionDesignPrinciples.bulletpoints}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle={storyTellerData.userInterModSpecs.subTitle}
                    paragraphs={storyTellerData.userInterModSpecs.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                    bulletPoints={storyTellerData.userInterModSpecs.bulletpoints}
                    screenDevice={screenDevice}
                />

                <IllustrationDiagram
                    title={storyTellerData.GazeCommitIllustration.title}
                    description=""
                    screenDevice={screenDevice}
                    images={storyTellerData.GazeCommitIllustration.illustrationImages}
                    alt=""
                />

                <ParagraphBlock
                    subTitle={storyTellerData.scalablePlatform.subTitle}
                    paragraphs={storyTellerData.scalablePlatform.paragraphs.slice(0,2)}
                    screenDevice={screenDevice}
                />

                <IllustrationDiagram
                    title=""
                    description=""
                    screenDevice={screenDevice}
                    images={storyTellerData.scalablePlatform.trainingDataimages}
                    alt=""
                />

                <ParagraphBlock
                    subTitle=""
                    paragraphs={storyTellerData.scalablePlatform.paragraphs.slice(2,3)}
                    screenDevice={screenDevice}
                />


                <IllustrationDiagram
                    title={storyTellerData.genericTaskFlow.title}
                    description={storyTellerData.genericTaskFlow.description}
                    screenDevice={screenDevice}
                    images={storyTellerData.genericTaskFlow.images}
                    alt=""
                />

                <ParagraphImg
                     screenDevice={screenDevice}
                     images={storyTellerData.towerOfTerrorPilot.images}
                />

            </div>
             */}
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