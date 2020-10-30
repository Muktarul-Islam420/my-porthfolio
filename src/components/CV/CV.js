import React from 'react';
import './CV.css'
import { FaUserCircle, FaHeadset } from "react-icons/fa";
import {  AiFillPhone, AiOutlineMail } from "react-icons/ai";
import {FiShoppingBag} from "react-icons/fi";
import {RiShieldStarLine} from "react-icons/ri"
import { GoCode } from 'react-icons/go';
import {ImEarth} from 'react-icons/im'
import {SiGooglescholar} from "react-icons/si"
const CV = () => {
    return (
        <div className='container'>
            <div className="cv-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="small-half-width">
                        <img src="https://img.techpowerup.org/201029/profilphoto.png" className="cv-img" alt=""/> 
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="cv-name-text">
                            <h1 className="cv-name">Muktarul Islam</h1>
                            <p className="cv-title"> <strong>Frontend web developer</strong></p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                    <div className="information-container">
                            <div className="information-data">
                                <div className="cv-info">
                                    <h5>Info</h5>
                                </div>
                                <br/>

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
                    </div>
                    <div className="col-md-8">
                        <div className="cv-skill">
                        <h3 className="subtitle-text">Skills</h3>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                            <h4 className="subtitle-text">Frontend Skills</h4>

                                <div className="frontend-sub-container">
                                <div className="html-box">
                                    <h6>HTML</h6>
                                    <div className="d-flex">
                                        <div className="html mr-4"></div>
                                        <p>80%</p> 
                                    </div>
                                </div>

                                <div className="html-box">
                                    <h6>CSS</h6>
                                    <div className="d-flex">
                                        <div className="html mr-4"></div>
                                        <p>80%</p> 
                                    </div>
                                </div>

                                <div className="html-box">
                                    <h6>Javascript</h6>
                                    <div className="d-flex">
                                        <div className="JS mr-4"></div>
                                        <p>90%</p> 
                                    </div>
                                </div>

                                <div className="html-box">
                                    <h6>Bootstrap</h6>
                                    <div className="d-flex">
                                        <div className="html mr-4"></div>
                                        <p>80%</p> 
                                    </div>
                                </div>

                                <div className="html-box">
                                    <h6>React</h6>
                                    <div className="d-flex">
                                        <div className="JS mr-4"></div>
                                        <p>80%</p> 
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="subtitle-text">Backend Skills</h4>

                                <div className="frontend-sub-container">   
                                <div className="html-box">
                                    <h6>NODE JS</h6>
                                    <div className="d-flex">
                                        <div className="html mr-4"></div>
                                        <p>80%</p> 
                                    </div>
                                </div>

                                <div className="html-box">
                                    <h6>PHP</h6>
                                    <div className="d-flex">
                                        <div className="php mr-4"></div>
                                        <p>20%</p> 
                                    </div>
                                </div>

                                <div className="html-box">
                                    <h6>Firebase</h6>
                                    <div className="d-flex">
                                        <div className="JS mr-4"></div>
                                        <p>90%</p> 
                                    </div>
                                </div>

                                <div className="html-box">
                                    <h6>Python</h6>
                                    <div className="d-flex">
                                        <div className="php mr-4"></div>
                                        <p>20%</p> 
                                    </div>
                                </div>

                                <div className="html-box">
                                    <h6>React</h6>
                                    <div className="d-flex">
                                        <div className="JS mr-4"></div>
                                        <p>80%</p> 
                                    </div>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                


                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                        <div className="cv-skill mt-5 mb-3">
                        <h3 className="subtitle-text">Experience & Projects</h3>
                        </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="experience-container">
                                <h4 className="subtitle-text">Experience</h4>
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
                        <div className="col-md-6">
                            <div className="experience-container">
                                <h4 className="subtitle-text">Recent Projects</h4>
                                <div className="data-name">
                                    <h6 className="cv-project">Doctors Portal</h6>
                                   <a href="https://github.com/Muktarul-Islam420/doctor-portal-web">
                                   <GoCode size="2rem" className="mr-4 profile-icon"/>
                                   </a>
                                   
                                    <a href="https://doctors-portal-8165f.web.app/">
                                    <ImEarth size="2rem" className="mr-4 profile-icon"/>
                                    </a>
                                </div>
                                <br/>

                                <div className="data-name">
                                    <h6 className="cv-project">Creative Agency</h6>
                                   <a href="https://github.com/Muktarul-Islam420/creative-agency-client-site">
                                   <GoCode size="2rem" className="mr-4 profile-icon"/>
                                   </a>
                                   
                                    <a href="https://creative-agency-4b26f.web.app/">
                                    <ImEarth size="2rem" className="mr-4 profile-icon"/>
                                    </a>
                                </div>
                                <br/>

                                <div className="data-name">
                                    <h6 className="cv-project">Volunteer Network</h6>
                                   <a href="https://github.com/Muktarul-Islam420/volunteerNetwork-service-client">
                                   <GoCode size="2rem" className="mr-4 profile-icon"/>
                                   </a>
                                   
                                    <a href="https://volunteer-service-2ee59.web.app/">
                                    <ImEarth size="2rem" className="mr-4 profile-icon"/>
                                    </a>
                                </div>
                                <br/>

                                <div className="data-name">
                                    <h6 className="cv-project">Hard Rock Lyric</h6>
                                   <a href="https://github.com/Muktarul-Islam420/hard-rock-solution">
                                   <GoCode size="2rem" className="mr-4 profile-icon"/>
                                   </a>
                                   
                                    <a href="https://muktarul-islam420.github.io/hard-rock-solution/index.html">
                                    <ImEarth size="2rem" className="mr-4 profile-icon"/>
                                    </a>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-4">
                        <div className="cv-info">
                            <h5>Language</h5>
                        </div>
                        <br/>

                        <ul>
                            <li>English -fluent</li>
                            <li>Bengali - Native </li>
                        </ul>
                    </div>

                    <div className="col-md-8">
                        <div className="cv-skill mt-5 mb-3">
                        <h3 className="subtitle-text">Education</h3>
                        </div>

                        <div className="experience-container">
                               
                                <div className="data-name d-flex">
                                    <SiGooglescholar size="2rem" className="mr-4 profile-icon"/>
                                    
                                    <div className="experience-tools">
                                        <h5><strong>Diploma in Engineering</strong></h5>
                                            <p>Computer Science & Engineering</p>
                                        <p><strong> Aptouch Polytechnic Institute</strong></p>
                                        <p>2016 - 2020</p>
                                    </div>
                                </div>
                                <div className="data-name d-flex">
                                    <SiGooglescholar  size="2rem" className="mr-4 profile-icon"/>

                                    <div className="experience-tools">
                                    <h5><strong>SSC</strong></h5>
                                        <p><strong> Dandapal High School</strong></p>
                                        <p>2011-2016</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>


            </div>
        </div>
        
    );
};

export default CV;