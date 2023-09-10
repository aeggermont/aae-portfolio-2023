import React from 'react';
import PropTypes from 'prop-types';
import './ProjectOverview.scss';
import  MyRolesIcon from '../Images/MyRolesIcon.png';
import TimelineIcon from '../Images/TimelineIcon.png'; 
import CategoryIcon from '../Images/CategoryIcon.png'; 

function ProjectOverview(props) {
    
    return (
        <>
            <div className='overview-container'>
                <div className='overview-row'>
                    <div className='overview-row-icon'>
                        <div className='image-icon'>
                            <img
                                src = { MyRolesIcon }
                                style = {{
                                    width: "42px",
                                    height: "42px"
                                }} 
                            />
                        </div>
                        <div> My Roles</div>
                    </div>
                    <div className='overview-row-text '>
                            <span> UX/UI Designer</span>
                            <span> Front-end Developer</span>
                            <span> User Research</span>
                    
                     </div>               
                </div>

                <div className='overview-row'>
                    <div className='overview-row-icon'>
                        <div className='image-icon'>
                            <img 
                                className='image-icon'
                                src = { TimelineIcon }
                                style = {{
                                    width: "42px",
                                    height: "42px"
                                }} 
                            />
                        </div>
                        <div> Time Line</div>
                    </div>
                    <div className='overview-row-text '> 
                    
                        <span> 4 Months Initial Launch</span>
                  
                    </div>               
                </div>

                <div className='overview-row'>
                    <div className='overview-row-icon'>
                        <div className='image-icon'>
                            <img
                                className='image-icon'
                                src = { CategoryIcon }
                                style = {{
                                    width: "42px",
                                    height: "42px"
                                }} 
                            />
                         </div>
                         <div> Category</div>
                    </div>
                    <div className='overview-row-text '> 
                        <span> Entertainment</span>
                        <span> Operation automation</span>
                     </div>               
                </div>
            </div>
        </>
    );
}

export default ProjectOverview;