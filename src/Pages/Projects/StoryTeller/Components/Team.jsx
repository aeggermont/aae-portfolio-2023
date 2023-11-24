import React from 'react';
import PropTypes from 'prop-types';
import './Team.scss';

function Team (props) {
    const screenDevice = props.screenDevice;
    const title = props.title;
    const members = props.members;

    const membersRender = members.map(
        (member) => {
          
        }
    )

    if ( screenDevice.isDesktopOrLaptop ) {
        return (
            <>
                <div className='storyteller-team-container-desktop'>
                    <div className='team-title'> {title}</div>
                    <div className='team-content'> 
                        <div className='team-member '> 
                            <div className='member-name'> {members[0].name} </div>
                            <div className='member-role'> {members[0].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[1].name} </div>
                            <div className='member-role'> {members[1].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[2].name} </div>
                            <div className='member-role'> {members[2].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[3].name} </div>
                            <div className='member-role'> {members[3].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[4].name} </div>
                            <div className='member-role'> {members[4].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[5].name} </div>
                            <div className='member-role'> {members[5].role} </div>
                        </div>                    
                    </div>
                </div>
            </>
        )
    
    } else if ( screenDevice.isTablet ) {
        return (
            <>
                <div className='storyteller-team-container-tablet'>
                    <div className='team-title'> {title}</div>
                    <div className='team-content'> 
                        <div className='team-member '> 
                            <div className='member-name'> {members[0].name} </div>
                            <div className='member-role'> {members[0].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[1].name} </div>
                            <div className='member-role'> {members[1].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[2].name} </div>
                            <div className='member-role'> {members[2].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[3].name} </div>
                            <div className='member-role'> {members[3].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[4].name} </div>
                            <div className='member-role'> {members[4].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[5].name} </div>
                            <div className='member-role'> {members[5].role} </div>
                        </div>                    
                    </div>
                </div>
            </>
        )
        
    } else if ( screenDevice.isMobile ) {
        return (
            <>
                 <div className='storyteller-team-container-mobile'>
                    <div className='team-title'> {title}</div>
                    <div className='team-content'> 
                        <div className='team-member '> 
                            <div className='member-name'> {members[0].name} </div>
                            <div className='member-role'> {members[0].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[1].name} </div>
                            <div className='member-role'> {members[1].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[2].name} </div>
                            <div className='member-role'> {members[2].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[3].name} </div>
                            <div className='member-role'> {members[3].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[4].name} </div>
                            <div className='member-role'> {members[4].role} </div>
                        </div>
                        <div className='team-member '> 
                            <div className='member-name'> {members[5].name} </div>
                            <div className='member-role'> {members[5].role} </div>
                        </div>                    
                    </div>
                </div>
            </>
        )
    }
}

export default Team;

Team.prototype = {
    title: PropTypes.string.isRequired,
    screenDevice: PropTypes.object.isRequired,
    members: PropTypes.array
}