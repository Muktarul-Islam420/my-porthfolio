import React, { useEffect } from 'react';
import './Home.scss'
import Aos from 'aos';
import "aos/dist/aos.css"

import { SiFacebook, SiGithub, SiLinkedin, SiDribbble } from "react-icons/si";
import { Link } from 'react-router-dom';
import MyDescription from '../MyDescription/MyDescription';
import Project from '../Project/Project';
import Blog from '../Blog/Blog';
import CV from '../CV/CV';

const Home = () => {
  useEffect(() =>{
    Aos.init({duration: 3000});
  },[])

    return (
        <>
        <div className="header-container">
        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="header-sub-container">
                <div className="profileImage-box">
                    <img src="https://img.techpowerup.org/201029/profilphoto.png" className="img-responsive profile-image" alt=""/>
                </div>
                <div className="profile-description-box">

                    <div className="my-name-title mt-4 ml-center">
                    <h1>Muktarul Islam</h1>
                    </div>
                        
                    <MyDescription/>
                    <p className="my-info">Hi, I'm full stack web developer, passionate about creating and developing web interfaces.I have many years of experience in this area of work,with multiple quality projects</p>               
                    
                    
                    <div className="icon-box ml-4" id="icon-box"  data-aos="fade-right">
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
           
           <div className="resume-btn" data-aos="fade-left"></div>
           <p className="resume-btn-text" data-aos="fade-left">
           <a href="https://drive.google.com/file/d/11GdUbf0ajCuICHKdnYa_uYhSlmiqPsX9/view?usp=sharing" target="_blank" id="resume-btn">
               <strong>Download Resume</strong>
               </a>
               </p>
               <br/>
        </div>
            <br/>
            <br/>
        <Project></Project>
        <br/>
        <br/>
        <Blog></Blog>
        <br/>
        <br/>
        <CV></CV>
        </>
    );
};

export default Home;