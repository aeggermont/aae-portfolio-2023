import React from 'react';
import PropTypes from 'prop-types';
import TitleParagraph from './TitleParagraph';
import ParagraphText from './ParagraphText';
import SubTitle from './SubTitle';

function ParagraphBlock(props) {
    const title = props.title;
    const subTitle = props.subTitle;
    const paragraphs = props.paragraphs;
    const screenDevice = props.screenDevice;
    console.log(subTitle);

    const paragraphsRender = paragraphs.map(
        paragraph =>
            <ParagraphText 
                text={paragraph}
                screenDevice={screenDevice}
            />
    );

    if ( (subTitle !== undefined) && ( title !== undefined ) ) {
        return (
            <div>
                <TitleParagraph 
                    title={title}
                    screenDevice={screenDevice}
                />

                <SubTitle
                    subTitle={subTitle}
                    screenDevice={screenDevice}
                />
               
                { paragraphsRender }
            </div>
        );
    } else if ( (title === undefined) && ( subTitle === undefined)) {
        return (
            { paragraphsRender }
        );
    } else if ((title === undefined) && ( subTitle !== undefined))  {
        return (
            <div>
               
               <SubTitle
                    subTitle={subTitle}
                    screenDevice={screenDevice}
                />
               
    
                { paragraphsRender }
            </div>
        );

    } else {    
        return (
            <div>
                <TitleParagraph 
                    title={title}
                    screenDevice={screenDevice}
                />
    
                { paragraphsRender }
            </div>
        );
    }
}

export default ParagraphBlock;

ParagraphBlock.prototype = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    paragraphs: PropTypes.array,
    screenDevice: PropTypes.object
}