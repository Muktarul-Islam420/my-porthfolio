import React from 'react';
import './Experience.css'
const Experience = () => {
    return (
        <div className="experience-container">
            <br/>
            <br/>
            <div style={{marginLeft:'40%'}} className="about-title-box">
                <h6 className="subtitle-text">Why Choices Me</h6>
                <br/>
                <h3 style={{color:' #cc4b2c'}}>My Experience</h3>
                <br/>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="frontend-container">
                        <h3 className="subtitle-text">Frontend Experience</h3>

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
                   
                </div>
                <div className="col-md-6">
                
                    <div className="frontend-container">
                        <h3 className="subtitle-text">Backend Experience</h3>

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
    );
};

export default Experience;