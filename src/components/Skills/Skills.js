import React from "react";
import { render } from "react-dom";
import { slideInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

import "./Skills.css";

const styles = {
  slideInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInLeft, "slideInLeft")
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <StyleRoot>
        <div className="main">
          <div className="row">
            <div className="col-sm-6">
              <img
                style={styles.slideInLeft}
                src="http://www.american.edu/careercenter/images/skills-header-no-text.jpg"
                height="150px"
              />
            </div>
            <div className="col-sm-6">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default Home;
