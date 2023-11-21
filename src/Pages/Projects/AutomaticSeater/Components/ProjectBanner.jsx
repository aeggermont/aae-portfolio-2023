import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectBanner.scss';
import './ProjectBanner.scss';

function ProjectBanner(props) {
    const title = props.title;
    const subTitle = props.subtitle;
    const alt = props.alt;
    const images = props.images;
    const screenDevice = props.screenDevice;

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <div className='desktop-banner-container'>
                <img
                    className="object-fit_fill"
                    src = { images[1] }
                    alt = { alt }
                    style = {{
                        maxWidth: '2600px',
                        minWidth: '2000px',
                        paddingTop: '0px',
        
                    }} 
                />
                <div className='header'>{title}</div>
                <div className='sub-header'>{title}</div>  
          </div>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <div  className='mobile-banner-container'>
                <picture className='picture' >
                    <source media="(min-width: 0px)" srcSet={images[0]} />
                    <img
                        className='image' 
                        src = { images[0] }
                        alt = { alt }
                        style = {{
                            width: '100%'
                        }} 
                    />
                </picture>
                <div className='header'>{title}</div>
                <div className='sub-header'>{title}</div>     
             </div>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <div  className='tablet-banner-container'>
                <picture className='picture' >
                    <source media="(min-width: 0px)" srcSet={images[2]} />
                    <img
                        className='image' 
                        src = { images[2] }
                        alt = { alt }
                        style = {{
                            width: '100%'
                        }} 
                    />
                </picture>
                <div className='header'>{title}</div>
                <div className='sub-header'>{title}</div>     
             </div>
        )
    }
}

export default ProjectBanner;

ProjectBanner.prototype = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    screenDevice:  PropTypes.object.isRequired   
}