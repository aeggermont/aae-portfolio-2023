import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './IllustrationDiagram.scss';
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

// import { initLightboxJS } from 'lightbox.js-react';
// import {SlideshowLightbox} from 'lightbox.js-react'

import { ImageGroup, Image } from 'react-fullscreen-image'
import ZoomInButton from '../Images/ZoomInButton.svg';
import ZoomInButton2x from '../Images/ZoomInButton@2x.svg';
import ZoomInButton3x from '../Images/ZoomInButton@3x.svg';

import ZoomOutButton from '../Images/ZoomOutButton.svg';
import ZoomOutButton2x from '../Images/ZoomOutButton@2x.svg';
import ZoomOutButton3x from '../Images/ZoomOutButton@3x.svg';

import ResetZoomButton from '../Images/ResetZoomButton.svg';
import ResetZoomButton2x from '../Images/ResetZoomButton@2x.svg';
import ResetZoomButton3x from '../Images/ResetZoomButton@3x.svg';



function IllustrationDiagram(props) {
    const src = props.src;
    const alt = props.alt;
    const width = props.width;
    const height = props.height;
    const images = props.images;
    const screenDevice = props.screenDevice;
    const title = props.title;
    const description = props.description;
    const backgroundColor = props.backgroundColor;
    //const desktopImage = images[0];
    useEffect(() => {
        initLightboxJS("individual");
    });

      
    // useEffect(() => {
    //    initLightboxJS("individual");
    //  }, []);

    // Note: Need to figure out how to do trigger full screen in iOS devices:
    // https://stackoverflow.com/questions/12822739/full-screen-api-html5-and-safari-ios-6
    
    function viewFullScreen() {
        document.getElementById(title)?.requestFullscreen()
    }

    function handleTap () {
        console.log("you have taped me");
    }

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <div className='desktop-illlustration-container'>
                <div className='illustration-title'>  { title} </div>

                <div className='image-container'>
                    <SlideshowLightbox
                        iconColor="silver"
                        theme="lightbox" 
                        className='container grid grid-cols-3 gap-2 mx-auto'
                        showMagnificationIcons={true}
                        fullScreen={true}
                        imgAnimation="fade"
                        showThumbnails={false}>
                        <img 
                            className='w-full rounded' 
                            src= { images[0] }
                            alt = { alt }
                            style = {{
                                maxWidth: '60%',
                                minWidth: '60%',
                                paddingTop: '100px',
                
                            }} />
                    </SlideshowLightbox> 
                </div>
                <span className='text-description'>  { description} </span>
            </div>
           
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <div  className='mobile-illlustration-container'>
                <div className='illustration-title'>  { title} </div>
                <div className='image-container'>

                    <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' showThumbnails={false}>
                        <img 
                            className='w-full rounded' 
                            src= { images[1] }
                            alt = { alt }
                            style = {{
                                maxWidth: '100%',
                                minWidth: '100%',
                                paddingTop: '100px',
                
                            }} />
                    </SlideshowLightbox> 
                </div>
                <span className='text-description'>  { description} </span>            
             </div>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <div className='tablet-illlustration-container'>
                <div className='illustration-title'>  { title} </div>
                <div className='image-container'>
                    <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' showThumbnails={false}>
                            <img 
                                className='object-fit_fill' 
                                src= { images[2] }
                                alt = { alt }
                                style = {{
                                    maxWidth: '100%',
                                    minWidth: '100%',
                                    paddingTop: '100px',
                    
                                }} />
                    </SlideshowLightbox>
                </div>
                <span className='text-description'>  { description} </span>
               
            </div>
            
        )
    }
}

export default IllustrationDiagram;

IllustrationDiagram.prototype = {
    title: PropTypes.string,
    description: PropTypes.string,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}