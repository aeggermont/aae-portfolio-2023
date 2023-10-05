import React from 'react';
import PropTypes from 'prop-types';
import TitleParagraph from './TitleParagraph';
import BulletPoint from './BulletPoint';
import './BulletPoints.scss';

function BulletPoints(props)  {
    const text = props.text;
    const title = props.title;
    const bulletPoints = props.bulletPoints;
    const screenDevice = props.screenDevice; 

    const bulletPointsRender = bulletPoints.map(
        bulletPoint =>

        <BulletPoint 
            icon={bulletPoint.icon}
            text={bulletPoint.text}
            screenDevice={screenDevice} />
    );

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>  
              { bulletPointsRender }
            </>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                { bulletPointsRender }
            </>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                { bulletPointsRender }
            </>
        )
    }
}

export default BulletPoints;

BulletPoints.prototype = {
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    bulletPoints: PropTypes.array.isRequired,
    screenDevice: PropTypes.object.isRequired
}