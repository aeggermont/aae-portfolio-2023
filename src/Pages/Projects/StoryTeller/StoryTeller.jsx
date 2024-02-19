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

               
              

                {/*

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

                <IlllustrationGallery 
                    title={storyTellerData.caseStudy.storyboardingARExp.galleryTitle}
                    screenDevice={screenDevice}
                />

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

                <ParagraphBlock
                    title={storyTellerData.caseStudy.usabilityTesting.title }
                    paragraphs={storyTellerData.caseStudy.usabilityTesting.paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.usabilityTesting.theProcess.bulletpoints}
                     screenDevice={screenDevice}
                     subTitle={storyTellerData.caseStudy.usabilityTesting.theProcess.title}
                />

                <BulletPoints
                    subTitle={storyTellerData.caseStudy.usabilityTesting.dataAnalysis.title}
                    bulletPoints={storyTellerData.caseStudy.usabilityTesting.dataAnalysis.bulletpoints}
                    screenDevice={screenDevice} 
                />
                  */}
            </div> )
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