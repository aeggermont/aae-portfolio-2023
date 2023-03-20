import React from 'react';
import StickyBoxPanel from '../../../sticky-box-panel/StickyBoxPanel';
import ProjectRecommendations from '../../../project-recommendations/ProjectRecommendations';
import fsReference from '../../../../firebase';
import { useEffect, useState } from 'react';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";

import '../projects.scss';

function Project1()  {
    const [projectData, setProjectData] = useState([]);
    const [headers, setHeaders] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const docRef = doc(fsReference, 'projects_data', 'project_1');
        getDoc(docRef)
            .then((doc) => {
                setProjectData(doc.data());
                setIsLoading(false);
            })
            .catch(() => setError('error getting document'));
    },[]);

    if (isLoading) {
        return <p>loading...</p>
    }

    if (hasError) {
        return <p>Has error!</p>
    }

    console.log('>>> Project Data <<<');
    console.log(projectData);

    return (
        <div className="container">
            <div className='row'>
                <div className="col-11">
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                    <h1> Project 1</h1>
                </div>
                <div className="col-1">
                    <StickyBoxPanel />       
                </div>
            </div>
            <div className='row'>
                <ProjectRecommendations />
            </div>
        </div>
    )
}

export default Project1;