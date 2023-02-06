import React,  {useState}  from 'react';
// import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { FaTimes} from "react-icons/fa";
import siteLogo from  "../../assets/logos/AAELogo.png";

function Header() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const controlMobileMenu = (e) =>{
        setToggleMobileMenu(!toggleMobileMenu);
    }
    const closeMenu = (e) =>{
        setToggleMobileMenu(false);
    }

    return (
        <>
            <header className="header_area transparent_header">
                
                {/* 
                <div className="site_menu">¡
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="brand">
                               <img src='' className="img-fluid" alt="logo" />
                            </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="primary_menu" id="menu">
                                    <nav className="main_menu">
                                        <ul>
                                            <li className="menu-item">Home</li>
                                            <li className="menu-item">About Us</li>
                                            <li className="menu-item">Services</li>
                                            <li className="menu-item">Portfolio</li>
                                            <li className="menu-item"><a href="https://www.cnn.com">Blog</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item">Blog</li>
                                                    <li className="menu-item">Blog Details</li>
                                                </ul>
                                            </li>
                                            <li className="menu-item">Contact Us</li>
                                            <li className="menu-item">Hire Us</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}

                <div className="container">

                    <div className="mobile_wrapper">
                        <div className="mobile_header">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="brand_logo">
                                       <img src={siteLogo}  alt="site logo"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="menu_button">
                                        <div className={toggleMobileMenu ? "menu_icon active" : "menu_icon"} onClick={controlMobileMenu}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={toggleMobileMenu ? "sidenav_menu active" : "sidenav_menu"}>
                            <div className="close_icon" onClick={closeMenu}>
                                <a href="#" className="close_btn"><i><FaTimes/></i></a>
                            </div>
                            <ul className="sidebar-menu">
                                <li className="menu-item"><a> Home</a></li>
                                <li className="menu-item"><a> About Me</a></li>
                                <li className="menu-item"><a> Portfolio</a></li>
                                <li className="menu-item"><a> Contact Me</a></li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </header>
        </>
    )
}

export default Header;