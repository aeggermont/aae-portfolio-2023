import React from 'react';
import PropTypes from 'prop-types';
import TitleParagraph from './TitleParagraph';
import BulletPoint from './BulletPoint';
import './BulletPoints.scss';
import SubTitle from './SubTitle';


function BulletPoints(props)  {
    const text = props.text;
    const title = props.title;
    const subTitle = props.subTitle;
    const bulletPoints = props.bulletPoints;
    const screenDevice = props.screenDevice; 

    /*
    const titleRender = (title) =>
        title === undefined ? '' : <div className=''> {title} </div>;
    */

    const subTitleRender = (subTitle) =>
        subTitle === undefined ? '' : <SubTitle screenDevice={screenDevice} subTitle={subTitle} />;
    
    
    
    const bulletPointsRender = bulletPoints.map(
        (bulletPoint, index) =>
            <BulletPoint
                key={index}
                icon={bulletPoint.icon}
                text={bulletPoint.text}
                screenDevice={screenDevice} />
    );


    if ( screenDevice.laptop ) {
        return (
            <div>  
              { subTitleRender(subTitle) }
              { bulletPointsRender }
            </div>
        )
    } else if ( screenDevice.xs || screenDevice.sm ) {
        return (
            <div>
                { subTitleRender(subTitle) }
                { bulletPointsRender }
            </div>
        )
    } else if (  screenDevice.lg || screenDevice.md ) {
        return (
            <div>
                { subTitleRender(subTitle) }
                { bulletPointsRender }
            </div>
        )
    }
}

export default BulletPoints;

BulletPoints.prototype = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    text: PropTypes.string,
    bulletPoints: PropTypes.array.isRequired,
    screenDevice: PropTypes.object.isRequired
}