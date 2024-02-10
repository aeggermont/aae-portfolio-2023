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
import SectionImg from './Components/SectionImg';
import ParagraphBlock from './Components/ParagraphBlock';
import BulletPoints from './Components/BulletPoints.jsx';

import IllustrationDiagram from './Components/IllustrationDiagram';
import ParagraphImg from './Components/ParagraphImg';
import IlllustrationGallery from './Components/IlllustrationGallery';

/* Media Assets */
import CloudsLayer1 from './Images/clouds-layer-1.png';
import CloudsLayer2 from './Images/clouds-layer-2.png';
import CloudsLayer3 from './Images/clouds-layer-3.png';
import CloudsLayer4 from './Images/clouds-layer-4.png';


import ARTowerofTerrorDemo from './Images/ARTowerofTerrorDemo.gif';

import BulletPoint from './Images/BulletPoint.svg';

import ResearchMethod from './Images/researchMethod.svg';
import PersonasMotives from './Images/PersonasMotives.png';
import TrainingImages from './Images/TrainingImages.png';


import TowerOfTerrorBannerDesktop from './Images/TowerOfTerrorBanner-Desktop.png';
import GazeCommitIllustrationDesktop from './Images/GazeCommitIllustration-Desktop.png';
import SectionImgTowerOfTerrorDesktop from './Images/SectionImgTowerOfTerror-Desktop.png';
import SectionImgTowerOfTerrorLgMd from './Images/SectionImgTowerOfTerror-LgMd.png';
import SectionImgTowerOfTerrorSmSx from './Images/SectionImgTowerOfTerror-SmSx.png';
import HollywoodTowerofTerrorARImgDesktop from './Images/HollywoodTowerofTerrorARImg-Desktop.png';
import HollywoodTowerofTerrorARImgLgMd from './Images/HollywoodTowerofTerrorARImg-LgMd.png';
import HollywoodTowerofTerrorARImgSmSx from './Images/HollywoodTowerofTerrorARImg-SmSx.png';
import NotificationsMapDesktop from  './Images/NotificationsMap-Desktop.png';
import NotificationsMapMdLg from './Images/NotificationsMap-MdLg.png';

import NotificationsIllustration1SmSx from './Images/NotificationsIllustration1-SmSx.png';
import NotificationsIllustration2SmSx from './Images/NotificationsIllustration2-SmSx.png';
import NotificationsIllustration3SmSx from './Images/NotificationsIllustration3-SmSx.png';

import SampleNotificationsIllustrationMdLg from './Images/SampleNotificationsIllustration-MdLg.svg';
import SampleNotificationsIllustrationDesktop from './Images/SampleNotificationsIllustrationDesktop.svg';

import LearningAbouttheAttractionDesktop from './Images/LearningAbouttheAttraction-Desktop.png';
import LearningAbouttheAttractionMdLg from './Images/LearningAbouttheAttraction-MdLg.png';
import LearningAbouttheAttractionSmSx from './Images/LearningAbouttheAttraction-SmSx.png';

import TakingSelfieDesktop from './Images/TakingSelfie-Desktop.png';
import TakingSelfieMdLg from './Images/TakingSelfie-MdLg.png';
import TakingSelfieSmSx from './Images/TakingSelfie-MdLg.png';

import CollectingArtifactsDesktop from './Images/CollectingArtifacts-Desktop.png';
import CollectingArtifactsMdLg from './Images/CollectingArtifacts-MdLg.png';
import CollectingArtifactsSmSx from './Images/CollectingArtifacts-Desktop.png';

import LayoutStatesDesktop  from './Images/LayoutStates-Desktop.png';
import LayoutStatesMdLg from './Images/LayoutStates-MdLg.png';
import LayoutStatesSmSx from './Images/LayoutStates-SmSx.png';

import DesignThinkingDesktop from './Images/DesignThinking-Desktop.png';
import DesignThinkingMdLg from './Images/DesignThinking-MdLg.png';
import DesignThinkingSmSx from './Images/DesignThinking-SmSx.png';

import UserInteractionModeSpecsDesktop from './Images/UserInteractionModeSpecs-Desktop.png';
import UserInteractionModeSpecsMdLg from './Images/UserInteractionModeSpecs-MdLg.png';
import UserInteractionModeSpecsSmSx from './Images/UserInteractionModeSpecs-SmSx.png';

import MockupsAndSpecsDesktop from './Images/MockupsAndSpecs-Desktop.png';

import MockupsAndSpecsMdLg from './Images/MockupsAndSpecs-MdLg.png';
import MockupsAndSpecs1MdLg from './Images/MockupsAndSpecs1-MdLg.png';
import MockupsAndSpecs2MdLg from './Images/MockupsAndSpecs2-MdLg.png';

