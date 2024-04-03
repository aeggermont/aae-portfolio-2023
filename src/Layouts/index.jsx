import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/Footer/Footer';
import { useMediaQuery } from 'react-responsive';
function Index(props) {

    const xs = useMediaQuery({ query: '(max-width: 767px)' });
    const sm = useMediaQuery({ query: 'only screen and (min-width: 576px) and (max-width: 767px)' });
    const md = useMediaQuery({ query: 'only screen and (min-width: 768px) and (max-width: 991px)' });
    const lg = useMediaQuery({ query: 'only screen and (min-width: 992px) and (max-width: 1200px)' });
    const desktop = useMediaQuery({ query: 'only screen and (min-width: 1200px)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

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
        <>
            
            <Header/>
            {props.children} 
            
            <Footer  screenDevice={screenDevice} /> 
            
        </>
    )
}

export default Index;