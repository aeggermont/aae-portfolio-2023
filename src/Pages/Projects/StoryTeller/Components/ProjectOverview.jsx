import React from 'react';
import PropTypes from 'prop-types';
import './ProjectOverview.scss';
import MyRolesIcon from '../Images/MyRolesIcon.png';
import TimelineIcon from '../Images/TimelineIcon.png'; 
import CategoryIcon from '../Images/CategoryIcon.png'; 


function ProjectOverview(props) {
    const screenDevice = props.screenDevice;
    const title = props.title;

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <div className='storyteller-overview-container-desktop'>
                <div className='overview-title'>  Project Overview</div>
                <div className='overview-columns'>
                    <div className="column-tier">
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
                            <div className='myroles-text'> My Roles</div>
                        </div>
                    
                        <div className='overview-row-text '>
                            <ul> Project Lead</ul>
                            <ul> UX/UI Designerr</ul>
                            <ul> Technology Research</ul>
                        </div>     
                    </div>   
                    <div className="column-tier">
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
                            <div className='myroles-text'> Timeline</div>
                        </div>
                    
                        <div className='overview-row-text '>
                            <ul> 9 Months </ul>
                        </div>     
                    </div>   

                    <div className="column-tier">
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
                            <div className='myroles-text'> Category</div>
                        </div>
                    
                        <div className='overview-row-text'>
                            <ul> Extended Reality (XR) </ul>
                            <ul> Entertainment </ul>
                            <ul> Computer Vision </ul>
                            <ul> iOS Mobile Development</ul>
                        </div>     
                    </div>   
                </div>
            </div>
        )
    } else if ( screenDevice.isMobile ) {
        return (
            <div className='storyteller-overview-container-mobile'>
                <div className='overview-title'>  Project Overview</div>
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
                        <span> Project Lead</span>
                        <span> UX/UI Designer & Engineer</span>    
                        <span> Technology Research</span>
                    
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
                    
                        <span> 9 Months </span>
                
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
                        <span> Extended Reality (XR) </span>
                        <span> Entertainment</span>
                        <span> Computer Vision</span>
                        <span> iOS Mobile Development</span>
                    </div>               
                </div>
            </div>
        )
       
    } else if ( screenDevice.isTablet ) {
        return (
            <div className='storyteller-overview-container-tablet'>
                <div className='overview-title'>  Project Overview</div>
                <div className='overview-columns'>
                    <div className="column-tier">
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
                            <div className='myroles-text'> My Roles</div>
                        </div>
                      
                        <div className='overview-row-text '>
                            <ul> Project Lead</ul>
                            <ul> UX/UI Designer</ul>
                            <ul> User Research</ul>
                        </div>     
                    </div>   



                    <div className="column-tier">
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
                            <div className='myroles-text'> Timeline</div>
                        </div>
                      
                        <div className='overview-row-text '>
                            <ul> 9 Months</ul>
                        </div>     
                    </div>   

                    <div className="column-tier">
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
                            <div className='myroles-text'> Category</div>
                        </div>
                      
                        <div className='overview-row-text '>
                            <span> Extended Reality (XR) </span>
                            <span> Entertainment</span>
                            <span> Computer Vision</span>
                            <span> iOS Mobile Development</span>
                        </div>     
                    </div>   

                </div>
            </div>
       );
    }
}
   
export default ProjectOverview;

ProjectOverview.prototype = {
    title: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}
