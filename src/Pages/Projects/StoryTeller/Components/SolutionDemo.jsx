import React from 'react';
import {useEffect, useRef, useMemo} from 'react';
import PropTypes from 'prop-types';
import './SolutionDemo.scss';
import ARTowerofTerrorDemo from '../Images/ARTowerofTerrorDemo.gif';
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

function SolutionDemo ( props ) {
    const screenDevice = props.screenDevice;
    const ref1 = useRef(0);
    const alt = 'AR Test';

    useEffect(() => {
        initLightboxJS("individual");
    });

    if ( screenDevice.laptop ) {
        return (
            <> 
               <div 
                    className='desktop-solution-demo-container'>

                        <div ref={ref1} className='laptop-demo-animation'>
                            <div className='mobile-ar-image'>
                                <SlideshowLightbox
                                    iconColor="silver"
                                    theme="lightbox" 
                                    className='container grid grid-cols-3 gap-2 mx-auto'
                                    showMagnificationIcons={false}
                                    fullScreen={false}
                                    imgAnimation="fade"
                                    showThumbnails={false}>
                                    <img 
                                        className='object-fit_fill' 
                                        src={ARTowerofTerrorDemo}
                                        alt = { alt }
                                        style = {{
                                            maxWidth: '100%',
                                            minWidth: '100%',
                                            paddingTop: '100px',
                            
                                        }} />
                                </SlideshowLightbox> 

                            </div>
                           
                        </div>
                    </div>
            </>
        )

    } else if ( screenDevice.lg || screenDevice.md) {
        return (
            <> 
                <div className='solutiondemo-lgmd-container'>
                      
                        <div ref={ref1} className='demo-lgmd-content'>
                            <div className='mobile-ar-image'>
                                <SlideshowLightbox
                                    iconColor="silver"
                                    theme="lightbox" 
                                    className='container grid grid-cols-3 gap-2 mx-auto'
                                    showMagnificationIcons={false}
                                    fullScreen={false}
                                    imgAnimation="fade"
                                    showThumbnails={false}>
                                    <img 
                                        className='object-fit_fill' 
                                        src= {ARTowerofTerrorDemo}
                                        alt = { alt }
                                        style = {{
                                            maxWidth: '100%',
                                            minWidth: '100%',
                                            paddingTop: '100px',
                                            paddingLeft: '100px',
                            
                                        }} />
                                </SlideshowLightbox> 
                            </div>
                        </div>

                       
                </div>
         </>
        )

    } else if ( screenDevice.xs || screenDevice.sm) {
        return (
            <> 
                <div className='solutiondemo-smxs-container'>
                        <div ref={ref1} className='mobile-demo-animation'>
                            <div className='mobile-ar-image'>
                                <SlideshowLightbox
                                    iconColor="silver"
                                    theme="lightbox" 
                                    className='container grid grid-cols-3 gap-2 mx-auto'
                                    showMagnificationIcons={false}
                                    fullScreen={false}
                                    imgAnimation="fade"
                                    showThumbnails={false}>
                                    <img 
                                        className='object-fit_fill' 
                                        src= {ARTowerofTerrorDemo}
                                        alt = { alt }
                                        style = {{
                                            maxWidth: '100%',
                                            minWidth: '100%',
                                            paddingTop: '3rem'
                            
                                        }} />
                                </SlideshowLightbox> 

                            </div>
                        </div>
                </div>
            </>
        )
    }

   


}

export default SolutionDemo;

SolutionDemo.prototype = {
    screenDevice: PropTypes.object
}
