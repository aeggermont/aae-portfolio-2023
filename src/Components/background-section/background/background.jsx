import React, { useState, Component }  from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './background.scss';
import UXUIDesignIcon from '../../../assets/images/UXUIDesign-Icon.png'

/*
    Useful links: https://mui.com/material-ui/api/typography/
                  https://mui.com/system/getting-started/the-sx-prop/
*/

const styles = {
    fullHeightCard: {
        height: "100%",
        },
    }

export default function BackgroundCard(props) {

    const title = props.info.title;
    const img = props.info.img;
    const dimensions = props.dimensions;

    console.log('<<< BackgroundCard ');
    console.log(dimensions.width);

    return (
        <Card
            className={styles.fullHeightCard}
            sx={{ 
                width: dimensions.width, 
                height: dimensions.height,
            
                '&:hover': {
                    backgroundColor: 'primary.secondary',
                    opacity: [0.9, 0.8, 0.7],
                }, 
            }}
            raised='true'
            boxShadow={1}
            
            >
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={img}
                    sx={{  
                        padding: "1em 1em 1em 1em", 
                        objectFit: "contain",
                        alignContent: "center",
                        width: { xs: "80px", sm: "90px", md: "110px", lg: "120px"},
                        height: { xs: "80px", sm: "90px", md: "110px", lg: "120px" },
                    }}
                    alt="My skills in UX / UI Engineering"
                />
                <CardContent>
                    <Typography
                        align='center'
                        gutterBottom
                        variant="h6"
                        component="div"> {title} </Typography>
                    
                </CardContent>
            </CardActionArea>
     
        </Card>
    )

}

BackgroundCard.prototype = {
    title : PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    dimensions: PropTypes.object.isRequired
}