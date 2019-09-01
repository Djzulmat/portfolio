import React from "react";
import { Link } from "react-scroll";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top ">
      <ul className="nav">
        <li className="nav-item">
          <Link
            activeClass="active"
            className="home nav-link"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            className="about nav-link"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            className="skills nav-link"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            className="projects nav-link"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            className="contact nav-link"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
