import React from 'react';
import Layout from "../Layouts";
import LandingPage from "../Components/landing_page/landing_page";

function Home() {
    console.log('>>>> Home >>>');
    return (  
        <Layout>
            <LandingPage/>    
        </Layout>
    )
}

export default Home;
