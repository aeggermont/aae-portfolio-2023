import React, { useState } from 'react';
import {useEffect, useRef, useMemo} from 'react';
import PropTypes from 'prop-types';
import './WireframeIllustration.scss';
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

// TODO: Need to remove dependencies
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomInButton from '../Images/ZoomInButton.svg';
import ZoomOutButton from '../Images/ZoomOutButton.svg';
import ResetZoomButton from '../Images/ResetZoomButton.svg';

import ZoomInButtonDesktop from '../Images/ZoomInButtonDesktop.png';
import ZoomOutButtonDesktop from '../Images/ZoomOutButtonDesktop.png';
import ResetZoomButtonDesktop from '../Images/ResetZoomButtonDesktop.png';
import ZoomToolsButtonDesktop from '../Images/ZoomToolsButton-Desktop.png';


function WireframeIllustration( props ) {
    const title = props.title;
    const alt = props.alt;
    const images = props.images;
    const screenDevice = props.screenDevice;
    const backgroundColor = props.backgroundColor;
    const titleFontColor = props.titleFontColor;
    const disableZoomTools = props.disableZoomTools;
    useEffect(() => {
        initLightboxJS("individual");
    });

    const transformComponentRef = useRef();
    const ref1 = useRef(0);
    const isInViewport1 = useIsInViewport(ref1);
    const [isImageControlsDisabled, setImageControlsDisabled] = useState(true);

    const containerBackground = {
        backgroundColor: backgroundColor,
      };


    function enableZoomControls() {
        setImageControlsDisabled(false);
        console.log('enableZoomControls');
    }

    function viewFullScreen() {
        document.getElementById(title)?.requestFullscreen()
    }

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>
                <div ref={ref1} style={containerBackground} className='desktop-wireframe-container'>
                    <div className='wireframe-title'>  {title}  </div>
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
                                className='object-fit_fill' 
                                src= { images[0] }
                                alt = { alt }
                                style = {{
                                    maxWidth: '60%',
                                    minWidth: '60%',
                                    paddingTop: '100px',
                    
                                }} />
                        </SlideshowLightbox> 
                    </div>
                </div>

            </>
        );
       
    } else if ( screenDevice.isMobile ) {
        return (
            <>  
                <div ref={ref1} style={containerBackground} className='mobile-wireframe-container'>
                    <div className='wireframe-title'>  {title}  </div>
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
                                src= { images[1] }
                                alt = { alt }
                                style = {{
                                    maxWidth: '100%',
                                    minWidth: '100%',
                                    paddingTop: '10px',
                    
                                }} />
                        </SlideshowLightbox> 
                    </div>
                </div>
               
            </>
        );
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                <div ref={ref1} style={containerBackground} className='tablet-wireframe-container'>
                    <div className='wireframe-title'>  {title}  </div>
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
                                src= { images[2] }
                                alt = { alt }
                                style = {{
                                    maxWidth: '100%',
                                    minWidth: '100%',
                                    paddingTop: '10px',
                    
                                }} />
                        </SlideshowLightbox> 
                    </div>
                </div>
    
            </>
        );
    }
}

export default WireframeIllustration;


function useIsInViewport(ref) {
   
    const [isIntersecting, setIsIntersecting] = useState(false);
   
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
       
    useEffect(() => {
        
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
    
    return isIntersecting;
}


WireframeIllustration.prototype = {
    title: PropTypes.string,
    titleFontColor: PropTypes.string,
    alt:  PropTypes.string,
    backgroundColor: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    disableZoomTools: PropTypes.bool,
    screenDevice: PropTypes.object.isRequired   
}