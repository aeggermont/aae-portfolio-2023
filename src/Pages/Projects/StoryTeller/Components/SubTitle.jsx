import React from 'react';
import PropTypes from 'prop-types';
import './SubTitle.scss';

function SubTitle(props) {
    const subTitle = props.subTitle;
    const screenDevice = props.screenDevice; 

    if ( screenDevice.laptop ) {
        return (
            <>  
                <div className='desktop-subtitle-container'>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } else if ( screenDevice.xs || screenDevice.sm ) {
        return (
            <>
                <div className='xssm-subtitle-container'>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } else if (screenDevice.lg || screenDevice.md) {
        return (
            <>
                <div className='lgmd-subtitle-container'>
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