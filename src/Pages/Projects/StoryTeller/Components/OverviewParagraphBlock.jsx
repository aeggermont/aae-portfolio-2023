import React from 'react';
import PropTypes from 'prop-types';
import './OverviewParagraphBlock.scss';

function OverviewParagraphBlock ( props ) {
    const title1 = props.title1;
    const title2 = props.title2;
    const paragraph1 = props.paragraph1[0];
    const paragraph2 = props.paragraph2[0];
    const screenDevice = props.screenDevice;


    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <> 
                <div className='storyteller-desktop-paragraph-container'>
                    <div className='storyteller-desktop-content-left'>
                        <div className='storyteller-desktop-paragraph-title'>{title1}</div>
                        <p className='storyteller-desktop-paragraph-text'> {paragraph1}</p>
                    </div>
                </div>

                <div className='storyteller-desktop-paragraph-container'>
                    <div className='storyteller-desktop-content-right'>
                        <div className='storyteller-desktop-paragraph-title'>{title2}</div>
                        <p className='storyteller-desktop-paragraph-text'>{paragraph2}</p>
                    </div>
                </div>
            </>
        )
    } else if ( screenDevice.isTablet ) {

        return (
            <>
                <div className='storyteller-tablet-paragraph-container'>
                    <div className='storyteller-tablet-content'>
                        <div className='storyteller-tablet-paragraph-title'>{title1}</div>
                        <p className='storyteller-tablet-paragraph-text'> {paragraph1}</p>
                    </div>
                </div>

                <div className='storyteller-tablet-paragraph-container'>
                    <div className='storyteller-tablet-content'>
                        <div className='storyteller-tablet-paragraph-title'>{title2}</div>
                        <p className='storyteller-tablet-paragraph-text'> {paragraph2}</p>
                    </div>
                </div>
            </>
        )

    } else if ( screenDevice.isMobile ) {

        return (
            <>
                <div className='storyteller-mobile-paragraph-container'>
                    <div className='storyteller-mobile-content'>
                        <div className='storyteller-mobile-paragraph-title'>{title1}</div>
                        <p className='storyteller-mobile-paragraph-text'> {paragraph1}</p>
                    </div>
                </div>

                <div className='storyteller-mobile-paragraph-container'>
                    <div className='storyteller-mobile-content'>
                        <div className='storyteller-mobile-paragraph-title'>{title2}</div>
                        <p className='storyteller-mobile-paragraph-text'> {paragraph2}</p>
                    </div>
                </div>
            </>
        )
    }

    

}

export default OverviewParagraphBlock;


OverviewParagraphBlock.prototype = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    paragraph1: PropTypes.array,
    paragraph2: PropTypes.array,
    screenDevice: PropTypes.object
}