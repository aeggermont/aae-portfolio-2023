import React from 'react';
import './MainProjects.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Paper, Button } from '@mui/material'
import fsReference from '../../../firebase';
import LatestProject from './LatestProject';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc, getDocs } from "firebase/firestore";;


function MainProjectsSection(props) {
    const screenDevice = props.screenDevice; 
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    const cardDimensions = function() { 
        let cardDimensions = {};
        if ( screenDevice.desktop ) {
            cardDimensions = {
                width: '100px',
                height: '50px',
                isPortraitScr: false
            };
        } else if ( screenDevice.lg || screenDevice.md ) {
            cardDimensions = {
                width: '100%',
                height: '100%',
                isPortraitScr: false
            };
    
        } else if ( screenDevice.sm || screenDevice.xs ) {
            cardDimensions = {
                width: '100%',
                height: '100%',
                isPortraitScr: false
            };
        }

        return cardDimensions;
    };

    useEffect(() => {      
        const entriesQuery = query(
            collection(fsReference, 'projects_data'),
            where("latestProject", "==", true),
        );

        const unsubscribe = onSnapshot(
            entriesQuery,
            snapshot => {
                setProjects(snapshot.docs);
                setIsLoading(false);
            },
            error => {
                console.log(error);
                setIsLoading(false);
                setHasError(true);
            }
        )

        return () => unsubscribe();    
    },[]);


    if ( screenDevice.xs || screenDevice.sm) {
        return(
            <div className='latest-projects-section'>
                <div className='section-title'>
                    <span className='section-title-label'>
                        Latest Projects
                    </span>
                </div>
               
               <div className='carousel-container'>
                    <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            centerMode={false}
                            responsive={responsive}
                            infinite={false}
                            autoPlay={false}
                            arrows={false}
                            focusOnSelect={true}
                            autoPlaySpeed={5000}
                            keyBoardControl={true}
                            renderDotsOutside={false}
                            customTransition="all .5"
                            partialVisible={false}
                            transitionDuration={2000}
                            rewind={true}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={[]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            >
                            {
                                Object.keys(projects).map( project => (
                                    <div className='project'>
                                        <LatestProject
                                            title={projects[project].data().title}
                                            description={projects[project].data().description}
                                            thumbnailImg={projects[project].data().thumbnailImg}
                                            dimensions={cardDimensions}
                                        />
                                    </div>
                                ))
                            }
                    </Carousel>
               </div>
            </div>
        );
    } else if ( screenDevice.md || screenDevice.lg) {

        return(
            <section className='container'>
                <div className='latest-projects-section'>
                    <div className='section-title'>
                        <span className='section-title-label'>
                            Latest Projects
                        </span>
                    </div>
                
                <div className='carousel-container'>
                        <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                infinite={false}
                                autoPlay={false}
                                arrows={true}
                                autoPlaySpeed={5000}
                                keyBoardControl={true}
                                renderDotsOutside={false}
                                customTransition="all .5"
                                partialVisible={false}
                                transitionDuration={1000}
                                rewind={true}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={[]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                                >
                                {
                                    Object.keys(projects).map( project => (
                                        <div className='project'>
                                            <LatestProject
                                                title={projects[project].data().title}
                                                description={projects[project].data().description}
                                                thumbnailImg={projects[project].data().thumbnailImg}
                                                dimensions={cardDimensions}
                                            />
                                        </div>
                                    ))
                                }
                        </Carousel>
                </div>
                </div>
            </section>
        );
    } else if (  screenDevice.desktop ) {
        return (
            <section className='container'>
                <div className='latest-projects-section'>
                    <div className='row'>
                        <div className='section-title'>
                            <span className='section-title-label'>
                                Latest Projects
                            </span>
                        </div>
                    </div>
                    <div className='row'>
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 4,
                                paddingTop: '1rem',
                                alignContent: 'flex-start',
                                justifyContent: 'center',
    
                            }}>
                            {
                               Object.keys(projects).map( project => (
                                    <div className='project'>
                                        <LatestProject
                                            title={projects[project].data().title}
                                            description={projects[project].data().description}
                                            thumbnailImg={projects[project].data().thumbnailImg}
                                            dimensions={cardDimensions}
                                        />
                                    </div>
                                ))
                            }
                        </Box>
                    </div>
                </div>
            </section> 
        );
    }
}

export default MainProjectsSection;

MainProjectsSection.prototype = {
    screenDevice: PropTypes.object.isRequired
}