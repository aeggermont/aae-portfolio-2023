
import React, { useState, Component }  from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './LatestProject.scss';

function LatestProject(props) {
    const title = props.title;
    const thumbnailImg = props.thumbnailImg;
    const description = props.description;
    const dimensions = props.dimensions;

    return (
        <Card 
            sx={{
                width: { xs: "300px", sm: "300px", md: "320px", lg: "340px"},
                height: { xs: "450px", sm: "440px", md: "470px", lg: "470px" },
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
                        height: { xs: "4.5rem", sm: "5rem", md: "6rem", lg: "rem"},
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem", lg: "1.3rem"},
                        fontWeight: { xs: "550", sm: "500", md: "600", lg: "600"},
                        fontFamily: "Poppins , sans-serif",
                        color: "#011114"
                        }}>
                    
                    {title }
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        height: { xs: "10rem", sm: "10rem", md: "10rem", lg: "14rem"},
                        alignItems: 'top',
                        fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem"},
                        fontWeight: { xs: "400", sm: "400", md: "400", lg: "400"},
                        fontFamily: "Poppins , sans-serif",
                        }}>
                     {description}
                </Box>
                
            </CardContent>
        </CardActionArea>
    </Card>
    )
}

export default LatestProject;


LatestProject.prototype = {
    title : PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnailImg: PropTypes.object.isRequired,
    dimensions: PropTypes.object.isRequired       
}