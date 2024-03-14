import React from 'react';
import PropTypes from 'prop-types';
import './StoryTeller.scss';

/* Reusable component */

import OverviewParagraphBlock from './Components/OverviewParagraphBlock';
import SolutionDemo from './Components/SolutionDemo';
import ProjectOverview from './Components/ProjectOverview';
import Team from './Components/Team';
import SectionImg from './Components/SectionImg';
import ParagraphBlock from './Components/ParagraphBlock';
import ParagraphImg from './Components/ParagraphImg';
import BulletPoints from './Components/BulletPoints.jsx';
import IlllustrationGallery from './Components/IlllustrationGallery';
import IllustrationDiagram from './Components/IllustrationDiagram';
import SectionVideo from './Components/SectionVideo';

/* Assets */
import DesignSystemBackgroundMdLg from './Images/DesignSystemBackground-MdLg.png';

function StoryTellerMdLgView(props) {
    const screenDevice = props.screenDevice;
    const storyTellerData = props.contentData;

    return (
        <div className='project-container'>
           <p> SCREENS : MD/LG </p>
           <OverviewParagraphBlock
                    title1={storyTellerData.designChallenge.title}
                    paragraph1={storyTellerData.designChallenge.paragraphs}
                    title2={storyTellerData.theProblem.title}
                    paragraph2={storyTellerData.theProblem.paragraphs}
                    title3={storyTellerData.solution.title}
                    paragraph3={storyTellerData.solution.paragraphs}
                    screenDevice={screenDevice}/>

            <ParagraphImg 
                imagesSrc={storyTellerData.solution.images}
                alt={storyTellerData.solution.alt}
                screenDevice={screenDevice} />

            <ProjectOverview 
                     screenDevice={screenDevice} />

            <Team
                    title={storyTellerData.team.title}
                    members={storyTellerData.team.members}
                    screenDevice={screenDevice} />

            <SectionImg 
                    imagesSrc={storyTellerData.caseStudy.caseStudySectionImages}
                    screenDevice={screenDevice} />
            <ParagraphBlock
                title={storyTellerData.caseStudy.overview.title}
                paragraphs={storyTellerData.caseStudy.overview.paragraphs}
                screenDevice={screenDevice}
            />

            <ParagraphImg 
                    imagesSrc={storyTellerData.caseStudy.overviewImages}
                    alt={storyTellerData.caseStudy.overviewImagesAlt}
                    screenDevice={screenDevice} />
            
            <ParagraphBlock
                    title=''       
                    paragraphs={storyTellerData.caseStudy.overviewImagesDesc.paragraphs}
                    screenDevice={screenDevice} />

            <ParagraphBlock
                    title={storyTellerData.caseStudy.learningAboutAttrac.title}
                    paragraphs={storyTellerData.caseStudy.learningAboutAttrac.paragraphs}
                    screenDevice={screenDevice} />

            <ParagraphImg 
                    imagesSrc={storyTellerData.caseStudy.notificationsAttrac.images}
                    alt={storyTellerData.caseStudy.notificationsAttrac.description}
                    screenDevice={screenDevice}/>

            <ParagraphBlock
                    title={storyTellerData.caseStudy.notificationsAttrac.title}
                    paragraphs={storyTellerData.caseStudy.notificationsAttrac.paragraphs}
                    screenDevice={screenDevice} />
            
            <ParagraphImg 
                    imagesSrc={ storyTellerData.caseStudy.notificationsAttrac.sampleNotificationsMdLg.images}
                    alt={ storyTellerData.caseStudy.notificationsAttrac.sampleNotificationsMdLg.alt}
                    screenDevice={screenDevice}/>

            <ParagraphBlock
                    title={storyTellerData.caseStudy.magicExperiences.title}
                    paragraphs={storyTellerData.caseStudy.magicExperiences.paragraphs}
                    screenDevice={screenDevice} />
            
            <ParagraphImg
                    alt={storyTellerData.caseStudy.magicExperiences.experiences[0]}
                    imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[0].images}
                    width = "50%"
                    title ={ storyTellerData.caseStudy.magicExperiences.experiences[0].title }
                    description ={ storyTellerData.caseStudy.magicExperiences.experiences[0].description }
                    screenDevice={screenDevice} />

            <ParagraphImg
                alt={storyTellerData.caseStudy.magicExperiences.experiences[1]}
                imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[1].images}
                width = "50%"
                title ={ storyTellerData.caseStudy.magicExperiences.experiences[1].title }
                description ={ storyTellerData.caseStudy.magicExperiences.experiences[1].description }
                screenDevice={screenDevice}/>

            <ParagraphImg
                alt={storyTellerData.caseStudy.magicExperiences.experiences[2]}
                imagesSrc={  storyTellerData.caseStudy.magicExperiences.experiences[2].images}
                width = "50%"
                title ={ storyTellerData.caseStudy.magicExperiences.experiences[2].title }
                description ={ storyTellerData.caseStudy.magicExperiences.experiences[2].description }
                screenDevice={screenDevice} />

            <div 
                style={{
                    backgroundImage: `url(${DesignSystemBackgroundMdLg})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'auto',
                   
                }}> 
                <div>
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



           {/*  Design Thinking */}

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
                subTitle2={storyTellerData.caseStudy.designSystem.designThinking.designFunnels.title}
                paragraphs={storyTellerData.caseStudy.designSystem.designThinking.designFunnels.paragraphs}
                screenDevice={screenDevice}
            />

            <IllustrationDiagram
                description={storyTellerData.caseStudy.designSystem.designThinking.designFunnels.imagesDesc}
                alt={storyTellerData.caseStudy.designSystem.designThinking.designFunnels.alt}
                images={ storyTellerData.caseStudy.designSystem.designThinking.designFunnels.images }
                screenDevice={screenDevice}
            />

            <ParagraphBlock
                subTitle2={storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.title }
                paragraphs={storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.paragraphs}
                screenDevice={screenDevice}
            />

            <ParagraphImg
                description={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup1.imageDesc }
                alt={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup1.alt}
                imagesSrc={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup1.images }
                width={ '60%'}
                screenDevice={screenDevice}
            />

            <ParagraphImg
                description={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup2.imageDesc }
                alt={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup2.alt}
                imagesSrc={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup2.images }
                width={ '60%'}
                screenDevice={screenDevice}
            />

            <ParagraphImg
                description={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup3.imageDesc }
                alt={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup3.alt}
                imagesSrc={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup3.images }
                width={ '60%'}
                screenDevice={screenDevice}
            />

            <ParagraphImg
                description={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup4.imageDesc }
                alt={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup4.alt}
                imagesSrc={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup4.images }
                width={ '60%'}
                screenDevice={screenDevice}
            />

            <ParagraphImg
                description={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup5.imageDesc }
                alt={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup5.alt}
                imagesSrc={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup5.images }
                width={ '60%'}
                screenDevice={screenDevice}
            />

            <ParagraphImg
                description={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup6.imageDesc }
                alt={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup6.alt}
                imagesSrc={ storyTellerData.caseStudy.designSystem.designThinking.sampleMockups.mockup6.images }
                width={ '60%'}
                screenDevice={screenDevice}
            />


            <SectionVideo
                screenDevice={screenDevice}
            />
             {/*  Usability Evaluation */}                

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
        </div>
    );
}

export default StoryTellerMdLgView;

StoryTellerMdLgView.prototype = {
    contentData:  PropTypes.object.isRequired,
    screenDevice: PropTypes.object.isRequired     
}