import React from 'react';
import PropTypes from 'prop-types';

function ParagraphImg(props) {
    const src = props.src;
    const alt = props.alt;
    const width = props.width;
    const height = props.height;
    const images = props.images;
    const screenDevice = props.screenDevice;

    console.log('>>> screenDevice');
    console.log(screenDevice);
    
    console.log('>>> Images');
    console.log(images);

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <div className='desktop-imagesection-container'>
                <img
                    
                    src = { images[1] }
                    alt = { alt }
                    style = {{
                        width: width,
                        paddingTop: '200px'
                    }} 
                />
            </div>
           
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <div  className='mobile-imagesection-container'>
                <img
                   
                    src = { images[0] }
                    alt = { alt }
                    style = {{
                        width: width,
                        paddingTop: '100px'
                    }} 
                />
              
             </div>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <div className='tablet-imagesection-container'>
                <img  
                    src = { images[2] }
                    alt = { alt }
                    style = {{
                        width: width,
                        paddingTop: '120px'
                    }} 
                />
               
            </div>
            
        )
    }
}

export default ParagraphImg;

ParagraphImg.prototype = {
    src: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    screenDevice: PropTypes.object.isRequired
}