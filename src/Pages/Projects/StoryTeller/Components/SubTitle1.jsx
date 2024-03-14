import React from 'react';
import PropTypes from 'prop-types';
import './SubTitle1.scss';

function SubTitle1(props) {
    const subTitle = props.subTitle;
    const screenDevice = props.screenDevice; 

    if ( screenDevice.laptop ) {
        return (
            <>  
                <div className='desktop-subtitle1-container'>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } else if ( screenDevice.xs || screenDevice.sm ) {
        return (
            <>
                <div className='xssm-subtitle1-container'>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } else if (screenDevice.lg || screenDevice.md) {
        return (
            <>
                <div className='lgmd-subtitle1-container'>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } 
}

export default SubTitle1;

SubTitle1.prototype = {
    subTitle: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}