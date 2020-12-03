import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
const NavBar2 = () => {
    return (
        <div>
           
           <Navbar fixed="top"  expand="lg" className="NavBar">
            <Navbar.Brand href="#home"><img src="https://img.techpowerup.org/201029/profilphoto377.png"  className="nav-icon" alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home" className="nav-link" id="nav-link">Home</Nav.Link>
                <Nav.Link href="/project" className="nav-link"  id="nav-link">Project</Nav.Link>
                <Nav.Link href="/blog" className="nav-link"  id="nav-link">Blog</Nav.Link>
                <Nav.Link href="/cv" className="nav-link"  id="nav-link">CV</Nav.Link>
                <Nav.Link href="/ContactMe" href="https://contact-muktarul.netlify.app/" target="__blank" id="nav-ContactMe">ContactMe</Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
        </div>
    );
};

export default NavBar2;