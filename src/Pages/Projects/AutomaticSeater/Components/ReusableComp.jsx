import React from 'react';
import PropTypes from 'prop-types';
import ParagraphText from './ParagraphText';
import './ReusableComp.scss';

function ReusableComp(props) {
    const images = props.images;
    const screenDevice = props.screenDevice;
    const title = props.title;
    const alt = props.alt;
    const paragraphs = props.paragraphs;
    const backgroundColor = props.backgroundColor;
    const widthSize = props.widthSize;

    const paragraphsRender = paragraphs.map(
        (paragraph, index) =>
            <ParagraphText
                key={index}
                text={paragraph}
                screenDevice={screenDevice}
            />
    );

    const compStyles = {
        backgroundColor : {
            backgroundColor: backgroundColor
        },
        imageDimensions : {
            width: widthSize
        }
    }

    console.log('>>> conmp Styles >>>');
    console.log(widthSize);
    console.log('====================');

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>
                <div style={compStyles.backgroundColor} className='desktop-reusablecomp-container'>
                    <div className='reusablecomp-title'> { title }</div>
                    <div className='reusablecomp-content'>
                        <div className='reusablecomp-content-img'>  
                            <img
                                src = { images[0] }
                                style = {compStyles.imageDimensions}/>
                        </div>
                        <div className='text-description'> { paragraphsRender }  </div>
                    </div>
    
                </div>
            </>
        );
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                 <div style={compStyles.backgroundColor} className='tablet-reusablecomp-container'>
                    <div className='reusablecomp-title'> { title }</div>
                    <div className='reusablecomp-content'>
                        <div className='reusablecomp-content-img'>  
                            <img
                                src = { images[1] }
                                style = {compStyles.imageDimensions}/>
                        </div>
                        <div className='text-description'> { paragraphsRender }  </div>
                    </div>
    
                </div>
            </>
        );
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                 <div style={compStyles.backgroundColor} className='mobile-reusablecomp-container'>
                    <div className='reusablecomp-title'> { title }</div>
                  
                   
                        <img
                            src = { images[2] }
                            style = {compStyles.imageDimensions}/>

                    <div className='text-description'> { paragraphsRender }  </div>
                </div>                
            </>
        );
    }
}

export default ReusableComp;

ReusableComp.prototype = {
    images: PropTypes.array.isRequired,
    screenDevice: PropTypes.object.isRequired,
    backgroundColor: PropTypes.string,
    widthSize: PropTypes.string.isRequired,
    title: PropTypes.string,
    alt: PropTypes.string,
    paragraphs: PropTypes.array
}