import MockupsAndSpecs1SmSx from './Images/MockupsAndSpecs1-SmSx.png';
import MockupsAndSpecs2SmSx from './Images/MockupsAndSpecs2-SmSx.png';

import PanoramaGridViewMockupSpecsDesktop from './Images/PanoramaGridViewMockupSpecs-Desktop.png';
import PanoramaGridViewMockupSpecsMdLg from './Images/PanoramaGridViewMockupSpecs-MdLg.png';
import PanoramaGridViewMockupSpecsSmSx from './Images/PanoramaGridViewMockupSpecs-SmSx.png';

import StoryTellerWireFlowDesktop from './Images/StoryTellerWireFlow-Desktop.png';
import StoryTellerWireFlowMdLg from './Images/StoryTellerWireFlow-MdLg.png';
import StoryTellerWireFlowSmSx from './Images/StoryTellerWireFlow-Desktop.png';

import GenericUserFlow from './Images/StoryTeller-GenericUser-Desktop.svg';

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
            alt: "Sample Mobile View",
            images: [
                ARTowerofTerrorDemo,
                ARTowerofTerrorDemo,
                ARTowerofTerrorDemo
            ],
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
        caseStudy : {
            caseStudySectionImages : [
                SectionImgTowerOfTerrorDesktop,
                SectionImgTowerOfTerrorLgMd,
                SectionImgTowerOfTerrorSmSx ],
            overview: {
                title: 'The Hollywood Tower of Terror Case Study',
                paragraphs: [
                    'The tower of terror is an attraction based on the Twilight Zone television series aired from 1959 to 1964. It is a major attraction at most Disney theme parks and due to its popularity waiting lines could last for up to 130 minutes.  Due to long waiting times, this attraction was chosen as a case study to develop the augmented reality Magic Tours prototype.  ',
                    'The A.R. Magic Tour can be used by guests waiting inline to get more specifics about story of Tower of Terror. Augmented Reality can be used to embody in the environment elements from the ride and the story behind the attraction for guests to interact with and take selfies.'
                ]
            },
            overviewImages: [
                HollywoodTowerofTerrorARImgDesktop,
                HollywoodTowerofTerrorARImgLgMd,
                HollywoodTowerofTerrorARImgSmSx
            ],
            overviewImagesAlt: 'Guest viewing Tower of Terror Overview while walking by.',
         
            overviewImagesDesc: {
                paragraphs: [
                    'The primary focus of the A.R. experience is a narrative first approach, where guests learn about the attraction as they approach Tower of Terror and wait in line. While they wait inline, guests can get more facts about the attraction and learn some of the history and behind the scenes design concepts.'
                ]
            },
            learningAboutAttrac: {
                title: 'Learning about the attraction while waiting in line ',
                paragraphs:
                [ 'The theme of Tower of Terror is escalating horror. The whole thing should start lightly, and then draw the guest into the tension and fear that pervade the attraction. They should feel that mounting fear throughout the entire experience. Notifications are randomly sent to enhance the fear experience and also to educate guests about the attraction.']
            },
            notificationsAttrac: {
                title: 'Sample Notifications',
                images: [
                    NotificationsMapDesktop,
                    NotificationsMapMdLg,
                    NotificationsMapMdLg
                ],
                description: 'Beacon sensors are positioned along the waiting queue area to send notifications for A.R. content to near by guests waiting in line.',
                paragraphs: [
                    'The following are sample notifications that are sent once the guest has entered the waiting queue area.'
                ],
                sampleNotifications1SmSX : {
                    images: [
                        NotificationsIllustration1SmSx
                    ],
                    alt: 'Sample Notification'
                },

                sampleNotifications2SmSX : {
                    images: [
                        NotificationsIllustration2SmSx
                    ],
                    alt: 'Sample Notification'
                },

                sampleNotifications3SmSX : {
                    images: [
                        NotificationsIllustration3SmSx
                    ],
                    alt: 'Sample Notification'
                },

                sampleNotificationsMdLg : {
                    images: [
                        SampleNotificationsIllustrationMdLg      
                    ],
                    alt: 'Sample Notification'
                },
                sampleNotificationsDesktop : {
                    images: [
                        SampleNotificationsIllustrationDesktop
                    ],
                    alt: 'Sample Notification'
                },
            },
            magicExperiences : {
                title: "A.R. Magic Experiences",
                paragraphs: [ 'The A.R. experience is enhanced with features such as discovering facts about the attraction Guests are visiting. Guests can learn more about storyline behind the ride and art and craft Disney Imaginers used during the design and building of the facility.  Other features include taking selfies with augmented A.R. content in the background, and collecting artifacts found while viewing A.R. content. '],
                experiences :  [
                    {  
                        title: 'Discovering Facts about the Attraction',
                        alt: 'Discovering Facts about the Attraction',
                        description: 'Guests can use their phone’s camera to scan the attraction facility’s environment to discover  facts about the story. A notification can trigger tje guest to open the app to scan the environment.',
                        images : [
                            LearningAbouttheAttractionDesktop,
                            LearningAbouttheAttractionMdLg,
                            LearningAbouttheAttractionSmSx
                        ]
                    },
                    {
                        title: 'Taking a Selfie',
                        alt: 'Taking a Selfie',
                        description: 'Once A.R. content is discovered, selfies can be taken and shared as memories in social networks.',
                        images : [ 
                            TakingSelfieDesktop,
                            TakingSelfieMdLg,
                            TakingSelfieSmSx
                        ]
                    },
                    {
                        title: 'Collecting Artifacts',
                        alt: 'Collecting Artifacts',
                        description: 'Discovered artifacts about the attraction’s story can be collected. These artifacts can be retrieved and shared with other guests, or viewed as memories after visiting the park. ',
                        images : [
                            CollectingArtifactsDesktop,
                            CollectingArtifactsMdLg,
                            CollectingArtifactsSmSx
                        ]   
                    }
                

                ]
            },
            learningAboutAttrc : {
                title: 'Learning About the Attraction',
                alt: 'Learning About the Attraction',
                paragraphs : [
                    "Guests can learn about the attraction's storyline, and the craft and art Disney imagineers employed when designing and building the facility while they wait or before and after they visit the attraction. ",
                    "The app provides with a section using parallax layout static media combinations to visualize the storyline and more information about the attraction."
                ],
                images : [
                    LayoutStatesDesktop,
                    LayoutStatesMdLg,
                    LayoutStatesSmSx
                ]
            },
            designSystem : {
                title: "Design System",
                paragraphs: [
                    "Since the inception of the project, the engineering team had defined to use augmented reality for story telling.  However, the  A.R. project was embraced using a creative design approach  where aspects of Design Thinking were employed along with Value Driven Design.",
                    "Because designing for A.R. has more tangible and realistic constraints and limitations, the app was designed following these concepts:"
                ],
                bulletpoints : [
                    { icon: BulletPoint , text: "Environment – Unlike the dedicated space needed for a VR experience, AR experiences can happen almost anywhere. Consider the contexts where your user might be and design for those specifically, whether that’s indoors, outdoors, sitting in one place, or on the move." },
                    { icon: BulletPoint , text: "Safety – Likewise, keep your users’ safety in mind. Be helpful without being distracting, as your user might be walking down a crowded street or in a busy airport." },
                    { icon: BulletPoint , text: "Simplicity – Just because you can design additional elements in a particular scenario doesn’t mean you should. Keep the digital objects to a minimum while still helping the user progress toward their goal." },
                    { icon: BulletPoint , text: "Comfort – Because AR experiences involve the world around your user, design in a way that takes advantage of those limitations. Don’t design in a way that creates either a physical or mental strain for your user." }
                ]
            },
            designThinking : {
                title: "Design Thinking ",
                paragraphs: [ 
                    "One of the key goals of the project was to create a digital  experience involving people with different backgrounds and expertise inside Disney, and getting feedback from Guests during the design and development phases.",
                    "The project was developed with non linear iterations in a open collaborative environment. User research, testing, prototyping and development were continuously overlapping efforts during the project."
                ],
                alt: 'Design Thinking',
                images: [
                    DesignThinkingDesktop,
                    DesignThinkingMdLg,
                    DesignThinkingSmSx
                ]
            },
            valueDrivenDesign : {
                title: "Value Driven Design",
                paragraphs: [
                    "The focus of the project was not only to focus on obtaining the technical requirements for system functionality and efficiency, but are also the team was mindful of user values and needs. The following methods were employed to define user values and needs in order to drive the A.R.  design and development processes:"
                ],
                bulletpoints : [
                    { icon: ResearchMethod , text: "Developer introspection:  The development team brainstormed different technologies and platforms to produce the A.R. experience.  Short POCs were done in parallel with the design and user research processes." },
                    { icon: ResearchMethod , text: "Context inquiries in the form of open-ended interviews were conducted with Cast Members working at the facility."},
                    { icon: ResearchMethod , text: "Rapid Ethnography studies were conducted by the development team by observing the dynamics of Guests visiting the Hollywood Tower of Terror attraction."},
                    { icon: ResearchMethod , text: "Code Design workshops were conducted with fans who visit the parks and Cast Members working at the Hollywood Tower of Terror attraction."}
                ]
            },
            userResearchInsights : {
                title: "Key Insights from Park Guests and Cast Members",
                paragraphs: [
                    "The following are insights collected from user research."
                  
                ],
                bulletpoints: [
                    { icon: BulletPoint , text: "Guests usually think “I know nothings about the rides.” Usually after the rides, they usually don’t have a clear idea of the story behind it." },
                    { icon: BulletPoint , text: "Guests would prefer a digital version for the attractions overview: “The ride experiences use paper handouts or blogs to learn about it, I wish there was a digital version.”"},
                    { icon: BulletPoint , text: "So much time is spent waiting in line: “I am waiting for my next ride and am unsure of what to do while I wait.”"},
                    { icon: BulletPoint , text: "“I don't  understand what the the ride experiences are really about sometimes while in the ride. “"},
                ]
            },
            personasMotives : {
                title: "Personas & Motives",
                alt: "Personas & Motives",
                images: [PersonasMotives, PersonasMotives, PersonasMotives],
                illustrationDescription: "Some explanation",
                paragraphs: [
                    "Based on user research key insights from user research and development introspections, the following Personas and Motives relation was defined:"
                ]
            },
            interactionDesignPrinciples : {
                title: "Interaction Design Principles",
                paragraphs: [""],
                bulletpoints : [
                    { icon: BulletPoint , text: "Interactions should be short-lived, less than 15 seconds while waiting in line to do a ride." },
                    { icon: BulletPoint , text: "After object detection is done in A.R., content can remain anchored to the physical space as A.R overlays for users to continue exploring during 15 seconds. After that, the A.R. overlays are lock into the smart phone screen for guests to explore them and use them to take selfies." },
                    { icon: BulletPoint , text: "All interactions at the park should be non-blocking using translucent backgrounds on screen to avoid slowing down the flow of people walking throughout the attraction." },
                    { icon: BulletPoint , text: "Content visualization should be short-lived when involving object detection of dynamic elements locked in space for real time A.R. visualizations." }
                ]
            },
            userInterModSpecs : {
                title: "User Interaction  Mode Specifications",
                alt: "User Interaction  Mode Specifications",
                paragraphs: [""],
                bulletpoints : [
                    { icon: BulletPoint , text: "Grounded interaction with a blended environment: When a guest is standing still or in a set in place position, they can use the camera of their mobile AR device (phone or tablet) to point & click on the Tower of Terror attraction and get overlaid visual blended with the environment to explore and learn about the attraction in a non-linear and explorative way. The field of view ranges between 25 to 50 degrees." },
                    { icon: BulletPoint , text: "Gaze and Commit input model to click-through overlaid visuals and AR controls is employed." }
                ],
                images: [
                    UserInteractionModeSpecsDesktop,
                    UserInteractionModeSpecsMdLg,
                    UserInteractionModeSpecsSmSx
                ]
            },
            storyboardingARExp : {
                title: "Story boarding the A.R. Experience",
                paragraphs : [
                    "Storyboards were used as graphical representations of how the different task activities would unfold in the A.R. Magic Tours.  The experiences were designed using an ambiguous organization scheme. ",
                    "The story line of the attraction is broken down in small pieces with supported A.R: content; by approximating, guests can draw connections between these pieces of the story and make it memorable.  The content is grouped based on a geographical place which is the attraction’s location. "
                ]
            },
            mockupsAndSpecs : {
                title: "Mockups and Specs",
                alt: "Mockups and Specs",
                paragraphs: ["Wireframes were developed using Figma and were extensibly used at multiple iterations and sessions with Cast Members and Guests participating in co-design and usability sessions."],
                images: [
                    MockupsAndSpecsDesktop,
                    MockupsAndSpecsMdLg,
                    MockupsAndSpecs1SmSx,
                    MockupsAndSpecs2SmSx
                ]
            },
            panoramaViewSpecs: {
                title: "Panorama Grid with Maximum Field of View",
                alt: "Panorama Grid with Maximum Field of View",
                images: [
                    PanoramaGridViewMockupSpecsDesktop,
                    PanoramaGridViewMockupSpecsMdLg,
                    PanoramaGridViewMockupSpecsSmSx
                ]
            },
            wireflow : {
                title: "Wire Flow",
                alt: "Wire Flow",
                images: [
                    StoryTellerWireFlowDesktop,
                    StoryTellerWireFlowMdLg,
                    StoryTellerWireFlowSmSx
                ],
                paragraphs: [
                    "Sample wireframe that describes the different interactions involved in the A.R. story teller experience. The wire flow journey exemplifies asynchronous notifications sent to Guests while waiting in line for an attraction’s ride to find A.R. content,  captured content arrangement for photo selfies, and visuals and story of the attraction for the Guests to learn more about the story line."
                ]
                
            }
        },
        scalablePlatform: {
            title: "Making a scalable and extendable platform ",
            imageDesc: "Trainig the A.R. Model",
            paragraphs: [
                "The grounded interaction with a blended environment is stablished as an interaction pattern that can be used across different attractions and rides in the park.  Machine learning models are published and downloaded on demand with trained data specific to the attraction with enhanced A.R. content for guests to access.",
                "The underlying Machine Learning model for this the Story Teller app is a convolutional neural network (CNN) called MobileNetV2. CNN is a deep-learning algorithm which can take an image input, break it down into different layers, assign weights and biases to different segments in the image and differentiate from one another. MobileNetV2 was chosen as it is optimized for mobile devices. The process of training the model is repeating this step with hundreds of images until we have high precision and recall. The final model output is formatted for each platform - Core ML for Apple and Onnx for Unity. ",
                "Apple’s iOS  and ARKit platform was employed as a front end mobile interface for Guests to access augmented reality content embedded in an attraction. Core ML models were employed for the ARKit component."
            ],
            images: [
                TrainingImages,
                TrainingImages,
                TrainingImages
            ]
        },
        genericTaskFlow : {
            title: "Generic User Flow for Different Attractions",
            alt: "Generic User Flow for Different Attractions",
            paragraphs: [],
            images: [GenericUserFlow, GenericUserFlow, GenericUserFlow ],
            description: "Generic user flow that can be adopted in different attractions.  The goal is to enhance the experience while waiting in line with the use of A.R. content, notifications, and static content about the story behind the ride."

        },
        contributions : {
            title: "My Contributions",
            paragraphs: [
                "I was the only designer on the project so everything you see was created by myself. I was involved since the very beginning of the project in everything from defining the brand and personas, user research, creating flows and wireframes, backend integrations all the way to creating final UI designs as well as designing different logos and icons."
            ]
        },
        GazeCommitIllustration : {
            title: "Gaze and Commit Input Model",
            illustrationImages: [ 
                GazeCommitIllustrationDesktop, GazeCommitIllustrationDesktop, GazeCommitIllustrationDesktop
            ]
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

                <SolutionDemo
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
                <SectionImg 
                    imagesSrc={storyTellerData.caseStudy.caseStudySectionImages}
                    screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.caseStudy.overview.title}
                    paragraphs={storyTellerData.caseStudy.overview.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={storyTellerData.caseStudy.overviewImages}
                    alt={storyTellerData.caseStudy.overviewImagesAlt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title=''       
                    paragraphs={storyTellerData.caseStudy.overviewImagesDesc.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.learningAboutAttrac.title}
                    paragraphs={storyTellerData.caseStudy.learningAboutAttrac.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={storyTellerData.caseStudy.notificationsAttrac.images}
                    alt={storyTellerData.caseStudy.notificationsAttrac.description}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.notificationsAttrac.title}
                    paragraphs={storyTellerData.caseStudy.notificationsAttrac.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.notificationsAttrac.sampleNotifications1SmSX.images}
                    alt={ storyTellerData.caseStudy.notificationsAttrac.sampleNotifications1SmSX.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.notificationsAttrac.sampleNotifications2SmSX.images}
                    alt={ storyTellerData.caseStudy.notificationsAttrac.sampleNotifications2SmSX.alt}
                    screenDevice={screenDevice}
                />
    
                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.notificationsAttrac.sampleNotifications3SmSX.images}
                    alt={ storyTellerData.caseStudy.notificationsAttrac.sampleNotifications3SmSX.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.magicExperiences.title}
                    paragraphs={storyTellerData.caseStudy.magicExperiences.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[0].alt}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[0].images}
                    width= "40%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[0].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[0].description }
                    screenDevice={screenDevice}
                />


                <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[1].alt}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[1].images}
                    width= "40%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[1].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[1].description }
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[2].alt}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[2].images}
                    width= "40%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[2].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[2].description }
                    screenDevice={screenDevice}
                />


                <ParagraphBlock
                    title={storyTellerData.caseStudy.learningAboutAttrc.title}
                    paragraphs={storyTellerData.caseStudy.learningAboutAttrc.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.learningAboutAttrc.images}
                    alt={ storyTellerData.caseStudy.learningAboutAttrc.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.designSystem.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.designSystem.bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.designThinking.title}
                    paragraphs={storyTellerData.caseStudy.designThinking.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.designThinking.images}
                    alt={storyTellerData.caseStudy.designThinking.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.valueDrivenDesign.title}
                    paragraphs={storyTellerData.caseStudy.valueDrivenDesign.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.valueDrivenDesign.bulletpoints}
                     screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.caseStudy.userResearchInsights.title}
                    paragraphs={storyTellerData.caseStudy.userResearchInsights.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.userResearchInsights.bulletpoints}
                     screenDevice={screenDevice}
                />
        
                <ParagraphBlock
                    title={storyTellerData.caseStudy.personasMotives.title}
                    paragraphs={storyTellerData.caseStudy.personasMotives.paragraphs}
                    screenDevice={screenDevice}
                />
                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.personasMotives.images}
                    alt={storyTellerData.caseStudy.designThinking.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.interactionDesignPrinciples.title}
                    paragraphs={storyTellerData.caseStudy.interactionDesignPrinciples.paragraphs}
                    screenDevice={screenDevice}
                />
                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.interactionDesignPrinciples.bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.userInterModSpecs.title}
                    paragraphs={storyTellerData.caseStudy.userInterModSpecs.paragraphs}
                    screenDevice={screenDevice}
                />
                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.userInterModSpecs.bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.userInterModSpecs.images}
                    alt={storyTellerData.caseStudy.userInterModSpecs.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.storyboardingARExp.title}
                    paragraphs={storyTellerData.caseStudy.storyboardingARExp.paragraphs}
                    screenDevice={screenDevice}
                />

                <IlllustrationGallery />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.mockupsAndSpecs.title}
                    paragraphs={storyTellerData.caseStudy.mockupsAndSpecs.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.mockupsAndSpecs.images[2].split()}
                    alt={ storyTellerData.caseStudy.mockupsAndSpecs.alt}
                    screenDevice={screenDevice}
                />
                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.mockupsAndSpecs.images[3].split()}
                    alt={ storyTellerData.caseStudy.mockupsAndSpecs.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    title={storyTellerData.caseStudy.panoramaViewSpecs.title}
                    imagesSrc={ storyTellerData.caseStudy.panoramaViewSpecs.images}
                    alt={ storyTellerData.caseStudy.panoramaViewSpecs.alt}
                    screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.caseStudy.wireflow.title}
                    paragraphs={storyTellerData.caseStudy.wireflow.paragraphs}
                    screenDevice={screenDevice}
                />
                <IllustrationDiagram
                    title={storyTellerData.caseStudy.wireflow.title}
                    alt={storyTellerData.caseStudy.wireflow.alt}
                    images={storyTellerData.caseStudy.wireflow.images}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.scalablePlatform.title}
                    paragraphs={storyTellerData.scalablePlatform.paragraphs.slice(0,2)}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    description={storyTellerData.scalablePlatform.description}
                    imagesSrc={ storyTellerData.scalablePlatform.images}
                    alt={ storyTellerData.scalablePlatform.alt}
                    screenDevice={screenDevice}
                />
                <ParagraphBlock
                    paragraphs={storyTellerData.scalablePlatform.paragraphs.slice(2,3)}
                    screenDevice={screenDevice}
                />
                
                <IllustrationDiagram
                    description={storyTellerData.genericTaskFlow.description}
                    alt={storyTellerData.genericTaskFlow.alt}
                    images={storyTellerData.genericTaskFlow.images}
                    screenDevice={screenDevice}
                />
            </div> )
    } else if ( md || lg) {
        return (
            <div className='project-container'>
                <h1> SCREENS : MD/LG </h1>
                <OverviewParagraphBlock
                    title1={storyTellerData.designChallenge.title}
                    paragraph1={storyTellerData.designChallenge.paragraphs}
                    title2={storyTellerData.theProblem.title}
                    paragraph2={storyTellerData.theProblem.paragraphs}
                    title3={storyTellerData.solution.title}
                    paragraph3={storyTellerData.solution.paragraphs}
                    screenDevice={screenDevice}
                
                />
                
                <ParagraphImg 
                    imagesSrc={storyTellerData.solution.images}
                    alt={storyTellerData.solution.alt}
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

                <SectionImg 
                    imagesSrc={storyTellerData.caseStudy.caseStudySectionImages}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.overview.title}
                    paragraphs={storyTellerData.caseStudy.overview.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={storyTellerData.caseStudy.overviewImages}
                    alt={storyTellerData.caseStudy.overviewImagesAlt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title=''       
                    paragraphs={storyTellerData.caseStudy.overviewImagesDesc.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.learningAboutAttrac.title}
                    paragraphs={storyTellerData.caseStudy.learningAboutAttrac.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={storyTellerData.caseStudy.notificationsAttrac.images}
                    alt={storyTellerData.caseStudy.notificationsAttrac.description}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.notificationsAttrac.title}
                    paragraphs={storyTellerData.caseStudy.notificationsAttrac.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.notificationsAttrac.sampleNotificationsMdLg.images}
                    alt={ storyTellerData.caseStudy.notificationsAttrac.sampleNotificationsMdLg.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.magicExperiences.title}
                    paragraphs={storyTellerData.caseStudy.magicExperiences.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[0]}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[0].images}
                    width = "50%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[0].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[0].description }
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[1]}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[1].images}
                    width = "50%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[1].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[1].description }
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[2]}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[2].images}
                    width = "50%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[2].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[2].description }
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.designSystem.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.learningAboutAttrc.images}
                    alt={ storyTellerData.caseStudy.learningAboutAttrc.alt}
                    width = "100%"
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.designSystem.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.designSystem.bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.designThinking.title}
                    paragraphs={storyTellerData.caseStudy.designThinking.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.designThinking.images}
                    alt={storyTellerData.caseStudy.designThinking.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.valueDrivenDesign.title}
                    paragraphs={storyTellerData.caseStudy.valueDrivenDesign.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.valueDrivenDesign.bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.userResearchInsights.title}
                    paragraphs={storyTellerData.caseStudy.userResearchInsights.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.userResearchInsights.bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.personasMotives.title}
                    paragraphs={storyTellerData.caseStudy.personasMotives.paragraphs}
                    screenDevice={screenDevice}
                />
                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.personasMotives.images}
                    alt={storyTellerData.caseStudy.designThinking.alt}
                    screenDevice={screenDevice}
                />
                
                <ParagraphBlock
                    title={storyTellerData.caseStudy.interactionDesignPrinciples.title}
                    paragraphs={storyTellerData.caseStudy.interactionDesignPrinciples.paragraphs}
                    screenDevice={screenDevice}
                />
                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.interactionDesignPrinciples.bulletpoints}
                     screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.caseStudy.userInterModSpecs.title}
                    paragraphs={storyTellerData.caseStudy.userInterModSpecs.paragraphs}
                    screenDevice={screenDevice}
                />
                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.userInterModSpecs.bulletpoints}
                     screenDevice={screenDevice}
                />
                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.userInterModSpecs.images}
                    alt={storyTellerData.caseStudy.userInterModSpecs.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.storyboardingARExp.title}
                    paragraphs={storyTellerData.caseStudy.storyboardingARExp.paragraphs}
                    screenDevice={screenDevice}
                />


                <IlllustrationGallery />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.mockupsAndSpecs.title}
                    paragraphs={storyTellerData.caseStudy.mockupsAndSpecs.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.mockupsAndSpecs.images[1].split()}
                    alt={ storyTellerData.caseStudy.mockupsAndSpecs.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    title={storyTellerData.caseStudy.panoramaViewSpecs.title}
                    imagesSrc={ storyTellerData.caseStudy.panoramaViewSpecs.images}
                    alt={ storyTellerData.caseStudy.panoramaViewSpecs.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.wireflow.title}
                    paragraphs={storyTellerData.caseStudy.wireflow.paragraphs}
                    screenDevice={screenDevice}
                />

                <IllustrationDiagram
                    title={storyTellerData.caseStudy.wireflow.title}
                    alt={storyTellerData.caseStudy.wireflow.alt}
                    images={storyTellerData.caseStudy.wireflow.images}
                    screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.scalablePlatform.title}
                    paragraphs={storyTellerData.scalablePlatform.paragraphs}
                    screenDevice={screenDevice}
                />
                <ParagraphBlock
                    paragraphs={storyTellerData.scalablePlatform.paragraphs.slice(2,3)}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.genericTaskFlow.title}
                    paragraphs={storyTellerData.genericTaskFlow.paragraphs}
                    screenDevice={screenDevice}
                />


                <IllustrationDiagram
                    description={storyTellerData.genericTaskFlow.description}
                    alt={storyTellerData.genericTaskFlow.alt}
                    images={storyTellerData.genericTaskFlow.images}
                    screenDevice={screenDevice}
                />
            </div> )
    } else if (  laptop ) {
        return (
            <div className='project-container'>
                <h1> SCREEN : LAPTOP </h1>
                <OverviewParagraphBlock
                    title1={storyTellerData.designChallenge.title}
                    paragraph1={storyTellerData.designChallenge.paragraphs}
                    title2={storyTellerData.theProblem.title}
                    paragraph2={storyTellerData.theProblem.paragraphs}
                    title3={storyTellerData.solution.title}
                    paragraph3={storyTellerData.solution.paragraphs}
                    screenDevice={screenDevice}
                />

                <SolutionDemo
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

                <SectionImg 
                    imagesSrc={storyTellerData.caseStudy.caseStudySectionImages}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.overview.title}
                    paragraphs={storyTellerData.caseStudy.overview.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={storyTellerData.caseStudy.overviewImages}
                    alt={storyTellerData.caseStudy.overviewImagesAlt}
                
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    paragraphs={storyTellerData.caseStudy.overviewImagesDesc.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.learningAboutAttrac.title}
                    paragraphs={storyTellerData.caseStudy.learningAboutAttrac.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={storyTellerData.caseStudy.notificationsAttrac.images}
                    alt={storyTellerData.caseStudy.notificationsAttrac.description}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.notificationsAttrac.title}
                    paragraphs={storyTellerData.caseStudy.notificationsAttrac.paragraphs}
                    screenDevice={screenDevice}
                />
                
                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.notificationsAttrac.sampleNotificationsDesktop.images}
                    alt={storyTellerData.caseStudy.notificationsAttrac.sampleNotificationsMdLg.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.magicExperiences.title}
                    paragraphs={storyTellerData.caseStudy.magicExperiences.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[0]}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[0].images}
                    width = "50%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[0].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[0].description }
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[1]}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[1].images}
                    width = "50%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[1].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[1].description }
                    screenDevice={screenDevice}
                />
              
              <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[2]}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[2].images}
                    width = "50%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[2].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[2].description }
                    screenDevice={screenDevice}
                />
            
                <ParagraphBlock
                    title={storyTellerData.caseStudy.magicExperiences.title}
                    paragraphs={storyTellerData.caseStudy.magicExperiences.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.learningAboutAttrc.title}
                    paragraphs={storyTellerData.caseStudy.learningAboutAttrc.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.learningAboutAttrc.images}
                    alt={ storyTellerData.caseStudy.learningAboutAttrc.alt}
                    width = "50%"
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.designSystem.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.designSystem.bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.designThinking.title}
                    paragraphs={storyTellerData.caseStudy.designThinking.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.designThinking.images}
                    alt={storyTellerData.caseStudy.designThinking.alt}
                    screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.caseStudy.valueDrivenDesign.title}
                    paragraphs={storyTellerData.caseStudy.valueDrivenDesign.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.valueDrivenDesign.bulletpoints}
                     screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.caseStudy.userResearchInsights.title}
                    paragraphs={storyTellerData.caseStudy.userResearchInsights.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.userResearchInsights.bulletpoints}
                     screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.caseStudy.personasMotives.title}
                    paragraphs={storyTellerData.caseStudy.personasMotives.paragraphs}
                    screenDevice={screenDevice}
                />
                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.personasMotives.images}
                    alt={storyTellerData.caseStudy.designThinking.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.interactionDesignPrinciples.title}
                    paragraphs={storyTellerData.caseStudy.interactionDesignPrinciples.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.interactionDesignPrinciples.bulletpoints}
                     screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.caseStudy.userInterModSpecs.title}
                    paragraphs={storyTellerData.caseStudy.userInterModSpecs.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.userInterModSpecs.bulletpoints}
                     screenDevice={screenDevice}
                />
                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.userInterModSpecs.images}
                    alt={storyTellerData.caseStudy.userInterModSpecs.alt}
                    screenDevice={screenDevice}
                />
                <ParagraphBlock
                    title={storyTellerData.caseStudy.storyboardingARExp.title}
                    paragraphs={storyTellerData.caseStudy.storyboardingARExp.paragraphs}
                    screenDevice={screenDevice}
                />

                <IlllustrationGallery />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.mockupsAndSpecs.title}
                    paragraphs={storyTellerData.caseStudy.mockupsAndSpecs.paragraphs}
                    screenDevice={screenDevice}
                />
                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.mockupsAndSpecs.images[0].split()}
                    alt={ storyTellerData.caseStudy.mockupsAndSpecs.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    title={storyTellerData.caseStudy.panoramaViewSpecs.title}
                    imagesSrc={ storyTellerData.caseStudy.panoramaViewSpecs.images}
                    alt={ storyTellerData.caseStudy.panoramaViewSpecs.alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.wireflow.title}
                    paragraphs={storyTellerData.caseStudy.wireflow.paragraphs}
                    screenDevice={screenDevice}
                />

                <IllustrationDiagram
                    title={storyTellerData.caseStudy.wireflow.title}
                    alt={storyTellerData.caseStudy.wireflow.alt}
                    images={storyTellerData.caseStudy.wireflow.images}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.scalablePlatform.title}
                    paragraphs={storyTellerData.scalablePlatform.paragraphs}
                    screenDevice={screenDevice}
                />
                <ParagraphBlock
                    paragraphs={storyTellerData.scalablePlatform.paragraphs.slice(2,3)}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.genericTaskFlow.title}
                    paragraphs={storyTellerData.genericTaskFlow.paragraphs}
                    screenDevice={screenDevice}
                />

                <IllustrationDiagram
                    description={storyTellerData.genericTaskFlow.description}
                    alt={storyTellerData.genericTaskFlow.alt}
                    images={storyTellerData.genericTaskFlow.images}
                    screenDevice={screenDevice}
                />
            </div> )
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