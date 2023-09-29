import React from 'react';
import PropTypes from 'prop-types';
import './IllustrationDiagram.scss';

function IllustrationDiagram(props) {
    const src = props.src;
    const alt = props.alt;
    const width = props.width;
    const height = props.height;
    const images = props.images;
    const screenDevice = props.screenDevice;
    const title = props.title;
    const description = props.description;

    console.log('>>> screenDevice');
    console.log(screenDevice);
    
    console.log('>>> Images');
    console.log(images);

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <div className='desktop-illlustration-container'>
                <span className='illustration-title'>  { title} </span>
                <img
                    src = { images[0] }
                    alt = { alt }
                    style = {{
                        width: "90%",
                        paddingTop: '5px'
                    }} 
                />
                <span className='text-description'>  { description} </span>
            </div>
           
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <div  className='mobile-illlustration-container'>
                <div className='illustration-title'>  { title} </div>
                <img
                    src = { images[2] }
                    alt = { alt }
                    style = {{
                        width: width,
                        paddingTop: '5px'
                    }}
                />
                <span className='text-description'>  { description} </span>
              
             </div>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <div className='tablet-illlustration-container'>
                 <span className='text-title'>  { title} </span>
                <img  
                    src = { images[1] }
                    alt = { alt }
                    style = {{
                        width: width,
                        paddingTop: '120px'
                    }} 
                />
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
    screenDevice: PropTypes.object.isRequired
}