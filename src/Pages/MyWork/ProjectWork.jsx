import React from 'react';
import PropTypes from 'prop-types';
import './ProjectWork.scss';
import fsReference from '../../firebase';
import { useEffect, useState } from 'react';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function ProjectWork(props) {
    const screenDevice = props.screenDevice; 
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {      
        const entriesQuery = query(
            collection(fsReference, 'projects_data'),
            orderBy('index', 'asc')
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

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    if (isLoading) {
        return <p>loading...</p>
    }

    if (hasError) {
        return <p>Has error!</p>
    }

    return (
        <section className='portfolio-header-area'>
            <span  data-aos="fade-right"
                   data-aos-duration="1200"
                   data-aos-delay="500"className='portfolio-main-header'> Portfolio</span>

            <p  data-aos="zoom-in" className='portfolio-main-summary'> The projects I have developed and contributed range from applications development using frameworks like Angular, React JS, NodeJs, and iOS. </p>
            <p  data-aos="zoom-in" className='portfolio-main-summary'> In my design work I employ user centered design methodologies which include Design Thinking, Human Centered Design, and Human Computer Interaction</p>
            

            <div className='portfolio-projects-area'>
                <div className='portfolio-projects-container' >
                {
                    Object.keys(projects).map( project => (
                        <div 
                            className='project'
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="600">
                            <Project info={projects[project].data()}  screenDevice={screenDevice}/>
                        </div>
                    ))
                }
                </div>
               
            </div>
        </section>
    );
}

export default ProjectWork;

ProjectWork.prototype = {
    screenDevice: PropTypes.object.isRequired   
}