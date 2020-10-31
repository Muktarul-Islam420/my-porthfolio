import React from 'react';
import './Home.css'
import { SiFacebook, SiGithub, SiLinkedin, SiDribbble } from "react-icons/si";
import { Link } from 'react-router-dom';

const Home = () => {
    const CVlink = "https://drive.google.com/file/d/1asnINlskHLtxDlH7s5u-eqgcqsrsP284/view";

    const downloadBtn = (e) => {
       CVlink = e.target.value;
    }

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
           
           <div className="resume-btn"></div>
           <p className="resume-btn-text">
           <a href="https://drive.google.com/file/d/1asnINlskHLtxDlH7s5u-eqgcqsrsP284/view" target="_blank" >
               <strong className="">Download Resume</strong>
               </a>
               </p>
           
          
        </div>
    );
};

export default Home;