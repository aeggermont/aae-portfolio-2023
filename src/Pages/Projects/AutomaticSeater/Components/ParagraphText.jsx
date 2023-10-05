import React from 'react';
import PropTypes from 'prop-types';
import './ParagraphText.scss';

function ParagraphText(props)  {
    const text = props.text;
    const screenDevice = props.screenDevice; 

    return (
        <>  
            <div> { text } </div>
        </>
    );

     /*
    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>  
                <div> { text } </div>
                
                <div className='desktop-paragraph-container'>
                    <p className='text-paragraph'> { text }</p>
                </div>
                
            </>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                 <div> { text } </div>
             
                <div className='mobile-paragraph-container '>
                    <p className='text-paragraph'> { text }</p>
                </div>
               
            </>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <>  
             <div> { text } </div>
               
                <div className='tablet-paragraph-container '>
                    <p className='text-paragraph'> { text }</p>
                </div>
                
            </>
        )
    } */
}

export default ParagraphText;

ParagraphText.prototype = {
    text: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}