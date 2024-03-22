import React,  {useState} from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function Contact(props) {
    const screenDevice = props.screenDevice; 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault()     
        setEmailError(false)
        if (email == '') {
            setEmailError(true)
        }
   
        if (email ) {
            console.log(email)
        }
    }

    if (  screenDevice.desktop ) {
        return (
            <section className='container'>
                <div className='contact-section'>
                    <div className='contact-form-container'>
                        <div className='writeme-container'>
                            <span> Write Me </span>
                            <p> I´m always open to discussing exploring new projects, developments, and partnerships.</p>               
                            <form  onSubmit={handleSubmit}>
                                <div className='form-field'>
                                    <TextField
                                    sx={{
                                        width: '450px',
                                    }}
                                    required
                                    id="outlined-required"
                                    label="Your name"
                                    defaultValue=""
                                    variant="filled"
                                    onChange={e => setName(e.target.value)}
                                    />
                                </div> 
                                <div className='form-field'>
                                <TextField
                                        required
                                        sx={{
                                            width: '450px',
                                        }}
                                        id="outlined-required"
                                        label="Your email"
                                        type="email"
                                        defaultValue=""
                                        variant="filled"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='form-field'>
                                    <TextField
                                            required
                                            multiline
                                            rows={4}
                                            
                                            sx={{
                                                width: '450px',
                                            }}
                                            id="outlined-required"
                                            label="Your message"
                                            defaultValue=""
                                            variant="filled"
                                            onChange={e => setMessage(e.target.value)}
                                    />
                                </div>
                                <div className='form-field-submit'>
                                    <Button type="submit" >Submit</Button>
                                </div>
                            </form>
                        </div>
                        <div className='contactme-container'>
                            <span>Contact Me</span>
                            <div className='contact-row'> <PhoneIphoneIcon sx={{ color: '#02232c' }} style={{ fontSize: 40 }} /> <span className='contact-item'> USA: +206 556 8918</span> </div>
                            <div className='contact-row'> <PhoneIphoneIcon sx={{ color: '#02232c' }} style={{ fontSize: 40 }} /> <span className='contact-item'> Mexico: +52 55 36 71 57 12</span> </div>
                            <div className='contact-row'> <AlternateEmailIcon sx={{ color: '#02232c' }} style={{ fontSize: 40 }}/> <span className='contact-item'> Antonio.EGgermont@post.harvard.edu</span> </div>
                            <div className='contact-row'> <LinkedInIcon sx={{ color: '#02232c' }} style={{ fontSize: 40 }} /> <span className='contact-item'> LinkedIn</span> </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else if ( screenDevice.md || screenDevice.lg ) {
        return (
            <section className='container'>
                <div className='contact-section'>
                    <div className='contact-form-container'>
                        <div className='writeme-container'>
                            <span> Write Me </span>
                            <p> I´m always open to discussing exploring new projects, developments, and partnerships.</p>               
                            <form  onSubmit={handleSubmit}>
                                <div className='form-field'>
                                    <TextField
                                    sx={{ width: '300px' }}
                                    required
                                    id="outlined-required"
                                    label="Your name"
                                    defaultValue=""
                                    variant="filled"
                                    onChange={e => setName(e.target.value)}
                                    />
                                </div> 
                                <div className='form-field'>
                                <TextField
                                        required
                                        sx={{ width: '300px'}}
                                        id="outlined-required"
                                        label="Your email"
                                        type="email"
                                        defaultValue=""
                                        variant="filled"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='form-field'>
                                    <TextField
                                            required
                                            multiline
                                            rows={4}
                                            sx={{ width: '300px'}}
                                            id="outlined-required"
                                            label="Your message"
                                            defaultValue=""
                                            variant="filled"
                                            onChange={e => setMessage(e.target.value)}
                                    />
                                </div>
                                <div className='form-field-submit'>
                                    <Button type="submit" >Submit</Button>
                                </div>
                            </form>
                        </div>
                        <div className='contactme-container'>
                            <span>Contact Me</span>
                            <div className='contact-row'> <PhoneIphoneIcon sx={{ color: '#02232c' }} style={{ fontSize: 30 }} /> <span className='contact-item'> USA: +206 556 8918</span> </div>
                            <div className='contact-row'> <PhoneIphoneIcon sx={{ color: '#02232c' }} style={{ fontSize: 30 }} /> <span className='contact-item'> Mexico: +52 55 36 71 57 12</span> </div>
                            <div className='contact-row'> <AlternateEmailIcon sx={{ color: '#02232c' }} style={{ fontSize: 30 }}/> <span className='contact-item'> aaeggermont@outlook.com</span> </div>
                            <div className='contact-row'> <LinkedInIcon sx={{ color: '#02232c' }} style={{ fontSize: 30 }} /> <span className='contact-item'> LinkedIn</span> </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else if ( screenDevice.xs || screenDevice.sm ) {
        return (
            <>
                <hi> Smart Phone View</hi>
            </>
        );
    }
}

export default Contact;

Contact.prototype = {
    screenDevice: PropTypes.object.isRequired
}