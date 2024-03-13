import React from "react";
import PropTypes from "prop-types";
import './Education.scss';

/*
const educationContent = [
  {
    year: "2022",
    degree: "MS - Human Centered Design",
    school: "UNIVERSITY OF WASHINGTOWN",
    details: `Research and course work includes Human Centered Design, Design Thinking,
              User Interaction Design and Prototyping, Visual Communication, VR/AR prototyping,
              Usability Studies, Digital Fabrication, IoT and Physical Computing, Information Design,
              Design and Management of Complex Systems.`,
  },
  {
    year: "2007",
    degree: "MA - Media Arts",
    school: "EMERSON COLLEGE",
    details: `My course work included television studio production, graduate film production,
              computer animation using Maya, digital compositing, research methods in media arts,
              and traditional cinematography. `,
  },
  {
    year: "2003",
    degree: "GRADUATE CERTIFICATE",
    school: "HARVARD UNIVERSITY",
    details: `My course work included introduction to computer science using C and C++, 
    data structures and algorithms, communication systems and technology, Web programming in Perl,
    Unix systems programming, Java for distributed systems, communication protocols and
    Internet architectures, and the study of computer network systems and the development of
    multimedia applications over high speed networking systems.
    `,
  },
];*/

function Education (props) {
  const data = Array.from(props.data);
  const screenDevice = props.screenDevice;

  const smsxView = () => {
    return (
      <div className="smsx-education-container">
          {data.map((val, i) => (
            <div className="education-wrapper">
               <div className="logo-period-section">
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
                  <div className="period-background">{val.year} </div>
                </div>
  
              <div className="education-info">
                
                <h5 className="degree-title"> {val.degree} </h5>
                <span className="school-name">{val.school}</span>
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
      <div className="mdlg-education-container">
          {data.map((val, i) => (
            <div className="education-wrapper">
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
  
              <div className="education-info">
                <div className="period-background">{val.year} </div>
                <h5 className="degree-title"> {val.degree} </h5>
                <span className="school-name">{val.school}</span>
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
      <div className="desktop-education-container">
          {data.map((val, i) => (
            <div className="education-wrapper">
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
  
              <div className="education-info">
                <div className="period-background">{val.year} </div>
                <h5 className="degree-title"> {val.degree} </h5>
                <span className="school-name">{val.school}</span>
                <h5 className="location"> {val.location}</h5>
                <p>{val.details}</p>
              </div>
            </div>
          ))}
      </div>
    );
  };

  if ( screenDevice.laptop ) { 
    return desktopView();
  } else if ( screenDevice.md || screenDevice.lg) { 
    return mdlgView();
  } else if ( screenDevice.xs || screenDevice.sm ) {    
    return smsxView();
  }

}

/*
const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/book.png" alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.school}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};*/

export default Education;

Education.prototype = {
  data: PropTypes.Array,
  screenDevice: PropTypes.object.isRequired
}
