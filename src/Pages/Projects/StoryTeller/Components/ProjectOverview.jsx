import React from 'react';
import PropTypes from 'prop-types';
import './ProjectOverview.scss';
import MyRolesIcon from '../Images/MyRolesIcon.png';
import TimelineIcon from '../Images/TimelineIcon.png'; 
import CategoryIcon from '../Images/CategoryIcon.png'; 


function ProjectOverview(props) {
    const screenDevice = props.screenDevice;
    const title = props.title;

    if ( screenDevice.laptop ) {
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
    } else if (  screenDevice.xs || screenDevice.sm  ) {
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
       
    } else if (  screenDevice.lg || screenDevice.md  ) {
        return (
            <div className='storyteller-overview-container-lgmd'>
                <div className='overview-title'>  Project Overview</div>
                <div className="row-overview">
                    <div className='column-content'> 
                        <img
                            src = { MyRolesIcon }
                            style = {{
                                width: "42px",
                                height: "42px"
                            }} 
                        />
                    </div>
                    <div className='column-content'> 
                        <img
                            src = { MyRolesIcon }
                            style = {{
                                width: "42px",
                                height: "42px"
                            }} 
                        />
                    </div>
                    <div className='column-content'> 
                        <img
                            src = { MyRolesIcon }
                            style = {{
                                width: "42px",
                                height: "42px"
                            }} 
                        />
                    </div>
                </div>
                <div className="row-overview">
                    <div className='column-content'> 
                        <div className='myroles-title'> My Roles</div>
                    </div>
                    <div className='column-content'> 
                        <div className='myroles-title'> Timeline</div>
                    </div>
                    <div className='column-content'> 
                        <div className='myroles-title'> Category</div>
                    </div>
                </div>
                <div className="row-overview">
                    <div className='column-content'>
                        <div className='myroles-text'> Project Lead</div>
                        <div className='myroles-text'> UX/UI Designer</div>
                        <div className='myroles-text'> User Research</div>
                    </div>
                    <div className='column-content'>
                        <div className='myroles-text'> 9 Months</div>
                    </div>
                    <div className='column-content'>
                        <div className='myroles-text'> Extended Reality (XR) </div>
                        <div className='myroles-text'> Entertainment</div>
                        <div className='myroles-text'> Computer Vision</div>
                        <div className='myroles-text'> iOS Mobile Development</div>
                    </div>
                </div>

        

                {/* 
                <div className='overview-columns'>
                    <div className="column-tier">
                        <div className='overview-row-icon'>
                            <div className='image-icon'>
                                <img
                                    src = { MyRolesIcon }
                                    style = {{
                                        width: "42px",
                                        height: "42px",
                                        alignSelf: 'center',
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
                */}
            </div>
       );
    }
}
   
export default ProjectOverview;

ProjectOverview.prototype = {
    title: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired
}
