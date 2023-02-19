import React, { useState, Component }  from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

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
    console.log('<<< BackgroundCard ');
    console.log(props);

    return (
        <Card
            className={styles.fullHeightCard}
            sx={{ 
                maxWidth: '230px', 
                maxHeight: '314px', 
                minWidth: '150px',
                '&:hover': {
                    // backgroundColor: 'primary.secondary',
                    // opacity: [0.9, 0.8, 0.7],
                }, 
            }}

            xs={12} sm={12} md={4} lg={4}
            raised='true'
            boxShadow={1}
            
            >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={'91px'}
                    width={'91px'}
                    image={img}
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
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
            <CardActions>
                <Button size="small" color="primary"> Learn More </Button>
            </CardActions>
        </Card>
    )

}

BackgroundCard.prototype = {
    title : PropTypes.string.isRequired,
    img: PropTypes.object.isRequired
}