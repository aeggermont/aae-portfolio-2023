import React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';
import { useMediaQuery } from "react-responsive";

/* Useful Links
    https://codesandbox.io/s/landingpage-6v0e5?file=/src/Pages/LandingPage/LandingPage.js:893-942
    https://www.youtube.com/watch?v=Oo4ziTddOxs
    https://www.positronx.io/react-get-dynamic-window-height-width-using-react-hooks/
*/
const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  }));

  export default function ResponsiveTests() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });

    //const isLaptop = useMediaQuery({ query: '(min-width: 1562px) and (min-resolution: 2dppx)'});
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    const [screenSize, getDimension] = useState({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });

    const setDimension = () => {
      getDimension({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
    }

    useEffect(() => {
      window.addEventListener('resize', setDimension);
      
      return(() => {
          window.removeEventListener('resize', setDimension);
      })
    }, [screenSize]);




    return (
        <div>
            <h1>Device Test!$$</h1>
            <div>
              <ul>
                <li>Width: <strong>{screenSize.dynamicWidth}</strong></li>
                <li>Height: <strong>{screenSize.dynamicHeight}</strong></li>
              </ul>    
            </div>
            {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
            {isBigScreen && <p>You  have a huge screen</p>}
            {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
            <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
            {isRetina && <p>You are retina</p>}

            <Typography>down(md): red</Typography>
            <Typography>up(md): blue</Typography>
            <Typography>up(lg): green</Typography>
        </div>
    );
  }