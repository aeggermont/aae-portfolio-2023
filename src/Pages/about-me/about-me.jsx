import React from 'react';
import Layout from '../../Layouts';
import Biography from './biography';
import Skills from './skills';

function AboutMe() {
    return (
        <Layout>
            <Biography/>
            <Skills />
        </Layout>
    )
}

export default AboutMe;
