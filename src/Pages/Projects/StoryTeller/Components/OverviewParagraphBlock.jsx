import React from 'react';
import PropTypes from 'prop-types';
import './OverviewParagraphBlock.scss';
import WaitingPeopleDesktop from '../Images/WaitingPeople-DesktopLg.png';
import WaitingPeopleLgMd from '../Images/WaitingPeople-LgMd.png';
import WaitingPeopleSMSX from '../Images/WaitingPeople-SMSX.png';

function OverviewParagraphBlock ( props ) {
    const title1 = props.title1;
    const title2 = props.title2;
    const title3 = props.title3;
    const paragraph1 = props.paragraph1[0];
    const paragraph2 = props.paragraph2[0];
    const paragraph3 = props.paragraph3[0];
    const screenDevice = props.screenDevice;


    if (  screenDevice.laptop) {
        return (
            <div style={{  backgroundImage: `url(${WaitingPeopleDesktop})`, 
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center center',
                           backgroundSize: 'auto'}}> 
                <div className='storyteller-laptoplg-paragraph-container'>
                    <div className='storyteller-laptoplg-content-left'>
                        <div className='storyteller-laptoplg-paragraph-title'>{title1}</div>
                        <p className='storyteller-laptoplg-paragraph-text'> {paragraph1}</p>
                    </div>
                </div>

                <div className='storyteller-laptoplg-paragraph-container'>
                    <div className='storyteller-laptoplg-content-right'>
                        <div className='storyteller-laptoplg-paragraph-title'>{title2}</div>
                        <p className='storyteller-laptoplg-paragraph-text'>{paragraph2}</p>
                    </div>
                </div>
                <div className='storyteller-laptoplg-paragraph-container'>
                    <div className='storyteller-laptoplg-content-left'>
                        <div className='storyteller-laptoplg-paragraph-title'>{title3}</div>
                        <p className='storyteller-laptoplg-paragraph-text'> {paragraph3}</p>
                    </div>
                </div>
            </div>
        )
    } else if ( screenDevice.lg || screenDevice.md ) {

        return (
            < div style={{  backgroundImage: `url(${WaitingPeopleLgMd})`,
                            backgroundRepeat: 'no-repeat'
                            }}> 
                <div className='storyteller-mdlg-paragraph-container'>
                    <div className='storyteller-mdlg-content'>
                        <div className='storyteller-mdlg-paragraph-title'>{title1}</div>
                        <p className='storyteller-md-paragraph-text'> {paragraph1}</p>
                    </div>
                </div>

                <div className='storyteller-mdlg-paragraph-container'>
                    <div className='storyteller-mdlg-content'>
                        <div className='storyteller-mdlg-paragraph-title'>{title2}</div>
                        <p className='storyteller-mdlg-paragraph-text'> {paragraph2}</p>
                    </div>
                </div>

                <div className='storyteller-mdlg-paragraph-container'>
                    <div className='storyteller-mdlg-content'>
                        <div className='storyteller-mdlg-paragraph-title'>{title3}</div>
                        <p className='storyteller-mdlg-paragraph-text'> {paragraph3}</p>
                    </div>
                </div>
            </div>
        )

    } else if (  screenDevice.xs || screenDevice.sm ) {

        return (
            < div style={{  backgroundImage: `url(${WaitingPeopleSMSX})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'auto'}}> 
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

                <div className='storyteller-mobile-paragraph-container'>
                    <div className='storyteller-mobile-content'>
                        <div className='storyteller-mobile-paragraph-title'>{title3}</div>
                        <p className='storyteller-mobile-paragraph-text'> {paragraph3}</p>
                    </div>
                </div>
            </div>
        )
    }

    

}

export default OverviewParagraphBlock;


OverviewParagraphBlock.prototype = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    paragraph1: PropTypes.array,
    paragraph2: PropTypes.array,
    paragraph3: PropTypes.array,
    screenDevice: PropTypes.object
}