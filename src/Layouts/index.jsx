import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/Footer/Footer';
function Index(props) {
    return (
        <>
            
            <Header/>
            {props.children} 
            
            <Footer/> 
            
        </>
    )
}

export default Index;