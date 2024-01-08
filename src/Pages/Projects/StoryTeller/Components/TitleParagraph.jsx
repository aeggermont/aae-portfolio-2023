import React from 'react';
import PropTypes from 'prop-types';
import './TitleParagraph.scss';

function TitleParagraph(props)  {
    const title = props.title;
    const screenDevice = props.screenDevice; 


    if ( screenDevice.laptop ) {
        return (
            <>  
                <div className='storyteller-laptop-paragraph-title'>
                    <div className='title-paragraph'> { title }</div>
                </div>
            </>
        )
    } else if ( screenDevice.lg || screenDevice.md ) {
        return (
            <>
                <div className='storyteller-lgmd-paragraph-title'>
                    <div className='title-paragraph'> { title }</div>
                </div>
            </>
        )
    } else if (  screenDevice.xs || screenDevice.sm ) {
        return (
            <>
                <div className='storyteller-xsxm-paragraph-title'>
                    <div className='title-paragraph'> { title }</div>
                </div>
            </>
        )
    } 
}

export default TitleParagraph;

TitleParagraph.prototype = {
    title: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}