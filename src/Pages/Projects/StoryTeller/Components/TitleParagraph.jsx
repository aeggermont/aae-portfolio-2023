import React from 'react';
import PropTypes from 'prop-types';
import './TitleParagraph.scss';

function TitleParagraph(props)  {
    const title = props.title;
    const screenDevice = props.screenDevice; 


    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>  
                <div className='storyteller-desktop-paragraph-titlecontainer'>
                    <div className='title-paragraph'> { title }</div>
                </div>
            </>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                <div className='storyteller-tablet-paragraph-titlecontainer'>
                    <div className='title-paragraph'> { title }</div>
                </div>
            </>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                <div className='storyteller-mobile-paragraph-titlecontainer'>
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