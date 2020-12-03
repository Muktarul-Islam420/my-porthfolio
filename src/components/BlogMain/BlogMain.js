import React, { useEffect } from 'react';
import './BlogMain.scss'
import {FaExternalLinkAlt} from 'react-icons/fa'
import Aos from 'aos';
import "aos/dist/aos.css"
const BlogMain = ({blog}) => {
    useEffect(() =>{
        Aos.init({duration: 4000});
      },[])
    const {name,image,description,webLink} = blog;
    return (
        <div className="col-md-4" data-aos="fade-up">
            <div className="blog-container">
                <h4 className="blog-name">{name}</h4>
                <img src={image} alt="" className="blog-img mb-3"/>
                <div className="blog-details-container">
                    <p className="blog-details">{description}</p>

                    <div className="blog-seeMore">
                    <a href={webLink} target="_blank" className="see-Icon"> <FaExternalLinkAlt size="1rem"  className="mr-4 profile-icon"/></a>
                    </div>
                    <br/>
                </div>
            </div>
            
        </div>
    );
};

export default BlogMain;