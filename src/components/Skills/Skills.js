import React from "react";
import { render } from "react-dom";
import { slideInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

import "./Skills.css";

const Skills = ({ animation, focused }) => {
  return (
    <div className="main">
      <div className="row">
        <div className="col-sm-6">
          <img
            style={focused ? animation : {}}
            src="http://www.american.edu/careercenter/images/skills-header-no-text.jpg"
            height="150px"
          />
        </div>
        <div className="col-sm-6">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python3</li>
            <li>React</li>
            <li>Django</li>
            <li>JQuery</li>
            <li>AJAX</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Radium(Skills);
