import React from "react";
import { render } from "react-dom";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <h1>About Me</h1>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>
                Upcoming Software Engineering Immersive graduate offering a
                strong foundation in software engineering and programming
                principles across multiple platforms.
              </li>
              <li>
                Experienced in object-oriented programming; developing, testing
                and debugging code; designing interfaces.
              </li>
              <li>
                Proficient in programming JavaScript data capture and event
                handling methods via DOM event model.
              </li>
              <li>
                Quickly learn and master new technologies; successful working in
                both team and self-directed settings.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
