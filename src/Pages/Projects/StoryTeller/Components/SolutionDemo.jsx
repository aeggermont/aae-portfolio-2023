import React from 'react';
import {useEffect, useRef, useMemo} from 'react';
import PropTypes from 'prop-types';
import './SolutionDemo.scss';
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

function SolutionDemo ( props ) {
    const title = props.title;
    const paragraphs = props.paragraphs[0];
    const screenDevice = props.screenDevice;
    const description = props.description;

    const ref1 = useRef(0);
    const alt = 'AR Test';

    useEffect(() => {
        initLightboxJS("individual");
    });

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <> 
               <div style={{ 
                    backgroundImage: "url(/images/projects/storyteller/background-demo-desktop.png)",  
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto'
                    }} 
                    className='desktop-solution-demo-container'>
                        <div className='desktop-demo-content'>
                            <div className='desktop-demo-title'>
                                {title}
                            </div>
                            <div className='desktop-demo-paragraph-text'>
                                {paragraphs}
                            </div>
                        </div>

                        <div ref={ref1} className='desktop-demo-animation'>
                            <div className='mobile-ar-image'>
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
                                        src= '/images/projects/storyteller/tower-of-terror-animation.gif'
                                        alt = { alt }
                                        style = {{
                                            maxWidth: '100%',
                                            minWidth: '100%',
                                            paddingTop: '100px',
                            
                                        }} />
                                </SlideshowLightbox> 

                            </div>
                           
                        </div>
                        <div className="desktop-demo-description"> {description} </div>
                    </div>
            </>
        )

    } else if ( screenDevice.isTablet ) {
        return (
            <> 
                <div 
                    className='tablet-solution-demo-container'
                    style={{ 
                    backgroundImage: "url(/images/projects/storyteller/background-demo-desktop.png)",  
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    backgroundPositionY: '65%'
                    }} >
                        <div className='tablet-demo-content'>
                            <div className='tablet-demo-title'>
                                {title}
                            </div>
                            <div className='tablet-demo-paragraph-text'>
                                {paragraphs}
                            </div>
                        </div>

                        <div ref={ref1} className='tablet-demo-animation'>
                            <div className='mobile-ar-image'>
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
                                        src= '/images/projects/storyteller/tower-of-terror-animation.gif'
                                        alt = { alt }
                                        style = {{
                                            maxWidth: '100%',
                                            minWidth: '100%',
                                            paddingTop: '100px',
                                            paddingLeft: '100px',
                            
                                        }} />
                                </SlideshowLightbox> 
                            </div>
                            <div className="tablet-demo-description"> {description} </div>
                        </div>

                       
                </div>
         </>
        )

    } else if ( screenDevice.isMobile ) {
        return (
            <> 
                <div style={{ 
                    backgroundImage: "url(/images/projects/storyteller/background-demo-desktop.png)",  
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    backgroundPositionY: '95%'
                    }} 
                    className='mobile-solution-demo-container'>
                        <div className='mobile-demo-content'>
                            <div className='mobile-demo-title'>
                                {title}
                            </div>
                            <div className='mobile-demo-paragraph-text'>
                                {paragraphs}
                            </div>
                        </div>

                        <div ref={ref1} className='mobile-demo-animation'>
                            <div className='mobile-ar-image'>
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
                                        src= '/images/projects/storyteller/tower-of-terror-animation.gif'
                                        alt = { alt }
                                        style = {{
                                            maxWidth: '100%',
                                            minWidth: '100%',
                                            paddingTop: '3rem'
                            
                                        }} />
                                </SlideshowLightbox> 

                            </div>
                            <div className="mobile-demo-description"> {description} </div>
                        </div>
                </div>
            </>
        )
    }

   


}

export default SolutionDemo;

SolutionDemo.prototype = {
    title: PropTypes.string,
    paragraphs: PropTypes.array,
    description: PropTypes.string,
    screenDevice: PropTypes.object
}
