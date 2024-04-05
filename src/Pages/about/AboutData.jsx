import React from "react";
import AkamaiLogo from './images/akamai_technologies_logo.jpeg';
import CBSLogo from './images/cbs_interactive_logo.jpeg';
import DisneyLogo from './images/the_walt_disney_company_logo.jpeg';
import HarvardLogo from './images/harvard-logo.jpeg';
import SonyLogo from './images/sony_pictures_imageworks_logo.jpeg';
import EmersonLogo from './images/emerson_college_logo.jpeg';
import UWLogo from './images/university_of_washington_logo.jpeg';
import AAEPhoto from './images/AAEPhoto.jpeg';

const AboutData  =  {
  pageTitle: "About Me",
  pageWelcome: "Hello, I'm Antonio",
  profilePhoto: AAEPhoto,
  pageParagraphs: [
    "I am a full stack designer and application software developer with a multidisciplinary background. I design and engineer experiences from inception to completion, and adopt emerging technologies through Human - Centered Design methodologies.",
    "My multidisciplinary background has allowed me to lead and contribute in projects and products that range from frontend development, UX/UI design and engineering, ML driven apps,  architecting of backend services,  and content management systems. ",
    "My professional experience has been in working in the technology and entertainment industries as well as in higher education.  My portfolio of work includes design and development of interactive applications for  business intelligence and Web publishing, augmented reality, AI/ML data driven applications, and automation of processes with interactive applications. ",
    "I have always been a creative engineer and designer. I have a passion for learning new trends in innovative design and emerging technologies for the building of human empathetic applications."
  ],
  skills: {
    design: [
      {
        name: "Human Centered Design",
        skillPercent: "95",
      },
      {
        name: "Human Computer Interaction",
        skillPercent: "70",
      },
      {
        name: "Figma",
        skillPercent: "95",
      },
      {
        name: "Adobe Photoshop",
        skillPercent: "95",
      },
      {
        name: "Adobe Premier",
        skillPercent: "95",
      },

      {
        name: "Adobe After Effects",
        skillPercent: "95",
      },
      {
        name: "Miro",
        skillPercent: "90",
      }
    ],
    engineering: [
      {
        name: "Angular",
        skillPercent: "95",
      },
      {
        name: "React.Js",
        skillPercent: "80",
      },
      {
        name: "Django",
        skillPercent: "90",
      },
      {
        name: "AI/ML",
        skillPercent: "90",
      },
      {
        name: "iO/Swift",
        skillPercent: "70",
      },
      {
        name: "Python",
        skillPercent: "70",
      },
      {
        name: "Typecript",
        skillPercent: "90",
      },
      {
        name: "JavaScript",
        skillPercent: "90",
      },
      {
        name: "Java",
        skillPercent: "90",
      },
    ]
  },





  experience: [
    {
      year: "   2017 - Present",
      position: "Lead Engineer",
      location: "Seattle, WA",
      logo: DisneyLogo,
      compnayName: "The Walt Disney Company",
      details: `Develops front-end applications and provides technical leadership to a UI team
                to adopt best software development practices and modern UI frameworks for the implementation of Web 
                base interactive dashboards, Web sites, and Web APIs integrations with back-end databases,
                Machine Learning systems, and revenue management systems.`,
    },
    {
      year: "2013 - 2017",
      position: "Senior Software Engineer",
      location: "Palo Alto, CA",
      logo: DisneyLogo,
      compnayName: "The Walt Disney Company",
      details: `Developed Web applications in content management systems and data access systems, tools
                for data exploration, data visualizations, backend services, and proof of concepts to
                define requirements for data driven workflows.
      
      `,
    },
    {
      year: "2013 - 2013",
      position: "Senior Applications Developer",
      location: "Boston, MA",
      logo: AkamaiLogo,
      compnayName: "Akamai Technologies",
      details: `Developed web applications and an API for the support of the GNET project which visualizes global
                traffic patterns among Akamai customers. The GNET project provides with a suite of 3D interactive
                visualization applications in WebGL to visualize Internet traffic patterns for content delivery,
                streaming media, firewall web applications, and static media assets storage on Akamai distributed network`,
    },
    {
      year: "2011 - 2012",
      position: "Staff Engineer",
      location: "San Francisco, CA",
      logo: CBSLogo,
      compnayName: "CBS Corporation",
      details: `Architecting and implementing workflows for the acquisition, encoding, transcoding, and publishing of video
                content and metadata from external partners to public sites and CBS video players. Workflow components included
                a Java API to interface with a external video publisher (thePlatform/MPX ), job schedulers, and
                a content management system.`,
    },
    {
      year: "2008 - 2010",
      position: "Technical Director",
      location: "San Francisco, CA",
      logo: DisneyLogo,
      compnayName: "The Walt Disney Company",
      details: `Developed and engineered media file based workflows for the production of
                stereoscopic imagery. Projects involved developing applications APIs to 
                extend and implement features for 3D animation, bitmap manipulation, encoding 
                of media and integration of queuing systems and management controls of
                high-performance server enclosures for the rendering of stereoscopic imagery.`,
    },
    {
      year: "2008 - 2008",
      position: "Production Services Techician",
      location: "Los Angeles, CA",
      logo: SonyLogo,
      compnayName: "Sony Pictures Imageworks",
      details: `Assisted in the technical aspects for the production of the motion picture “Valkyrie”, directed by Bryan Singer. Main
                projects and activities included visual quality assurance on all outputs before they go to film and prepared daily reports for reviews,
                processing image conversions from all supported formats at Sony Imageworks for testing and pre-visualization of shots, and 
                monitoring, troubleshooting and verification for the completion of renders in the rendering queue.`,
    },
    
    {
      year: "1999 - 2006",
      position: "Software Engineer",
      location: "Cambridge, MA",
      logo: HarvardLogo,
      compnayName: "Harvard University",
      details: `development and integration of an innovative system architecture for the production of digital video
                and multimedia content for the first distance education project at Harvard University. The project gained
                national acclaim in the fields of digital video technology, distance education and streaming media`,
    },
  ],
  education: [
    {
      year: "2022",
      degree: "MS - Human Centered Design",
      logo: UWLogo,
      location: "Seattle, WA",
      school: "UNIVERSITY OF WASHINGTOWN",
      details: `Research and course work includes Human Centered Design, Design Thinking,
                User Interaction Design and Prototyping, Visual Communication, VR/AR prototyping,
                Usability Studies, Digital Fabrication, IoT and Physical Computing, Information Design,
                Design and Management of Complex Systems.`,
    },
    {
      year: "2019",
      degree: "GRADUATE CERTIFICATE -  User Centered Design",
      logo: UWLogo,
      location: "Seattle, WA",
      school: "UNIVERSITY OF WASHINGTOWN",
      details: `Research and course work includes Human Centered Design, Design Thinking,
                User Interaction Design and Prototyping, Visual Communication, VR/AR prototyping,
                Usability Studies, Digital Fabrication, IoT and Physical Computing, Information Design,
                Design and Management of Complex Systems.`,
    },
    {
      year: "2007",
      degree: "MA - Media Arts",
      logo: EmersonLogo,
      location: "Boston, MA",
      school: "EMERSON COLLEGE",
      details: `My course work included television studio production, graduate film production,
                computer animation using Maya, digital compositing, research methods in media arts,
                and traditional cinematography. `,
    },
    {
      year: "2003",
      degree: "GRADUATE CERTIFICATE APPLIED SCIENCES",
      logo: HarvardLogo,
      location: "Cambridge, MA",
      school: "HARVARD UNIVERSITY",
      details: `My course work included introduction to computer science using C and C++, 
      data structures and algorithms, communication systems and technology, Web programming in Perl,
      Unix systems programming, Java for distributed systems, communication protocols and
      Internet architectures, and the study of computer network systems and the development of
      multimedia applications over high speed networking systems.
      `,
    },
  ]

};  

export default AboutData;