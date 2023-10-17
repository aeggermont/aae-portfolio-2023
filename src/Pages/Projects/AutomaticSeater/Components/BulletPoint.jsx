import React from 'react';
import PropTypes from 'prop-types';
import './BulletPoint.scss';

function BulletPoint(props)  {
    const text = props.text;
    const icon = props.icon;
    const screenDevice = props.screenDevice; 

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>  
                <div className="bulletPoint-container-desktop">
                    <div className='bullet-points'>
                        <img
                            src = { icon }
                            style = {{
                                        width: "26px",
                                        height: "24px",
                                    
                                    }} />
                    
                        <p className='text-paragraph'> { text }</p>    
                    </div>
                </div>              
            </>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                <div className="bulletPoint-container-mobile">
                    <img
                        src = { icon }
                        style = {{
                                    width: "26px",
                                    height: "24px",
                                   
                                }} />
                  
                    <p className='text-paragraph'> { text }</p>
                    
                </div>              
            </>
        )
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                <div className="bulletPoint-container-tablet">
                    <img
                        src = { icon }
                        style = {{
                                    width: "26px",
                                    height: "24px",
                                   
                                }} />
                  
                    <p className='text-paragraph'> { text }</p>    
                </div>              
            </>
        )
    }
}

export default BulletPoint;

BulletPoint.prototype = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
    screenDevice: PropTypes.object.isRequired
}