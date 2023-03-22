import React from 'react';
import Box from '@mui/material/Box';
import './testimonials.scss';
import { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import { useMediaQuery } from "react-responsive";
import fsReference from '../../firebase';
import { getDoc, doc } from "firebase/firestore";

function Testimonials() {

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

    const cardDimensions = function() { 
        let cardDimensions = {};

        if ( isXSmallScr ) {
            // console.log( ' < isXSmallScr > ');
            cardDimensions = {
                width: '175px',
                height: '210px',
                isPortraitScr: isPortraitScr
            };
    
        } else if ( isLargeScr) {
            cardDimensions = {
                width: '210px',
                height: '270px',
                isPortraitScr: isPortraitScr
            };

        } else {
            cardDimensions = {
                width: '237px',
                height: '300px',
                isPortraitScr: isPortraitScr
            };
        }
    
        return cardDimensions;
    };

    return (
        <section className='container'>
            <div className='testimonials-section'>
                <div className='row'>
                        <div className='section-title'>
                            <span className='section-title-label'>
                                Testimonials 
                            </span>
                        </div>
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
                        <Testimonial dimensions={cardDimensions()}/>
                        <Testimonial dimensions={cardDimensions()}/>
                        <Testimonial dimensions={cardDimensions()}/>
                    </Box>
                </div>
        </section>
    );
}

export default Testimonials;