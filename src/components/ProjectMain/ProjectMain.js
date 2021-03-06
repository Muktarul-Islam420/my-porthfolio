import React, { useEffect } from 'react';
import './ProjectMain.scss'
import { GoCode } from 'react-icons/go';
import {ImEarth} from 'react-icons/im';
import Aos from 'aos';
import "aos/dist/aos.css"
import myBg from '../../videos/bgVideo.mp4'
const ProjectMain = ({project}) => {
    useEffect(() =>{
        Aos.init({duration: 4000});
      },[])

  
    const {name,image,details,feature,technology,screenshots,webLink, codeLink} = project;
    const {T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12} = technology;
    const {feature1,feature2,feature3,feature4,feature5,feature6,feature7,feature8} = feature;
    return (
        <>
            {/* <video
                autoPlay
                loop
                muted
                style={{
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                transform:"translate(-50%, -50%)",
                height: '100%',
                objectFit:"cover",
               
                zIndex:"-1"
                }}>

                <source src={myBg} type="video/mp4"/>
            </video> */}

        <div className="col-md-6">
            <div className="project-container" data-aos="fade-up">
                <img src={image} className="project-img" alt=""/>
                <div className="project-description">
                    <h4 className="project-name "><span className="subtitle-text">Project Name:</span> <span className="project-name-sub">{name}</span></h4>
                    <p className="project-details mt-3 mb-3 ml-4 mr-4">{details}</p>
                   <div className="project-list-container">
                       <div className="row">
                           <div className="col-md-6">
                               <h4 className="subtitle-text">Feature:</h4>
                                <ul>
                            <li>{feature1}</li>
                            <li>{feature2}</li>
                            <li>{feature3}</li>
                            <li>{feature4}</li>
                            <li>{feature5}</li>
                            <li>{feature6}</li>
                            <li>{feature7}</li>
                            <li>{feature8}</li>
                                </ul>
                           </div>
                           <div className="col-md-6">
                           <h4 className="subtitle-text">Technology:</h4>
                                <ul>
                            <li>{T1}</li>
                            <li>{T2}</li>
                            <li>{T3}</li>
                            <li>{T4}</li>
                            <li>{T5}</li>
                            <li>{T6}</li>
                            <li>{T7}</li>
                            <li>{T8}</li>
                            <li>{T9}</li>
                                </ul>
                           </div>
                       </div>
                   </div>
                    
                </div>

                <div className="link-container d-flex">
                   <div className="code-link">
                       <h6 className="project-details">Code</h6>
                   <a href={codeLink} target="_blank"><GoCode size="2rem"  className="mr-4 profile-icon"/></a>
                   </div>

                   <div className="website">
                   <h6 className="project-details">Live Site</h6>
                   <a href={webLink} target="_blank"><ImEarth size="2rem"  className="mr-4 profile-icon"/></a>
                   </div>
                </div>
                <br/>
            </div>
        </div>
        </>
    );
};

export default ProjectMain;