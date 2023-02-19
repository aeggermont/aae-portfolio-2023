import React from 'react';
import Layout from "../Layouts";
import LandingPage from "../Components/landing_page/landing_page";
import BackgroundSection from "../Components/background-section/background-section";
function Home() {
    return (  
        <Layout>
            <LandingPage/>
            <BackgroundSection />
        </Layout>
    )
}

export default Home;
