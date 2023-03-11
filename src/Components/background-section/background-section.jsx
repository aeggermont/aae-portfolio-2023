import React from 'react';
import Box from '@mui/material/Box';
import BackgroundCard from './background/background';
import Typography from '@mui/material/Typography';
import UXUIDesignIcon from '../../assets/images/UXUIDesignIcon.png';
import FullStrackDevelopmentIcon from '../../assets/images/FullStrackDevelopmentIcon.png';
import HumanCenteredDesignIcon from '../../assets/images/HumanCenteredDesignIcon.png';
import SystemsArchitectureIcon from '../../assets/images/SystemsArchitectureIcon.png';
import './background-section.scss';
import { useMediaQuery } from "react-responsive";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

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
    
    const backgroundInfo = [
        {
            title: 'UX/UI Design & Engineering',
            img: UXUIDesignIcon
        },
        {
            title: 'Human Centered Design',
            img: HumanCenteredDesignIcon
        },
        {
            title: 'Systems Architecture',
            img: SystemsArchitectureIcon
        },
        {
            title: 'Full Stack Development',
            img: FullStrackDevelopmentIcon
        },
    ];


    const cardDimensions = function() { 
        let cardDimensions = {};

        if ( isXSmallScr ) {
            console.log( ' < isXSmallScr > ');
            cardDimensions = {
                width: '260px',
                height: '210px',
                isPortraitScr: isPortraitScr
            };
    
        } else if ( isSmallScr ) {
            console.log( ' < isSmallScr > '); 
            cardDimensions = {
                width: '100px',
                height: '100px',
                isPortraitScr: isPortraitScr
            };
    
        } else if ( isMediumScr ) {
            console.log( ' < isMediumScr > '); 
            cardDimensions = {
                width: '185px',
                height: '230px',
                isPortraitScr: isPortraitScr
            };
        } else if ( isLargeScr ) {
            console.log( ' < isLargeScr > '); 
            cardDimensions = {
                width: '100px',
                height: '100px',
                isPortraitScr: isPortraitScr
            };
        } else if ( isLaptopScr ) {
            console.log( ' < isLaptopScr > '); cardDimensions = {
                width: '260px',
                height: '280px',
                isPortraitScr: isPortraitScr
            };
        
        };
    
        return cardDimensions;
    };
    

    console.log(cardDimensions());

    return (
        <section>
            <div className='section-divider'>
                <Typography
                        align='left'
                        gutterBottom
                        variant="h4"
                        className='section-divider-typography'
                        component="div"> What I do </Typography>
            </div>
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


            </Box>    
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

        </section>
       
    )
}

export default BackgroundSection;