import React from 'react';
import PropTypes from 'prop-types';
import './WireframeIllustration.scss';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import ZoomInButton from '../Images/ZoomInButton.svg';
import ZoomOutButton from '../Images/ZoomOutButton.svg';
import ResetZoomButton from '../Images/ResetZoomButton.svg';


function WireframeIllustration( props ) {
    const title = props.title;
    const alt = props.alt;
    const images = props.images;
    const screenDevice = props.screenDevice;
    const backgroundColor = props.backgroundColor;
    const titleFontColor = props.titleFontColor;

    const containerBackground = {
        backgroundColor: backgroundColor,
      };

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>
                <div style={containerBackground} className='desktop-wireframe-container'>
                    <div className='wireframe-title'>  {title} </div>
                    <TransformWrapper
                        initialScale={1}
                        initialPositionX={0}
                        initialPositionY={0}
                        >
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                                <TransformComponent>
                                    <img src={images[0] }  alt={alt} />
                                </TransformComponent>

                                <div className="zoom-tools">
                                    <button onClick={() => zoomIn()}> <img src={ZoomInButton}   width="40px" alt="Zoom In" /> </button>
                                    <button onClick={() => zoomOut()}> <img src={ZoomOutButton} width="40px"  alt="Zoom Out" /> </button>
                                    <button onClick={() => resetTransform()} > <img src={ResetZoomButton} width="40px" alt="Reset Zoom" /></button>
                                </div>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                </div>

            </>
        );
       
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                <div style={containerBackground} className='mobile-wireframe-container'>
                    <div className='wireframe-title'>  {title} </div>
                    <TransformWrapper
                        initialScale={2}
                        initialPositionX={0}
                        initialPositionY={0}
                        >
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                                <TransformComponent>
                                    <img src={images[2] }  alt={alt} />
                                </TransformComponent>

                                <div className="zoom-tools">
                                    <button onClick={() => zoomIn()}> <img src={ZoomInButton}  alt="Zoom In" /> </button>
                                    <button onClick={() => zoomOut()}> <img src={ZoomOutButton}  alt="Zoom Out" /> </button>
                                    <button onClick={() => resetTransform()} > <img src={ResetZoomButton}  alt="Reset Zoom" /></button>
                                </div>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                </div>
            </>
        );
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                <div className='mobile-wireframe-container'>
                    <div className='wireframe-title'>  {title} </div>
                    <TransformWrapper
                        initialScale={1}
                        initialPositionX={0}
                        initialPositionY={0}
                        >
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                                <TransformComponent>
                                    <img src={images[1] }  alt={alt} />
                                </TransformComponent>

                                <div className="zoom-tools">
                                    <button onClick={() => zoomIn()}> <img src={ZoomInButton}  alt="Zoom In" /> </button>
                                    <button onClick={() => zoomOut()}> <img src={ZoomOutButton}  alt="Zoom Out" /> </button>
                                    <button onClick={() => resetTransform()} > <img src={ResetZoomButton}  alt="Reset Zoom" /></button>
                                </div>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                </div>
            </>
        );
    }
}

export default WireframeIllustration;

WireframeIllustration.prototype = {
    title: PropTypes.string,
    titleFontColor: PropTypes.string,
    alt:  PropTypes.string,
    backgroundColor: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    screenDevice: PropTypes.object.isRequired   
}