import React from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import './AnimationCrowds.scss';
import { Parallax } from 'react-scroll-parallax';
import { useParallax } from "react-scroll-parallax";
import { WidthFull } from '@mui/icons-material';


function AnimationCrowds() {
    
    const crowds = useParallax({
        scale: [.9, 1, "easeInQuad"],
        speed: -10
    });

    const castle = useParallax({
        scale: [.8, 1, "easeInQuad"],
    });

    const bannerDesc = useParallax({
        scale: [.8, 1, "easeInQuad"],
    });

    return (
        <>
            <div className='component_container'>
                <div className='castle-position'>
                    <img
                        ref={castle.ref}
                        style = {{
                            maxWidth: '80%',
                            minWidth: '80%',
                            paddingTop: '1px',
                        }}
                        src="/images/projects/storyteller/castle.png"
                    />

                </div>
                        
               <div  className='project-description'>
                    <p  ref={bannerDesc.ref} className='project-description-paragraph'> Exploring the use of
                        computer vision, machine learning and Augmented Reality at
                        Disney theme parks.</p>
               </div>
                <div className="crowds-position">
                    <img
                        ref={crowds.ref}
                        style = {{
                            maxWidth: '30%',
                            minWidth: '30%',
                            paddingTop: '1px',
                        }}
                        src="/images/projects/storyteller/crowds-in-park-main.png"
                    />
                </div>
            </div>
        </>
    )
}

export default AnimationCrowds;