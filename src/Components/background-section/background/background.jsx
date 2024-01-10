import React, { useState, Component }  from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './background.scss';
import UXUIDesignIcon from '../../../assets/images/UXUIDesign-Icon.png'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
    const [open, setOpen] = React.useState(false);
    const title = props.info.title;
    const img = props.info.img;
    const dimensions = props.dimensions;
    const description = props.info.description;

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div >       
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div  style={{ 
                    display:'flex',
                    justifyContent:'center',
                    flexDirection:'row',
                    alignItems: 'center' }}>
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
                    <DialogTitle id="alert-dialog-title">
                        {title}
                    </DialogTitle>
                </div>
     
   
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">
                        {description}
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
                <div onClick={handleClickOpen}>
                    <CardActionArea>
                        <div  style={{ display:'flex', justifyContent:'center' }}>
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
                    </CardActionArea>
                </div>
            </Card>
        </div>
    )

}

BackgroundCard.prototype = {
    title : PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    dimensions: PropTypes.object.isRequired,
    desciption: PropTypes.array.isRequired
}
