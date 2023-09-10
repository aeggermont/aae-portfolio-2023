import React from 'react';
import PropTypes from 'prop-types';
import TitleParagraph from './TitleParagraph';
import ParagraphText from './ParagraphText';

function ParagraphBlock(props) {
    const title = props.title;
    const paragraphs = props.paragraphs;
    const screenDevice = props.screenDevice;



    const paragraphsRender = paragraphs.map(
        paragraph =>
            <ParagraphText 
                text={paragraph}
                screenDevice={screenDevice}
            />
    );

    return (
        <div>
            <TitleParagraph 
                title={title}
                screenDevice={screenDevice}
            />

            { paragraphsRender }
        </div>
    )

}

export default ParagraphBlock;

ParagraphBlock.prototype = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.array,
    screenDevice: PropTypes.object
}