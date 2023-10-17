import React from 'react';
import PropTypes from 'prop-types';
import './ParagraphText.scss';

function ParagraphText(props)  {
    const text = props.text;
    const screenDevice = props.screenDevice; 

    
    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>            
                <div className='desktop-paragraph-container'>
                    <p className='text-paragraph'> { text }</p>
                </div> 
            </>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <>          
                <div className='mobile-paragraph-container '>
                    <p className='text-paragraph'> { text }</p>
                </div>
            </>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <>     
                <div className='tablet-paragraph-container '>
                    <p className='text-paragraph'> { text }</p>
                </div>
            </>
        )
    }
}

export default ParagraphText;

ParagraphText.prototype = {
    text: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}