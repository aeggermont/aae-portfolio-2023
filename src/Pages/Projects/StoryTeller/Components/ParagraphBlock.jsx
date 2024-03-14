import React from 'react';
import PropTypes from 'prop-types';
import TitleParagraph from './TitleParagraph';
import ParagraphText from './ParagraphText';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';

function ParagraphBlock(props) {
    const title = props.title;
    const subTitle1 = props.subTitle1;
    const subTitle2 = props.subTitle2;
    const paragraphs = props.paragraphs;
    const screenDevice = props.screenDevice;

    const titleRender = (title, screenDevice) =>
        title === undefined ? '' : <TitleParagraph screenDevice={screenDevice} title={title} />;

    const subTitle1Render = (subTitle1, screenDevice) =>
        subTitle1 === undefined ? '' : <SubTitle1 screenDevice={screenDevice} subTitle={subTitle1} />;

    const subTitle2Render = (subTitle2, screenDevice) =>
        subTitle2 === undefined ? '' : <SubTitle2 screenDevice={screenDevice} subTitle={subTitle2} />;

    const paragraphsRender = paragraphs.map(
        (paragraph, index) =>
            <ParagraphText
                key={index}
                text={paragraph}
                screenDevice={screenDevice}
            />
    );

    return (
        <>  
            { titleRender(title, screenDevice)}
            { subTitle1Render(subTitle1, screenDevice)}
            { subTitle2Render(subTitle2, screenDevice)}
            { paragraphsRender }
        </>
        
    )   

    /*
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
            <>
              { paragraphsRender }
            </>
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
    */
}

export default ParagraphBlock;

ParagraphBlock.prototype = {
    title: PropTypes.string,
    subTitle1: PropTypes.string,
    subTitle2: PropTypes.string,
    paragraphs: PropTypes.array,
    screenDevice: PropTypes.object
}