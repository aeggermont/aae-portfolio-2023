import React from 'react';
import Box from '@mui/material/Box';
import './contact.scss';
import { useEffect, useState } from 'react';
import { getDoc, doc } from "firebase/firestore";
import { useMediaQuery } from "react-responsive";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    width: '100px',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Contact() {
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


    const handleLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/antonio-aranda-eggermont-23aa7b8/';
    };

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
            <div className='contact-section'>
                <div className='row'>
                        <div className='section-title'>
                            <span className='section-title-label'>
                                Contact Me 
                            </span>
                        </div>
                </div>
            </div>
            <div className='row'>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleLinkedIn}>
                            <input hidden accept="image/*" type="file" />
                            <LinkedInIcon />
                        </IconButton> 
                    </Grid>
                    <Grid item xs={6}>Linkedin </Grid>

                    <Grid item xs={6}>
                        <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleLinkedIn}>
                            <input hidden accept="image/*" type="file" />
                            <PhoneIphoneIcon />
                        </IconButton>  
                    </Grid>
                    <Grid item xs={6}>206 556-8918</Grid>

                    <Grid item xs={6}>
                        <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleLinkedIn}>
                            <input hidden accept="image/*" type="file" />
                            <AlternateEmailIcon />
                        </IconButton>  
                    </Grid>
                    <Grid item xs={6}> aaeggermont@outlook.com</Grid>
                </Grid>
                
            </div>
        </section>
    )
}

export default Contact;