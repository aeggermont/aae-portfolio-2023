import React from 'react';
import PropTypes from 'prop-types';
import ParagraphText from './ParagraphText';
import './Persona.scss';

function Persona(props) {
    const images = props.images;
    const screenDevice = props.screenDevice;
    const title = props.title;
    const alt = props.alt;
    const paragraphs = props.paragraphs;

    const paragraphsRender = paragraphs.map(
        paragraph =>
            <ParagraphText 
                text={paragraph}
                screenDevice={screenDevice}
            />
    );

    if ( screenDevice.isDesktopOrLaptop ) {
        return(
            <>
                <div className='persona-desktop-container'>
                    <div className='persona-img'>
                        <img src={images[0]}  alt={alt} />
                        </div>
                    <div  className='persona-content'>
                        <div className='persona-title'> {title }</div>
                        <div> { paragraphsRender } </div>
                    </div>
                </div>
            </>
        );
    } else if ( screenDevice.isTablet ) {
        return(
            <>
               <div className='persona-tablet-container'>
                  
                        <img src={images[1]}  alt={alt} />
                   
                    <div  className='persona-content'>
                        <div className='persona-title'> {title }</div>
                        <div className='persona-description '> { paragraphsRender } </div>
                    </div>
                </div>
            </>
        );
    } else if ( screenDevice.isMobile ) {
        return(
            <>
                <div className='persona-mobile-container'>
                    <div className='persona-title'> {title }</div>
                    <img src={images[2]} width="80px" alt={alt} />
                    <div className='persona-description'> { paragraphsRender } </div>
                </div>
            </>
        );
    }
}

export default Persona;

Persona.prototype = {
    title: PropTypes.string,
    alt: PropTypes.string,
    screenDevice: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired
}