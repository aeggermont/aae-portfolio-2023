import React from 'react';
import PropTypes from 'prop-types';

function ParagraphImg(props) {
    const alt = props.alt;
    const width = props.width;
    const imagesSrc = props.imagesSrc;
    const screenDevice = props.screenDevice;
    const title = props.title;
    const description = props.description;

    console.log('>>> screenDevice');
    console.log(screenDevice);
    
    if ( screenDevice.laptop ) {
        return (
            <div className='storyteller-laptopParagraphImg'>
                <img
                    src = { imagesSrc[0] }
                    alt = { alt }
                    style = {{
                        width: "80%",
                        alignSelf: 'center',
                        paddingTop: '200px'
                    }} 
                />
            </div>
           
        )
    } else if (  screenDevice.lg || screenDevice.md ) {
        return (
            <div  className='storyteller-lgmdParagraphImg'>
                <img
                    src = { imagesSrc[1] }
                    alt = { alt }
                    style = {{
                        width: "80%",
                        paddingTop: '100px'
                    }} 
                />
              
             </div>
        )
    } else if ( screenDevice.xs || screenDevice.sm ) {
        return (
            <div className='storyteller-xssmParagraphImg'>
                <img  
                    src = { imagesSrc[2] }
                    alt = { alt }
                    style = {{
                        width: "90%",
                        paddingTop: '120px'
                    }} 
                />
               
            </div>
            
        )
    }
}

export default ParagraphImg;

ParagraphImg.prototype = {
    title:  PropTypes.string,
    description: PropTypes.string,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    imagesSrc: PropTypes.array.isRequired,
    screenDevice: PropTypes.object.isRequired
}