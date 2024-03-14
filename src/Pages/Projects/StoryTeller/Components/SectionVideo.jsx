import React from 'react';
import PropTypes from 'prop-types';
import './SectionVideo.scss';

function SectionVideo(props) {
    const screenDevice = props.screenDevice;
    const title = props.title;
    const description = props.description;
    const srcUrl = props.srcUrl;
    const width = props.width;
    const height = props.height;

    const titleRender = (title) =>
        title === undefined ? '' : <div className='title'> { title } </div>;

    const descriptionRender = (description) =>
        description === undefined ? '' : <div className='description'> { description } </div>;

    return ( 
        <div className='storyteller-DesktopParagraphVideo'>
            <div className='iframeContainer'>
                <iframe 
                    src={srcUrl} 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture"
                    width={width}
                    height={height}
                    title="Pilot Test Evaluation 1">
                </iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            <div className='title'> { title } </div>
            <div className='description'> { description }</div>
        </div>
    );

}

export default SectionVideo;

SectionVideo.prototype = {
    title:  PropTypes.string,
    width: PropTypes.string,
    height:  PropTypes.string,
    description: PropTypes.string,
    srcUrl: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}