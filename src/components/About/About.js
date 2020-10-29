import React from 'react';
import './About.css'
import { FaUserCircle, FaHeadset } from "react-icons/fa";
import {  AiFillPhone, AiOutlineMail } from "react-icons/ai";
import {FiShoppingBag} from "react-icons/fi";
import {RiShieldStarLine} from "react-icons/ri"
const About = () => {
    return (
        <div className="about-container mt-5">
            <div style={{marginLeft:'40%'}} className="about-title-box">
                <h6 className="subtitle-text">My Intro</h6>
                <br/>
                <h3 style={{color:' #cc4b2c'}}>About Me</h3>
                <br/>
            </div>
            <div className="row">
                <div className="col-md-6">
                <div className="about-details-container">
                    <div className="about-details-text">
                    <p>Hi, I'm full stack web developer, passionate about creating and developing web interfaces.I have many years of experience in this area of work,with multiple quality projects</p>
                    </div>

                    <div>
                        <img src="https://img.techpowerup.org/201029/about.jpg" className="about-image" alt=""/>
                    </div>
                </div>
                </div>


                <div className="col-md-6">
                    <div className="about-contact-container">

                        <h4 className="subtitle-text">Information</h4>
                        <div className="information-container">
                            <div className="information-data">
                                <div className="data-name d-flex">
                                <FaUserCircle size="2rem"  className="mr-4 profile-icon"/>
                                <p ><strong>Muktarul Islam</strong></p>
                                </div>
                                <div className="data-name d-flex">
                                    <AiFillPhone size="2rem"  className="mr-4 profile-icon"/>
                                    <p><strong>+8801701969395</strong></p>
                                </div>
                                <div className="data-name d-flex">
                                    <AiOutlineMail size="2rem"  className="mr-4 profile-icon"/>
                                    <p><strong>muktarul@yahoo.com</strong></p>
                                </div>
                            </div>
                        </div>
                            <br/>

                        <div className="experience-container">
                            <h4 className="subtitle-text">Experience & Support</h4>
                            <div className="data-name d-flex">
                                <RiShieldStarLine size="2rem" className="mr-4 profile-icon"/>
                                
                                <div className="experience-tools">
                                    <p><strong> years of job</strong></p>
                                    <p>Experience</p>
                                </div>
                            </div>
                            <div className="data-name d-flex">
                                <FiShoppingBag  size="2rem" className="mr-4 profile-icon"/>

                                <div className="experience-tools">
                                    <p><strong> 50+ Projects</strong></p>
                                    <p>Completed</p>
                                </div>
                            </div>
                            <div className="data-name d-flex">
                            <FaHeadset size="2rem" className="mr-4 profile-icon"/>

                            <div className="experience-tools">
                                    <p><strong> Support</strong></p>
                                    <p>24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default About;