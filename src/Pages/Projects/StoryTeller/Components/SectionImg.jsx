import React from 'react';
import PropTypes from 'prop-types';

function SectionImg(props) {
    const alt = props.alt;
    const imagesSrc = props.imagesSrc;
    const screenDevice = props.screenDevice;

    if (  screenDevice.laptop ) {
        return (
            
                <img
                    
                    src = { imagesSrc[0] }
                    style = {{
                        paddingTop: '3rem',
                        width: '100%'
                    }} 
                />

        );
    } else if ( screenDevice.lg || screenDevice.md ) {
        return (
                <img
                    
                    src = { imagesSrc[1] }
                    style = {{
                        paddingTop: '3rem',
                        width: '100%'
                    }} 
                />
        );

    } else if (  screenDevice.xs || screenDevice.sm ) {
        return (
                <img
                    src = { imagesSrc[2] }
                    style = {{
                        paddingTop: '1rem',
                        width: '100%'
                    }} 
                />
        );
    }
}

export default SectionImg;

SectionImg.prototype = {
    alt: PropTypes.string,
    imagesSrc: PropTypes.array,
    screenDevice: PropTypes.object.isRequired
} 
