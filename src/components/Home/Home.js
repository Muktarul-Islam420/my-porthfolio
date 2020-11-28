import React from 'react';
import './Home.css'

import { SiFacebook, SiGithub, SiLinkedin, SiDribbble } from "react-icons/si";
import { Link } from 'react-router-dom';
import MyDescription from '../MyDescription/MyDescription';

const Home = () => {
  

    return (
        <div className="header-container">
            <div className="header-sub-container">
                <div className="profileImage-box">
                    <img src="https://img.techpowerup.org/201029/profilphoto.png" className="profile-image" alt=""/>
                </div>
                <div className="profile-description-box">

                    <div class="my-name-title">
                    <h1 >Muktarul Islam</h1>
                    </div>
                            
                    {/* <p style={{marginLeft:'22px'}}><strong>Full stack Web Developer</strong></p> */}
                    <MyDescription />
                    <p className="my-info">Hi, I'm full stack web developer, passionate about creating and developing web interfaces.I have many years of experience in this area of work,with multiple quality projects</p>               
                    
                    {/* <div class="me">Escape</div> 
                    <div class="me"> 
                    <span>into amazing experiences</span>
                    </div> */}
                    
                    <div className="icon-box ml-4" id="icon-box">
                        <a href="https://facebook.com/md.muktarulkhanakash" target="_blank">
                        <SiFacebook href="https://facebook.com/md.muktarulkhanakash"  size="2em" className="mr-3 profile-icon"> </SiFacebook>
                        </a>

                        <a href="https://github.com/Muktarul-Islam420" target="_blank">
                        <SiGithub  target="_blank" size="2em" className="mr-3 profile-icon"></SiGithub>
                        </a>

                        <a  href="https://www.linkedin.com/in/muktarul-khan-akash-r/" target="_blank" >
                        <SiLinkedin size="2em" className="mr-3 profile-icon"></SiLinkedin>
                        </a>
                        
                        <a href="https://dribbble.com/muktarul" target="_blank">
                        <SiDribbble  size="2em" className="mr-3 profile-icon"></SiDribbble>
                        </a>
                    </div>
                    
                </div>
           </div>
           
           <div className="resume-btn"></div>
           <p className="resume-btn-text">
           <a href="https://drive.google.com/file/d/1DT1fDqtNxLNr6ZZnVaXL6eH0kI7vvlAW/view?usp=sharing" target="_blank" id="resume-btn">
               <strong>Download Resume</strong>
               </a>
               </p>
           
        </div>
    );
};

export default Home;