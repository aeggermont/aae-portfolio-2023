import React from 'react';
import PropTypes from 'prop-types';
import './TitleParagraph.scss';

const titleParagraphStyle = {
    fontFamily: 'poppins',
    fontSize: '20px',
    fontWeight: '600',
    color: '#1D2D92',
    paddingTop: '20px',
    paddingBottom: '10px',
    textAlign: 'center'  
}

function TitleParagraph(props)  {
    const title = props.title;
    const screenDevice = props.screenDevice; 


    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>  
                <div className='desktop-title-container'>
                    <div className='title-paragraph'> { title }</div>
                </div>
            </>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                <div className='mobile-title-container '>
                    <div className='title-paragraph'> { title }</div>
                </div>
            </>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                <div className='tablet-title-container '>
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