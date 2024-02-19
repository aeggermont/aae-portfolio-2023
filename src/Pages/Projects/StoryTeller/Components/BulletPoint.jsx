import React from 'react';
import PropTypes from 'prop-types';
import './BulletPoint.scss';
import BulletPointDesktop from '../Images/BulletPoint-Desktop.png';
import BulletPointLgMd from '../Images/BulletPoint-LgMd.png';
import BulletPointSmSx from '../Images/BulletPoint-SmSx.png';

function BulletPoint(props)  {
    const text = props.text;
    const icon = props.icon;
    const screenDevice = props.screenDevice; 

    if ( screenDevice.laptop ) {
        return (
            <>  
                <div className="storyteller-desktop-bulletPoint">
                    <div className='bullet-point'>
                        <img
                            src = { BulletPointDesktop }
                            style = {{
                                        width: "18px",
                                        height: "18px",
                                        opacity: "95%"
                                    }} />
                    </div>
                    <p className='text-paragraph'> { text }</p>    
                </div>              
            </>
        )

        } else if (  screenDevice.lg || screenDevice.md ) {
            return (
                <>
                    <div className="storyteller-lgmd-bulletPoint">
                        <div className='bullet-point'>
                            <img
                                src = { BulletPointLgMd }
                                style = {{
                                            width: "12px",
                                            height: "12px",
                                            
                                        }} />
                        </div>
                        <p className='text-paragraph'> { text }</p>    
                    </div>              
                </>
            )
        } else if ( screenDevice.xs || screenDevice.sm) {
                return (
                    <>
                        <div className="storyteller-xssm-bulletPoint">
                            <div className='bullet-point'>
                                <img
                                    src = { BulletPointSmSx }
                                    style = {{
                                                width: "10px",
                                                height: "10px",
                                            
                                            }} />  
                            </div> 
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