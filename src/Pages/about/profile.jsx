import React, { useState } from "react";
import Skills from '../skills/Skills';
import ModalBackground from './modals/Background';
import './about.scss';
import Modal from "react-modal";

Modal.setAppElement("#root");

function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModalOne() {
      setIsOpen(!isOpen);
    }

    return (
       <div className="aae_about" id="about">78
            <div className="container">
                <div className="about_title">
                    <h3>About Me</h3>
                </div>
                <div className="content">

                    {/*  Left Side  */}
                    <div
                        className="leftpart"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100">
                        <div className="info">
                            <h3>
                                Hi, I'm <span>Antonio Aranda Eggermont</span>
                            </h3>
                            <p>
                                My background is in  UX engineering, technology design and applications
                                development. My technical skills are mostly around app development using
                                frameworks like Angular, ReactJS, Django, and some iOS. 
                                My programming skills include Python, JavaScript, TypeScript and some SwiftUI
                                for front-end development.
                                For backend development, I have experience developing data APIs in
                                Python/Flask and exposure to Java.
                            </p>
                        </div>
                        <div className="my_skills">
                            <h3 className="title">My Skill Level</h3>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                                ipsum sit nibh amet egestas tellus.
                            </p>
                            <div className="wrapper">
                                <div className="dodo_progress">
                                    <Skills />
                                </div>
                            </div>
                            <div className="seemore_button">
                                <button
                                    type="submit"
                                    className="color"
                                    onClick={toggleModalOne}
                                >
                                See More
                                </button>
                            </div>                        
                        </div>
                    </div>
                </div>           
            </div>
        
              {/* Start About Details Modal */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal about-popup-wrapper"
                overlayClassName="custom-overlay "
                closeTimeoutMS={500}
            >
                <div className="edina_tm_modalbox">
                <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                </button>
                {/* End close icon */}

                <div className="box_inner">
                    <div className="description_wrap scrollable">
                    <ModalBackground />
                    </div>
                </div>
                {/* End box inner */}
                </div>
                {/* End modal box news */}
            </Modal>
            {/* End  About Details Modal */}
            
            
        </div>
    );
};

export default Profile;