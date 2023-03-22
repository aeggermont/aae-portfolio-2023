import React from 'react';
import './writeme.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function WriteMe() {

    return (
        <section className='container'>
            <div className='writeme-section'>
                <div className='row'>
                        <div className='section-title'>
                            <span className='section-title-label'>
                                Write Me 
                            </span>
                        </div>
                </div>
            </div>
            <div className='row'>
                <div style={{ width: '50%' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <span> I´m always open to discussing and exploring new product and project design and developments, a and partnerships.</span>
                        <TextField
                            required
                            id="standard-required"
                            label="Name"
                            defaultValue=""
                            variant="standard"
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="Email"
                            defaultValue=""
                            variant="standard"
                        />
                        <TextField
                            id="standard-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            defaultValue=""
                            variant="standard"
                        />
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default WriteMe;