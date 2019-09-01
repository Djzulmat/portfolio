import React from 'react';
import './NavBar.css'



const NavBar = () => {
    return (
       <nav>
        <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
    )

};

export default NavBar;

