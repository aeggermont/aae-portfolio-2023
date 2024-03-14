import React from 'react';
import PropTypes from 'prop-types';

function ParagraphImg(props) {
    const src = props.src;
    const alt = props.alt;
    const width = props.width;
    const height = props.height;
    const imagesSrc = props.imagesSrc;
    const screenDevice = props.screenDevice;

    console.log('>>> screenDevice');
    console.log(screenDevice);
    
    console.log('>>> Images');
    console.log(imagesSrc);

    if ( screenDevice.laptop) {
        return (
            <div className='desktop-imagesection-container'>
                 <h1> Hey</h1>
                <img
                    src = { imagesSrc[0] }
                    alt = { alt }
                    style = {{
                        width: '50%',
                        paddingTop: '200px'
                    }} 
                />
            </div>
           
        )
    } else if (  screenDevice.lg || screenDevice.md ) {
        return (
            <div  className='mobile-imagesection-container'>
                <h1> Hey</h1>
                <img
                    src = { imagesSrc[1] }
                    alt = { alt }
                    style = {{
                        width: '30%',
                        paddingTop: '100px'
                    }} 
                />
              
             </div>
        )
    } else if (  screenDevice.xs || screenDevice.sm) {
        return (
            <div className='tablet-imagesection-container'>
                <img  
                    src = { imagesSrc[2] }
                    alt = { alt }
                    style = {{
                        width: '50%',
                        paddingTop: '120px'
                    }} 
                />
               
            </div>
            
        )
    }
}

export default ParagraphImg;

ParagraphImg.prototype = {
    alt: PropTypes.string.isRequired,
    imagesSrc: PropTypes.array.isRequired,
    screenDevice: PropTypes.object.isRequired
}