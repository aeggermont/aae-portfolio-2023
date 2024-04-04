import React from 'react';
import Layout from '../../Layouts';
import Profile from './Profile';
import { useMediaQuery } from 'react-responsive';

function AboutMe() {
    const xs = useMediaQuery({ query: '(max-width: 767px)' });
    const sm = useMediaQuery({ query: 'only screen and (min-width: 576px) and (max-width: 767px)' });
    const md = useMediaQuery({ query: 'only screen and (min-width: 768px) and (max-width: 991px)' });
    const lg = useMediaQuery({ query: 'only screen and (min-width: 992px) and (max-width: 1200px)' });
    const desktop = useMediaQuery({ query: 'only screen and (min-width: 1200px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const screenDevice = {
        isPortrait: isPortrait,
        isRetina: isRetina,
        sm: sm,
        xs: xs,
        md: md,
        lg: lg,
        desktop: desktop
    };

    return (
        <Layout>
            <Profile screenDevice={screenDevice} />
        </Layout>
    )
}

export default AboutMe;