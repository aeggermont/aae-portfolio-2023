import React from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import './ProjectBanner.scss';

function ProjectBanner() {

    return (
        <>
            <div className='container-body'>

                    <ParallaxBanner
                        layers={[
                            { image: "/images/projects/storyteller/clouds-layer-4.png", speed: 60 },
                            { image: "/images/projects/storyteller/clouds-layer-2.png", speed: 10 },
                            { image: "/images/projects/storyteller/clouds-layer-3.png", speed: 5 },
                            { image: "/images/projects/storyteller/clouds-layer-1.png", speed: -10 },
                           
                        ]}
                        className="test-class"
                    >
                        <div>
                            <h1 className="banner_title">Walt Disney World</h1>
                            <h1 className="banner_subtitle">Augmented Reality Magic Tours</h1>
                            <p className='banner_description'> 
                                A graduate research project at University of Washington
                                Human Centered Design & Engineering.
                            </p>
                        </div>
                    </ParallaxBanner>
            </div>
          
        </>
    )
}

export default ProjectBanner;