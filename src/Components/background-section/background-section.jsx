import React from 'react';
import Box from '@mui/material/Box';
import BackgroundCard from './background/background';
import Typography from '@mui/material/Typography';
import './background-section.scss';
import { useMediaQuery } from "react-responsive";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { getDoc, doc } from "firebase/firestore";
import fsReference from '../../firebase';

/* Assets */
import UXUIDesignIcon from '../../assets/images/UXUIDesignIcon.png';
import HumanCenteredDesignIcon from '../../assets/images/HumanCenteredDesignIcon.png';
import FontEndDevelopment from '../../assets/images/FullStrackDevelopmentIcon.png';

import SystemsArchitectureIcon from '../../assets/images/SystemsArchitectureIcon.png';


function BackgroundSection() {

    const sm = 'only screen and (min-width: 576px) and (max-width: 767px)';
    const md = 'only screen and (min-width: 768px) and (max-width: 991px)';
    const lg = 'only screen and (min-width: 992px) and (max-width: 1200px)';
    const laptop = 'only screen and (min-width: 1200px)';
    const xs = '(max-width: 767px)';

    const isXSmallScr = useMediaQuery({ query: xs });  
    const isSmallScr  = useMediaQuery({ query: sm });
    const isMediumScr = useMediaQuery({ query: md });
    const isLargeScr  = useMediaQuery({ query: lg });
    const isLaptopScr = useMediaQuery({ query: laptop });
    const isPortraitScr = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetinaScr = useMediaQuery({ query: '(min-resolution: 2dppx)' });
    
    const [backgrounds, setBackgrounds] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const docRef = doc(fsReference, 'main_page', 'backgrounds');
        getDoc(docRef)
            .then((doc) => {
                setBackgrounds(doc.data());
                setIsLoading(false);
            })
            .catch(() => setError('error getting document'));
    },[]);

    if (isLoading) {
        return <p>loading...</p>
    }

    if (hasError) {
        return <p>Has error!</p>
    }
    
    const backgroundInfo = [
        {
            title: backgrounds['background_1']['title'],
            img: UXUIDesignIcon,
            description: [ "I am a professional with both design and programming skils. \
                            My experience as UX engineer is in the buidling and designing \
                            of digital experiences ranging from websites, mobile web apps, \
                            design and software prototypes, and speculative and fiction \
                            design narratives.", "Specifically, my experience is in the planning and design \
                            of web pages and apps employing user research methods, digital \
                            wireframes, and prototypes.", "I enjoy working as a designer and working with designers, back end engineers, \
                            and UX researchers to develop products and services." ]
        },
        {
            title: backgrounds['background_2']['title'],
            img: HumanCenteredDesignIcon,
            description: [ "I employ user centered design as a framework for design to make products and \
                             services highly usable. In my experience, user centered design has helped me \
                             understand where to begin when building or enhancing a new product or service,\
                             keeping the user-first mind set, employing iteration in the design and development \
                             process, and building empathy and collaboration. ",
                             "I enjoy approaching problems using structured methods of gathering observation,\
                             breaking cognitive fixedness, and generating creative ideas for solutions. ",
                             "I enjoy using Design Thinking as a toolkit for technology innovation, where I \
                             practice empathy in applying a human-centered approach to design techniques\
                             such as user research, user experience, prototyping, and journey mapping."]
        },
        {
            title: backgrounds['background_3']['title'],
            img:  FontEndDevelopment,
            description: [ "As a front end engineer, I take the vision and design concepts for implementation\
                             through code.  Because of my background in UX engineering, I have both design and\
                             programming abilities. This allows me to build relationships and engage with other\
                             designers, users and backend engineers during the development process. I have a\
                             particular interest in interactive applications.",
                             "I have experience in front end frameworks such as Angular, React, Django and have\
                             knowledge  of iOS/Swift.  Markup and programming languages include HTML, CSS,\
                             Javascript, TypeScript and python.",
                             "The projects I have developed range from content management systems, web mobile apps,\
                             A.R. , revenue management systems, and applications that interface with machine learning\
                             backends for data visualization, automation, and recommendations." ]
        }, 
        {
            title: backgrounds['background_4']['title'],
            img: SystemsArchitectureIcon,
            description: [ "Throughout my career, I have leveraged projects that required different types of\
                            systems integrations to allow technology ecosystems to share information between\
                            different sub-systems autonomously via RESTful APIs.",
                            "My experience in systems integration include legacy systems integration where\
                            legacy or outdated systems are integrated with modern applications. Examples\
                            include legacy systems integration with cloud applications and providers, and\
                            incremental upgrade of legacy Web applications. \
                            Other integrations include third party systems integrations where met focus has\
                            been on expanding the functionality of an existing tool or software app.  Examples\
                            include cloud based solutions for data and video processing, content management\
                            systems, and data access applications."],
        },
    ];


    const cardDimensions = function() { 
        let cardDimensions = {};

        if ( isXSmallScr ) {
            // console.log( ' < isXSmallScr > ');
            cardDimensions = {
                width: '175px',
                height: '210px',
                isPortraitScr: isPortraitScr
            };
    
        } else {
            cardDimensions = {
                width: '210px',
                height: '260px',
                isPortraitScr: isPortraitScr
            };
        }
    
        return cardDimensions;
    };
    

    console.log(cardDimensions());

    return (
        <section className='container'>
            <div className='background-section'>
                <div className='row'>
                    <div className='section-title'>
                        <span className='section-title-label'>
                            What I do 
                        </span>
                    </div>
                    
                </div>
                <div className='row'>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            alignContent: 'flex-start',
                            justifyContent: 'center'
                    }}>
                        <BackgroundCard info={backgroundInfo[0]} dimensions={cardDimensions()}/>
                        <BackgroundCard info={backgroundInfo[1]} dimensions={cardDimensions()}/>
                        <BackgroundCard info={backgroundInfo[2]} dimensions={cardDimensions()}/>
                        <BackgroundCard info={backgroundInfo[3]} dimensions={cardDimensions()}/>
                    </Box>
                </div>
            </div>
        </section>
    )
}

export default BackgroundSection;