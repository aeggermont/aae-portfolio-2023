import React from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.scss';

function SectionTitle(props) {
    const title = props.title;
    const screenDevice = props.screenDevice;

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>  
                <div className='desktop-section-title'>{ title }</div>
            </>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                <div className='mobile-section-title'>{ title }</div>
            </>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                <div className='mobile-section-title'>{ title }</div>
            </>
        )
    } 
}

export default SectionTitle;

SectionTitle.prototype = {
    title: PropTypes.string.isRequired,
    screenDevice: PropTypes.object
}
