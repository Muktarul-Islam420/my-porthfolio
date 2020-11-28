import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link, Router } from 'react-router-dom';

import './Navbar.css'
const Navbar = () => {
    return (

    <>
        {/* <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
                <Nav.Link href="#link" className="nav-link">Project</Nav.Link>
                <Nav.Link href="/home" className="nav-link">Blog</Nav.Link>
                <Nav.Link href="#link" className="nav-link">CV</Nav.Link>
                <Nav.Link href="https://contact-muktarul.netlify.app/" target="__blank" className="nav-link">ContactMe</Nav.Link>
            
                
                </Nav>
            </Navbar.Collapse>
            </Navbar> */}
           
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-transparent ">
               <div src="/">   
               <img src="https://img.techpowerup.org/201029/profilphoto377.png" className="nav-icon" alt=""/>    
               </div>

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            {/* <Link class="nav-link" href="/"><span style={{color:'#11262e'}}>Home</span> <span class="sr-only">(current)</span> </Link> */}
                            <a class="nav-link" href="/" id="resume-btn">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/project" id="resume-btn">Project </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog" id="resume-btn">Blog </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cv" id="resume-btn">CV </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"  href="https://contact-muktarul.netlify.app/" target="__blank" id="nav-ContactMe">ContactMe</a>
                        </li>
                        
                        </ul>
                    </div>
            </nav>

            

        </div>
        </>
    );
};

export default Navbar;