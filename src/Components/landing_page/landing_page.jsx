// import { render } from '@testing-library/react';
import React from 'react';
import shapeImg from "../../assets/shapes/shape_1.png";
import bannerPhoto from "../../assets/images/AE-Front-Page-Photo.png";
import "./landing_page.scss";
import fsReference from '../../firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";;


function LandingPage() {
    const [entries, setEntries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const entriesQuery = query(
            collection(fsReference, 'main_page')
        )

        const unsubscribe = onSnapshot(
            entriesQuery,
            snapshot => {
                setEntries(snapshot.docs);
                setIsLoading(false);
            },
            error => {
                console.log(error);
                setIsLoading(false);
                setHasError(true);
            }
        )

        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <p>loading...</p>
    }

    if (hasError) {
        return <p>Has error!</p>
    }

    const header1 = entries[0].data()['header_1'];  
    const header2 = entries[1].data()['header_2'];  
    const header3 = entries[2].data()['header_3'];

    return(
        <section className="main-baner-area">
           
                <div className="aae-banner">
                    <div class="banner-photo">
                        <img src={bannerPhoto} width="100%" id="banner-image-dimension" alt="Antonio Aranda Eggermont" />   
                    </div>
                    
                    <div class="heading-info">
                        <span className="heading-primary-intro"> { header1 } </span>
                        <span className="heading-primary-main"> { header2 }</span>
                        <span className="heading-primary-sub"> { header3 }</span>
                    
                        <div class="contact-area">
                            <span> Linkedin </span>
                        </div>
                    </div>
                    
                   
                </div>
                <div className="sphere-shape"></div> 
            
            
        </section>
 
    );
}

export default LandingPage;
