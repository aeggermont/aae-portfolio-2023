import React from 'react';
import PropTypes from 'prop-types';
import './ParagraphText.scss';

function ParagraphText(props)  {
    const text = props.text;
    const screenDevice = props.screenDevice; 


    if ( screenDevice.laptop ) {
        return (
            <>            
                <div className='storyteller-laptop-paragraph-text'>
                    <p className='text-paragraph'> { text }</p>
                </div> 
            </>
        )
    } else if ( screenDevice.lg || screenDevice.md ) {
        return (
            <>          
                <div className='storyteller-lgmd-paragraph-text'>
                    <p className='text-paragraph'> { text }</p>
                </div>
            </>
        )
    } else if ( screenDevice.xs || screenDevice.sm ) {
        return (
            <>     
                <div className='storyteller-xsxm-paragraph-text'>
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