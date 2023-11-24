import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './IllustrationDiagram.scss';
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'


function IllustrationDiagram(props) {
    const src = props.src;
    const alt = props.alt;
    const images = props.images;
    const screenDevice = props.screenDevice;
    const title = props.title;
    const description = props.description;
    //const desktopImage = images[0];
    useEffect(() => {
        initLightboxJS("individual");
    });
    
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
                                className='w-full rounded' 
                                src= { images[2] }
                                alt = { alt }
                                style = {{
                                    maxWidth: '80%',
                                    minWidth: '80%',
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
    images: PropTypes.array.isRequired,
    screenDevice: PropTypes.object.isRequired
}