import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Background from './Background';
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from 'react';
import { getDoc, doc } from "firebase/firestore";
import fsReference from '../../../firebase';
import './BackgroundSection.scss';
import HomeData from '../HomeData';


function BackgroundSection(props) {
    const screenDevice = props.screenDevice;     
    const cardDimensions = function() { 
        let cardDimensions = {};
        if ( screenDevice.desktop ) {
            cardDimensions = {
                width: '230px',
                height: '270px',
                isPortraitScr: false
            };
        } else if ( screenDevice.lg || screenDevice.md ) {
            cardDimensions = {
                width: '158px',
                height: '190px',
                isPortraitScr: false
            };
    
        } else if ( screenDevice.sm || screenDevice.xs ) {
            cardDimensions = {
                width: '160px',
                height: '180px',
                isPortraitScr: false
            };
        }

        return cardDimensions;
    };

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
                        <Background info={HomeData.backgrounds[0]} dimensions={cardDimensions()}/>
                        <Background info={HomeData.backgrounds[1]} dimensions={cardDimensions()}/>
                        <Background info={HomeData.backgrounds[2]} dimensions={cardDimensions()}/>
                        <Background info={HomeData.backgrounds[3]} dimensions={cardDimensions()}/>
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default BackgroundSection;

BackgroundSection.prototype = {
    screenDevice: PropTypes.object.isRequired
}