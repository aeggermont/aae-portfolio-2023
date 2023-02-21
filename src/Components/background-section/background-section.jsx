import React from 'react';
import Box from '@mui/material/Box';
import BackgroundCard from './background/background';
import Typography from '@mui/material/Typography';
import UXUIDesignIcon from '../../assets/images/UXUIDesignIcon.png';
import FullStrackDevelopmentIcon from '../../assets/images/FullStrackDevelopmentIcon.png';
import HumanCenteredDesignIcon from '../../assets/images/HumanCenteredDesignIcon.png';
import SystemsArchitectureIcon from '../../assets/images/SystemsArchitectureIcon.png';
import './background-section.scss';

function BackgroundSection() {
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
    ]

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
                    justifyContent: 'center',
                    '&:hover': {
                        opacity: [0.9, 0.8, 0.7],
                    },
            }}>
                <BackgroundCard info={backgroundInfo[0]}/>
                <BackgroundCard info={backgroundInfo[1]}/>
                <BackgroundCard info={backgroundInfo[2]}/>
                <BackgroundCard info={backgroundInfo[3]}/>
            </Box>
        </section>
       
    )
}

export default BackgroundSection;