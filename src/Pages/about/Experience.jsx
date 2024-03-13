import React from "react";
import PropTypes from 'prop-types';
import './Experience.scss';
function Experience (props) {
  const data = Array.from(props.data);
  const screenDevice = props.screenDevice;
  
  console.log("Experience DATA ");
  console.log(data);

  return (
    <div className="desktop-experience-container">
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

export default Experience;

Experience.prototype = {
  data: PropTypes.Array,
  screenDevice: PropTypes.object.isRequired
}