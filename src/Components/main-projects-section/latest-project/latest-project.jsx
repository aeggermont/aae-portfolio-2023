import React, { useState, Component }  from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './latest-project.scss';
import Box from '@mui/material/Box';
const styles = {
    fullHeightCard: {
        height: "100%",
        },
    }
    const img = "";

function LatestProject(props) {
    const title = props.title;
    const thumbnailImg = props.thumbnailImg;
    const description = props.description;
    const dimensions = props.dimensions;

    console.log(' <<< LatestProject >>> ');
    console.log(dimensions);
    console.log('=======================');

    return (
        <Card 
            sx={{
                maxWidth: 345,
                height: 445,
            }}
            raised='true'
            >
            <CardActionArea >
                <CardMedia
                     component="img"
                     className="card-media-img"
                     image={thumbnailImg}
                     sx={{ 
                        padding: "0em 0em 0 0em", 
                        objectFit: "contain",
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7],
                        } }}
                />
                <CardContent
                    style={{ }}>
                    <Box
                        sx={{
                            display: 'flex',
                            height: '6rem',
                            alignItems: 'center'
                            }}>
                        <Typography gutterBottom variant="h5" component="div"  style={{color: "#074C5F" }}>
                            {title }
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            height: '10rem',
                            alignItems: 'top'
                            }}>
                       <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                    </Box>
                    
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default LatestProject;

LatestProject.prototype = {
    title : PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnailImg: PropTypes.object.isRequired,
    dimensions: PropTypes.object.isRequired       
}