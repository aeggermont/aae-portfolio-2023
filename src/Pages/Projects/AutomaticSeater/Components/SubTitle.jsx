import React from 'react';
import PropTypes from 'prop-types';
import './SubTitle.scss';

function SubTitle(props) {
    const subTitle = props.subTitle;
    const screenDevice = props.screenDevice; 

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>  
                <div className='desktop-subtitle-container'>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                <div className='mobile-subtitle-container '>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                <div className='tablet-subtitle-container '>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } 
}

export default SubTitle;

SubTitle.prototype = {
    subTitle: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}