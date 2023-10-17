import React from 'react';
import PropTypes from 'prop-types';
import './DemoAnimation.scss';

function DemoAnimation(props) {
    const alt =  props.alt;
    const images = props.images;
    const screenDevice = props.screenDevice;
    const title = props.title;
    const subtitle = props.subtitle;

    console.log('>>> screenDevice');
    console.log(screenDevice);


    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <div className='desktop-imageanimation-container'>
                <img
                    className="object-fit_fill"
                    src = { images[1] }
                    alt = { alt }
                    style = {{
                        maxWidth: '1581px',
                        minWidth: '1581px',
                        paddingTop: '100px',
        
                    }} 
                />
                <span className='text-paragraph'>  { title} </span>
            </div>
           
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <div  className='mobile-imageanimation-container'>
                <img
                    src = { images[0] }
                    alt = { alt }
                    style = {{
                        maxWidth: '310px',
                        minWidth: '310px',
                        paddingTop: '50px'
                    }} 
                />
                <span className='text-paragraph'>  { title} </span>
             </div>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <div className='tablet-imageanimation-container'>
                <img  
                    src = { images[2] }
                    alt = { alt }
                    style = {{
                        maxWidth: '582px',
                        minWidth: '582px',
                        paddingTop: '100px'
                    }} 
                />
                <span className='text-paragraph'>  { title} </span>
               
            </div>
            
        )
    }

}

export default DemoAnimation;

DemoAnimation.prototype = {
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}
