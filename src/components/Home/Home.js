import React from "react";
import { render } from "react-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Radium, { StyleRoot } from "radium";
import { slideInLeft } from "react-animations";

import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const skillAnimation = {
  animation: {
    animation: "x 2s",
    animationName: Radium.keyframes(slideInLeft, "slideInLeft")
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "home"
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    const self = this;

    Events.scrollEvent.register("begin", function() {
      self.setState({
        tab: arguments[0]
      });
      console.log(arguments[0]);
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    this.scrollToWithContainer();
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    const { tab } = this.state;
    return (
      <StyleRoot>
        <div>
          <NavBar />

          <Element name="home" className="element">
            <Main />
          </Element>

          <Element name="about" className="element">
            <Main />
          </Element>

          <Element name="skills" className="element">
            <Skills
              focused={tab == "skills"}
              animation={skillAnimation.animation}
            />
          </Element>

          <Element name="projects" className="element">
            <Main />
          </Element>

          <Element name="contact" className="element">
            <Contact />
          </Element>

          <a onClick={this.scrollToTop}>To the top!</a>
        </div>
      </StyleRoot>
    );
  }
}

export default Home;
