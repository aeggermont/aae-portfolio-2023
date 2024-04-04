import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import './Experience.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Experience (props) {
  const data = Array.from(props.data);
  const screenDevice = props.screenDevice;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  console.log("Experience DATA ");
  console.log(data);

  const smsxView = () => {
    return (
      <div className="smsx-experience-container">
          {data.map((val, i) => (
            <div className="experience-wrapper">
              <div className="logo-period-section">
               
                <img 
                  src={val.logo}
                  alt="icon"
                  style = {{
                    width: '4.5rem',
                    height: '4.5rem',
                    paddingTop: '1px',
                    borderRadius: '1rem'
                  }}
                />
             
                <div className="period-background">{val.year} </div>
              </div>

              <div className="experience-info">
              
                <h5 className="position-title"> {val.position} </h5>
                <span className="company-name"> {val.compnayName}</span>
                <h5 className="location"> {val.location}</h5>
                <p>{val.details}</p>
              </div>
            </div>
          ))}
      </div>
    );
  };

  const mdlgView = () => {
    return (
      <div className="mdlg-experience-container">
          {data.map((val, i) => (
            <div className="experience-wrapper">
              <img 
                src={val.logo}
                alt="icon"
                style = {{
                  width: '5rem',
                  height: '5rem',
                  paddingTop: '1px',
                  borderRadius: '1rem'
                }}
              />
  
              <div className="experience-info">
                <div className="period-background">{val.year} </div>
                <h5 className="position-title"> {val.position} <span className="company-name">- {val.compnayName}</span></h5>
                <h5 className="location"> {val.location}</h5>
                <p>{val.details}</p>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  const desktopView = () => {
    return (
      <div className="desktop-experience-container">
          {data.map((val, i) => (
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className="experience-wrapper">
              <img 
                src={val.logo}
                alt="icon"
                style = {{
                  width: '5rem',
                  height: '5rem',
                  paddingTop: '1px',
                  borderRadius: '1rem'
                }}
              />
  
              <div className="experience-info">
                <div className="period-background">{val.year} </div>
                <h5 className="position-title"> {val.position} <span className="company-name">- {val.compnayName}</span></h5>
                <h5 className="location"> {val.location}</h5>
                <p>{val.details}</p>
              </div>
            </div>
          ))}
      </div>
    );
  };


  if ( screenDevice.desktop ) { 
    return desktopView();
  } else if ( screenDevice.md || screenDevice.lg) { 
    return mdlgView();
  } else if ( screenDevice.xs || screenDevice.sm ) {    
    return smsxView();
  }
  
};

export default Experience;

Experience.prototype = {
  data: PropTypes.Array,
  screenDevice: PropTypes.object.isRequired
}