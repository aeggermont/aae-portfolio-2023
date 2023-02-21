import React, { useState, Component }  from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

const styles = {
    fullHeightCard: {
        height: "100%",
        },
    }
    const img = "";

function LatestProject(props) {
    const title = props.info.title;
    const img = props.info.img;
    const desciption = props.info.desciption;

    return (
        <Card sx={{
            width: '354px',
            height: '441px',
            }}
            raised='true'
            >
            <CardActionArea>
                <CardMedia
                     component="img"
                     height='100%'
                     width='100%'
                     image={img}
                     sx={{ 
                        padding: "0em 0em 0 0em", 
                        objectFit: "contain",
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7],
                        } }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desciption}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default LatestProject;

LatestProject.prototype = {
    title : PropTypes.string.isRequired,
    desciption: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired       
}