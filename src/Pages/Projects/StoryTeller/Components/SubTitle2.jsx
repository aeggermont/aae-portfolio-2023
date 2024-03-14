import React from 'react';
import PropTypes from 'prop-types';
import './SubTitle2.scss';

function SubTitle2(props) {
    const subTitle = props.subTitle;
    const screenDevice = props.screenDevice; 

    if ( screenDevice.laptop ) {
        return (
            <>  
                <div className='desktop-subtitle2-container'>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } else if ( screenDevice.xs || screenDevice.sm ) {
        return (
            <>
                <div className='xssm-subtitle2-container'>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } else if (screenDevice.lg || screenDevice.md) {
        return (
            <>
                <div className='lgmd-subtitle2-container'>
                    <div className='subtitle-paragraph'> { subTitle }</div>
                </div>
            </>
        )
    } 
}

export default SubTitle2;

SubTitle2.prototype = {
    subTitle: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}