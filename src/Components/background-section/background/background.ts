import React, { useState, Component }  from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './background.scss';
import UXUIDesignIcon from '../../../assets/images/UXUIDesign-Icon.png'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
  

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
            <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>
        ) : null}
        </DialogTitle>
    );
}
  
/*
    Useful links: https://mui.com/material-ui/api/typography/
                  https://mui.com/system/getting-started/the-sx-prop/
*/

const styles = {
    fullHeightCard: {
        height: "100%",
        },
    }

function openBackgroundDialog() {

}

export default function BackgroundCard(props) {
    const [open, setOpen] = React.useState(false);
    const title = props.info.title;
    const img = props.info.img;
    const dimensions = props.dimensions;

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };

    console.log('<<< BackgroundCard ');
    console.log(dimensions.width);

    return (
        <div>       
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"My background in UX/UI Design" }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>

                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>

                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>

                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>

                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

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
                    <div style={{ display:'flex', justifyContent:'center' }}>
                    <CardMedia
                        sx={{
                            objectFit: "contain",
                            padding: "1em 1em 1em 1em", 
                            width: { xs: "80px", sm: "90px", md: "110px", lg: "120px"},
                            height: { xs: "80px", sm: "90px", md: "110px", lg: "120px" }}}
                        component="img"
                        image={img}
                        alt={title}
                    />
                    </div>
                    <CardContent>
                        <div className='background-title'>
                            <span className='background-title-label'> {title} </span>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleClickOpen} size="small">Learn More</Button>
                    </CardActions>
                </CardActionArea>
        
            </Card>
        </div>
    )

}

BackgroundCard.prototype = {
    title : PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    dimensions: PropTypes.object.isRequired
}

/*

  sx={{
                        display:'flex',
                        justifyContent:'center',
                        padding: "1em 1em 1em 1em", 
                        objectFit: "contain",
                        width: { xs: "80px", sm: "90px", md: "110px", lg: "120px"},
                        height: { xs: "80px", sm: "90px", md: "110px", lg: "120px" },
                    }}
                    */