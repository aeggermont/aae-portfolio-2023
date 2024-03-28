import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Project.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Project (props) {
    const screenDevice = props.screenDevice; 
    const description = props.info.description;
    const index = props.info.index;
    const projectId = props.info.projectId;
    const projectLink = props.info.projectLink;
    const similarProjects = props.info.similarProjects;
    const skills = props.info.skills;
    const title = props.info.title;
    const thumbnailImg = props.info.thumbnailImg;
    // const thumbnailImg = '/images/projects/thumbs/arMagicTours-thumb.png';
    const navigate = useNavigate();

    const handleProjectPage = (event) => {
        setTimeout(() => {
            navigate( `/${projectLink}` , { replace: false });
        }, 500);  
    };


    const smsxView = () => {
        
        return (
            <>
                <Card
                    onClick={handleProjectPage}
                    sx={{ 
                        maxWidth: 345,
                        minHeight: 400,
                        maxHeight: 521,
                        backgroundColor: '#FBF7F7',
                        '--Card-padding': '0px', 
                    }}>
                    <CardActionArea>

                        <CardMedia
                                component="img"
                                image={thumbnailImg}
                                sx={{
                                    objectFit: 'cover'
                                }}
                                alt={title} />

                        <CardContent>
                            <Typography
                                sx={{  marginTop: '10px', 
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: '1.3rem',
                                    fontWeight: '500'
                                }} 
                                gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography 
                                sx={{  
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: '1rem',
                                    fontWeight: '400'
                                }}
                                variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                            <Typography 
                                sx={{ 
                                    marginTop: '1rem',
                                    fontWeight: '600'
                                }}
                                variant="body2"
                                color="text.secondary">
                                {skills}
                            </Typography>
                            <CardActions  sx={{ marginTop: '-5px', textAlign: 'center' }} ></CardActions>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </>
        )
    }

    const mdlgDesktopView = () => {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Card 
                            sx={{ 
                                width: 385,
                                height: 261,
                                '--Card-padding': '0px', 
                            }}> 
                                <CardMedia
                                    sx={{
                                        objectFit: 'cover',
                                        width: 385,
                                        height: 261
                                    }}
                                    component="img"
                                    image={thumbnailImg}
                                    alt={title} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignItems: 'center',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        '& > :not(style)': {
                                            m: 1,
                                            width: '100%',
                                          },
                                        bgcolor: 'rgba(0, 0, 0, 0.30)',
                                        color: 'white',
                                        padding: '10px' }}>
                                    <div>
                                        <Typography variant="h5" component="h3">
                                            {title}
                                        </Typography>
                                    </div>
                                </Box>
                             
                        </Card>
                    </div>
                    <div className="flip-card-back">
                        <Card
                            sx={{ 
                                width: 385,
                                height: 261,
                                backgroundColor:  'rgba(0, 0, 0, 0.05)',
                                '--Card-padding': '0px', 
                            }}>
                                <CardActionArea onClick={handleProjectPage}>
                                    <CardContent>
                                        <Typography 
                                            sx={{
                                                fontFamily: "'Poppins', sans-serif",
                                                fontSize: '1.3rem',
                                                fontWeight: '500'
                                            }} 
                                            gutterBottom variant="h5" component="div">
                                            {title}
                                        </Typography>
                                        <Typography 
                                            sx={{  
                                                fontFamily: "'Poppins', sans-serif",
                                                fontSize: '1.1rem',
                                                fontWeight: '400'
                                            }}
                                        variant="body2" color="text.secondary">
                                        {description}
                                        </Typography>
                                        <Typography 
                                            sx={{ 
                                                paddingTop: '1rem',
                                                marginTop: '5px',
                                                fontWeight: '800',
                                                fontSize: '1rem',
                                                fontFamily: "'Poppins', sans-serif" }}
                                                variant="body2" color="text.secondary">
                                        {skills}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
  
    if ( screenDevice.desktop ) {
        return mdlgDesktopView();
        
    } else if (  screenDevice.xs || screenDevice.sm  ) {

        return smsxView();
    }
}

export default Project;

Project.prototype = {
    screenDevice: PropTypes.object.isRequired,
    description : PropTypes.string.isRequired,
    index : PropTypes.number.isRequired,
    projectId : PropTypes.number.projectId,
    projectLink : PropTypes.string.isRequired,
    similarProjects : PropTypes.object.isRequired,
    skills : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}
