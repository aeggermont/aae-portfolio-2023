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
                 {/*
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
            
                {/* 
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
                */}
            

                <div 
                    style={{
                        backgroundImage: `url(${DesignSystemBackground})`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'auto',
                       
                    }}> 
                    <div className='design-systemsection-desktop'>
                        <ParagraphBlock
                            title={storyTellerData.caseStudy.designSystem.title}
                            paragraphs={storyTellerData.caseStudy.designSystem.paragraphs}
                            screenDevice={screenDevice}
                        />
                    </div>
            
                    <ParagraphImg
                        imagesSrc={  storyTellerData.caseStudy.designSystem.images}
                        alt={storyTellerData.caseStudy.designSystem.alt}
                        screenDevice={screenDevice}
                    />
                </div>
                <ParagraphBlock
                    subTitle1={storyTellerData.caseStudy.designSystem.userResearchJourney.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.userResearchJourney.paragraphs}
                    screenDevice={screenDevice}
                />
   
                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.designSystem.userResearchJourney.images}
                    alt={storyTellerData.caseStudy.designSystem.userResearchJourney.alt}
                    description={storyTellerData.caseStudy.designSystem.userResearchJourney.imagesDescription }
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle2={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[0].title}
                    paragraphs={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[0].paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle2={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[1].title}
                    paragraphs={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[1].paragraphs}
                    screenDevice={screenDevice}
                />


                <ParagraphBlock
                    subTitle2={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[2].title}
                    paragraphs={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[2].paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle2={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[3].title}
                    paragraphs={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[3].paragraphs}
                    screenDevice={screenDevice}
                />


                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[3].bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle2={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[4].title}
                    paragraphs={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[4].paragraphs}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[4].bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle2={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[5].title}
                    paragraphs={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[5].paragraphs}
                    screenDevice={screenDevice}
                />
    
                <ParagraphImg
                    imagesSrc={ storyTellerData.caseStudy.designSystem.userResearchJourney.methods[5].images}
                    alt={storyTellerData.caseStudy.designSystem.userResearchJourney.methods[5].alt}
                    screenDevice={screenDevice}
                />
         
                <ParagraphBlock
                    subTitle1={storyTellerData.caseStudy.designSystem.developingSpecs.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.developingSpecs.paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle2={storyTellerData.caseStudy.designSystem.developingSpecs.methods[0].title}
                    paragraphs={[]}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.designSystem.developingSpecs.methods[0].bulletpoints}
                     screenDevice={screenDevice}
                />


                <ParagraphBlock
                    subTitle2={storyTellerData.caseStudy.designSystem.developingSpecs.methods[1].title}
                    paragraphs={storyTellerData.caseStudy.designSystem.developingSpecs.methods[1].paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    imagesSrc={  storyTellerData.caseStudy.designSystem.developingSpecs.methods[1].images}
                    alt={storyTellerData.caseStudy.designSystem.developingSpecs.methods[1].alt}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock 
                    subTitle1={storyTellerData.caseStudy.designSystem.scenarioBaseDesign.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.scenarioBaseDesign.paragraphs}
                    screenDevice={screenDevice}
                />
               

               <IlllustrationGallery 
                  title={storyTellerData.caseStudy.designSystem.scenarioBaseDesign.storyboarding.title}
                  screenDevice={screenDevice}
                />

                <ParagraphBlock 
                    subTitle1={storyTellerData.caseStudy.designSystem.wireframes.title}
                    paragraphs={[]}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock 
                    subTitle2={storyTellerData.caseStudy.designSystem.wireframes.methods[0].title}
                    paragraphs={storyTellerData.caseStudy.designSystem.wireframes.methods[0].paragraphs}
                    screenDevice={screenDevice}
                />

                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.designSystem.wireframes.methods[0].images[0].split()}
                    alt={ storyTellerData.caseStudy.designSystem.wireframes.methods[0].images[0].alt}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    description={storyTellerData.caseStudy.designSystem.wireframes.methods[1].title}
                    alt={ storyTellerData.caseStudy.designSystem.wireframes.methods[1].alt}
                    imagesSrc={ storyTellerData.caseStudy.designSystem.wireframes.methods[1].images}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock 
                    subTitle2={storyTellerData.caseStudy.designSystem.wireframes.methods[2].title}
                    paragraphs={storyTellerData.caseStudy.designSystem.wireframes.methods[2].paragraphs}
                    screenDevice={screenDevice}
                />

                <IllustrationDiagram
                    title={storyTellerData.caseStudy.designSystem.wireframes.methods[2].title}
                    alt={storyTellerData.caseStudy.designSystem.wireframes.methods[2].alt}
                    images={storyTellerData.caseStudy.designSystem.wireframes.methods[2].images}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.designSystem.designThinking.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.designThinking.paragraphs.slice(0,2)}
                    screenDevice={screenDevice}
                />

                <ParagraphImg
                    description={storyTellerData.caseStudy.designSystem.designThinking.imageDescriptino}
                    alt={ storyTellerData.caseStudy.designSystem.designThinking.alt}
                    imagesSrc={ storyTellerData.caseStudy.designSystem.designThinking.images}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    paragraphs={storyTellerData.caseStudy.designSystem.designThinking.paragraphs.slice(2,4)}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    title={storyTellerData.caseStudy.designSystem.usabilityTesting.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.usabilityTesting.paragraphs}
                    screenDevice={screenDevice}
                />
                
                <ParagraphBlock
                    subTitle1={storyTellerData.caseStudy.designSystem.usabilityTesting.theProcess.title}
                    paragraphs={[]}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.designSystem.usabilityTesting.theProcess.bulletpoints}
                     screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle1={storyTellerData.caseStudy.designSystem.usabilityTesting.dataAnalysis.title}
                    paragraphs={[]}
                    screenDevice={screenDevice}
                />

                <BulletPoints
                     bulletPoints={storyTellerData.caseStudy.designSystem.usabilityTesting.dataAnalysis.bulletpoints}
                     screenDevice={screenDevice}
                />



                <ParagraphBlock
                    subTitle1={storyTellerData.caseStudy.designSystem.scalablePlatform.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.scalablePlatform.paragraphs.slice(0,2)}
                    screenDevice={screenDevice}
                />


                <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.designSystem.scalablePlatform.images}
                    alt={ storyTellerData.caseStudy.designSystem.scalablePlatform.alt}
                    screenDevice={screenDevice}
                />


                <ParagraphBlock
                    paragraphs={storyTellerData.caseStudy.designSystem.scalablePlatform.paragraphs.slice(2,3)}
                    screenDevice={screenDevice}
                />

                <ParagraphBlock
                    subTitle1={storyTellerData.caseStudy.designSystem.scalablePlatform.genericTaskFlow.title}
                    paragraphs={storyTellerData.caseStudy.designSystem.scalablePlatform.genericTaskFlow.paragraphs}
                    screenDevice={screenDevice}
                />


                <IllustrationDiagram
                    title={storyTellerData.caseStudy.designSystem.scalablePlatform.genericTaskFlow.title}
                    alt={storyTellerData.caseStudy.designSystem.scalablePlatform.genericTaskFlow.alt}
                    images={storyTellerData.caseStudy.designSystem.scalablePlatform.genericTaskFlow.images}
                    screenDevice={screenDevice}
                />
            </div> );
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