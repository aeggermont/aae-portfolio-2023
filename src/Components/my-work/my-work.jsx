import React from 'react';
import Layout from '../../Layouts';
import Portfolio from './portfolio';
import fsReference from '../../firebase';
import { useEffect, useState } from 'react';
import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";;


/*
 Portfolio
 Papers
*/

function MyWork() {
    const [projects, setProjects] = useState([]);
    const [headers, setHeaders] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    console.log('>>> About to get list of projects <<<');

    useEffect(() => {
        const docRef = doc(fsReference, 'projects_page', 'projects');
        getDoc(docRef)
            .then((doc) => {
                setProjects(doc.data());
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
    

    return (
        <Layout>
            <Portfolio/>
        </Layout>
    );
}

export default MyWork;