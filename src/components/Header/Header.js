import React from 'react';
import './Header.css'
import { SiFacebook, SiGithub, SiLinkedin, SiDribbble } from "react-icons/si";
const Header = () => {
    return (
        <div className="header-container">
            <div className="header-sub-container">
                <div className="profileImage-box">
                    <img src="https://img.techpowerup.org/201029/profilphoto.png" className="profile-image" alt=""/>
                </div>
                <div className="profile-description-box">
                    <h1 className="name">Muktarul Islam</h1>
                    <p style={{marginLeft:'22px'}}><strong>Full stack Web Developer</strong></p>
                    <div className="icon-box ml-4">
                        <SiFacebook href="/" size="2em" className="mr-3 profile-icon"></SiFacebook>
                        <SiGithub href="/" size="2em" className="mr-3 profile-icon"></SiGithub>
                        <SiLinkedin href="/" size="2em" className="mr-3 profile-icon"></SiLinkedin>
                        <SiDribbble href="/" size="2em" className="mr-3 profile-icon"></SiDribbble>
                    </div>
                    
                </div>
           </div>
           <div className="resume-btn">
                <div className="resume-btn-text align-self-center"> 
                   <p style={{ marginLeft:'40%', marginTop:'10px'}}><strong>Download Resume</strong></p>
                   </div>
                   </div>
        </div>
    );
};

export default Header;