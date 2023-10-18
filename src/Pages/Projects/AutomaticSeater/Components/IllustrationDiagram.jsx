import React from 'react';
import PropTypes from 'prop-types';
import './IllustrationDiagram.scss';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <div className='desktop-illlustration-container'>
                <div className='illustration-title'>  { title} </div>
                <TransformWrapper
                    initialScale={1}
                    initialPositionX={0}
                    initialPositionY={0}
                    >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <React.Fragment>
                        <div className="tools">
                            <button onClick={() => zoomIn()}>      
                                <img src={ZoomInButton3x}  alt="test" />
                            </button>
                            <button onClick={() => zoomOut()}>     
                                <img src={ZoomOutButton3x}  alt="test" />  
                            </button>
                            <button onClick={() => resetTransform()} >    
                            <img src={ResetZoomButton3x}  alt="test" />
                                </button>
                        </div>
                        <TransformComponent>
                            <img src={images[0] }  alt="test" />
                        
                        </TransformComponent>
                        </React.Fragment>
                    )}
                 </TransformWrapper>

                {/* 
                <img
                    src = { images[0] }
                    alt = { alt }
                    style = {{
                        width: "90%",
                        paddingTop: '5px'
                    }} 
                />
                */}
                <span className='text-description'>  { description} </span>
            </div>
           
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <div  className='mobile-illlustration-container'>
                <div className='illustration-title'>  { title} </div>

                <TransformWrapper
                    initialScale={1}
                    initialPositionX={0}
                    initialPositionY={0}
                    >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <React.Fragment>
                        <div className="tools">
                            <button onClick={() => zoomIn()}>      
                                <img src={ZoomInButton}  alt="test" />
                            </button>
                            <button onClick={() => zoomOut()}>     
                                <img src={ZoomOutButton}  alt="test" />  
                            </button>
                            <button onClick={() => resetTransform()} >    
                            <img src={ResetZoomButton}  alt="test" />
                                </button>
                        </div>
                        <TransformComponent>
                            <img src={images[2] }  alt="test" />
                        
                        </TransformComponent>
                        </React.Fragment>
                    )}
                 </TransformWrapper>
                <span className='text-description'>  { description} </span>
              
             </div>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <div className='tablet-illlustration-container'>
                 <div className='text-title'>  { title} </div>
                 <TransformWrapper
                    initialScale={1}
                    initialPositionX={0}
                    initialPositionY={0}
                    >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <React.Fragment>
                        <div className="tools">
                            <button onClick={() => zoomIn()}>      
                                <img src={ZoomInButton3x}  alt="test" />
                            </button>
                            <button onClick={() => zoomOut()}>     
                                <img src={ZoomOutButton3x}  alt="test" />  
                            </button>
                            <button onClick={() => resetTransform()} >    
                            <img src={ResetZoomButton3x}  alt="test" />
                                </button>
                        </div>
                        <TransformComponent>
                            <img src={images[1] }  alt="test" />
                        
                        </TransformComponent>
                        </React.Fragment>
                    )}
                 </TransformWrapper>

                 {/*

                <img  
                    src = { images[1] }
                    alt = { alt }
                    style = {{
                        width: width,
                        paddingTop: '120px'
                    }} 
                /> */}
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