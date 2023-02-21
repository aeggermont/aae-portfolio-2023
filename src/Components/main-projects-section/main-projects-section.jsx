import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './main-projects-section.scss';
import LatestProject from './latest-project/latest-project';
import Project1 from '../../assets/images/DisneyMagicARTouresIncon.png';
import Project2 from '../../assets/images/R3XThumbnail.png';
import Project3 from '../../assets/images/WhereIsPetuniaThumbnail.png';

function MainProjectsSection() {

    const mainProjectsSecion = [
        {
            title: 'Disney A.R. Magic Tours',
            desciption: 'An A.R. app to enhance the experience at Disney’s parks by making the environment an attraction itself. ',
            img: Project1
        },
        {
            title: 'R-3x Automatic Seater',
            desciption: 'A Mobile Web App to optimize the assignment of seats at Disney Resourt Rides and Theaters. ',
            img: Project2
        },
        {
            title: 'Where is Petunia?',
            desciption: 'Facilitating Trust and Serendipity in Scientific Collaboration addressing socio technical problems through discursive and fiction design. ',
            img: Project3
        },

    ]

    return (
        <section>
            <div className='projects-section-divider'>
                <Typography
                        align='left'
                        gutterBottom
                        variant="h4"
                        className='section-divider-typography'
                        component="div"> Latest Projects </Typography>
            </div>

            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    alignContent: 'flex-start',
                    justifyContent: 'center',

                }}>
                    <LatestProject info={mainProjectsSecion[0]} />
                    <LatestProject info={mainProjectsSecion[1]} />
                    <LatestProject info={mainProjectsSecion[2]} />
            </Box>

        </section>

        

    );
}

export default MainProjectsSection;