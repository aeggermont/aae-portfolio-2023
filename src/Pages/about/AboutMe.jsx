import React from 'react';
import Layout from '../../Layouts';
import Profile from './Profile';
import Biography from './biography';
//import Skills from './Skills';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

function AboutMe() {
    const xs = useMediaQuery({ query: '(max-width: 767px)' });
    const sm = useMediaQuery({ query: 'only screen and (min-width: 576px) and (max-width: 767px)' });
    const md = useMediaQuery({ query: 'only screen and (min-width: 768px) and (max-width: 991px)' });
    const lg = useMediaQuery({ query: 'only screen and (min-width: 992px) and (max-width: 1200px)' });
    const laptop = useMediaQuery({ query: 'only screen and (min-width: 1200px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const screenDevice = {
        isPortrait: isPortrait,
        isRetina: isRetina,
        sm: sm,
        xs: xs,
        md: md,
        lg: lg,
        laptop: laptop
    };

    return (
        <Layout>
            <Profile screenDevice={screenDevice} />
        </Layout>
    )
}

export default AboutMe;

/*
AboutMe.prototype = {
    screenDevice: PropTypes.object.isRequired
}*/