import React from 'react';
import PropTypes from 'prop-types';
import './ParagraphImg.scss';

function ParagraphImg(props) {
    const alt = props.alt;
    let width = props.width;
    const imagesSrc = props.imagesSrc;
    const screenDevice = props.screenDevice;
    const title = props.title;
    const description = props.description;
  
    if ( imagesSrc.length === 1 ) {
        if ( screenDevice.laptop ) {
            if ( width === undefined) {
                width = "80%";
            }        
            return (
                <div className='storyteller-laptopParagraphImg'>
                    <img    
                        src = { imagesSrc[0] }
                        alt = { alt }
                        style = {{
                            width: width,
                            alignSelf: 'center',
                            paddingTop: '6rem'
                        }} 
                    />
                    <div className='title'> { title } </div>
                    <div className='description'> { description }</div>
                </div>
            )
        } else if ( screenDevice.lg || screenDevice.md ) {
            if ( width === undefined) {
                width = "80%";
            }   
            return (
                <div  className='storyteller-lgmdParagraphImg'>
                    <img
                        src = { imagesSrc[0] }
                        alt = { alt }
                        style = {{
                            width: width,
                            alignSelf: 'center',
                            paddingTop: '3rem'
                        }} 
                    />
                    <div  className='title'> { title } </div>
                    <div  className='description'> { description }</div>
                 </div>
            );
        } else if ( screenDevice.xs || screenDevice.sm ) {
            if ( width === undefined) {
                width = "90%";
            } 
            return (
                <div className='storyteller-xssmParagraphImg'>
                    <img  
                        src = { imagesSrc[0] }
                        alt = { alt }
                        style = {{
                            width: width,
                            paddingTop: '1rem'
                        }} 
                    />
                    <div  className='title'> { title } </div>
                    <div  className='description'> { description }</div>
                </div>
            );
        }
    } else if ( screenDevice.laptop ) {
       
        if ( width === undefined) {
            width = "80%";
        }
        return (
            <div className='storyteller-laptopParagraphImg'>
                <img
                    src = { imagesSrc[0] }
                    alt = { alt }
                    style = {{
                        width: { width },
                        alignSelf: 'center',
                        paddingTop: '6rem'
                    }} 
                />
                <div className='title'> { title } </div>
                <div className='description'> { description }</div>
            </div>
        );
    } else if ( screenDevice.lg || screenDevice.md ) {
        if ( width === undefined) {
            width = "100%";
        }
        return (
            <div  className='storyteller-lgmdParagraphImg'>
                <img
                    src = { imagesSrc[1] }
                    alt = { alt }
                    style = {{
                        width: width ,
                        alignSelf: 'center',
                        paddingTop: '6rem'
                    }} 
                />
                <div className='title'> { title } </div>
                <div className='description'> { description }</div>
             </div>
        );
    } else if ( screenDevice.xs || screenDevice.sm ) {
        if ( width === undefined) {
            width = "80%";
        }
        return (
            <div className='storyteller-xssmParagraphImg'>
               
                <img  
                    src = { imagesSrc[2] }
                    alt = { alt }
                    style = {{
                        width: { width },
                        paddingTop: '3rem'
                    }} 
                />
                <div className='title'> { title } </div>
                <div className='description'> { description }</div>
            </div>
        );
    }
}

export default ParagraphImg;

ParagraphImg.prototype = {
    title:  PropTypes.string,
    description: PropTypes.string,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    imagesSrc: PropTypes.array.isRequired,
    screenDevice: PropTypes.object.isRequired
}