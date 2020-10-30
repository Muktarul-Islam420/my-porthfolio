import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
               <div src="/">
               <img src="https://img.techpowerup.org/201029/profilphoto377.png" className="nav-icon" alt=""/>
               </div>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/"><span style={{color:'#11262e'}}>Home</span> <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/project"><span style={{color:'#11262e'}}>Project</span> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog"><span style={{color:'#11262e'}}>Blog</span> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cv"><span style={{color:'#11262e'}}>CV</span> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact"><span style={{color:'#11262e'}}>AboutMe</span> </a>
                        </li>
                        
                        </ul>
                    </div>
            </nav>
        </div>
    );
};

export default Navbar;