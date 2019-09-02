import React from "react";
import { Link } from "react-scroll";

import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home"
    };
  }

  handleSetActive = to => {
    this.setState({ active: to });
  };

  render() {
    const { active } = this.state;

    return (
      <nav className="navbar navbar-expand-md fixed-top ">
        <ul className="nav">
          <li className={active == "home" ? "nav-item active" : "nav-item"}>
            <Link
              activeClass="active"
              className="home nav-link"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Home
            </Link>
          </li>
          <li className={active == "about" ? "nav-item active" : "nav-item"}>
            <Link
              activeClass="active"
              className="about nav-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              About
            </Link>
          </li>
          <li className={active == "skills" ? "nav-item active" : "nav-item"}>
            <Link
              activeClass="active"
              className="skills nav-link"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Skills
            </Link>
          </li>
          <li className={active == "projects" ? "nav-item active" : "nav-item"}>
            <Link
              activeClass="active"
              className="projects nav-link"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Projects
            </Link>
          </li>
          <li className={active == "contact" ? "nav-item active" : "nav-item"}>
            <Link
              activeClass="active"
              className="contact nav-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
