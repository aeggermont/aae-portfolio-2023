import React from 'react';
import '../projects.scss';
import StickyBoxPanel from '../../../sticky-box-panel/StickyBoxPanel';
import ReactImageMagnify from 'react-image-magnify';
import ActivityTheoryR3XMobile from './Images/ActivityTheoryR3X-Mobile.png';
import ActivityTheoryR3XMobileLarge from './Images/ActivityTheoryR3X-Mobile-Large.png';

function Project2()  {
    return (
        <div className="container">
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: ActivityTheoryR3XMobile
                },
                largeImage: {
                    enlargedImagePosition: 'over',
                    src: ActivityTheoryR3XMobileLarge,
                    width: 600,
                    height: 351
                }
                
            }} />
        </div>               
    )
}

export default Project2;