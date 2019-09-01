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

import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
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
    return (
      <div>
        <NavBar />

        <Element name="home" className="element">
          <Main />
        </Element>

        <Element name="about" className="element">
          <Main />
        </Element>

        <Element name="skills" className="element">
          <Skills />
        </Element>

        <Element name="projects" className="element">
          test 4
        </Element>

        <Element name="contact" className="element">
          <Contact />
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    );
  }
}

export default Home;
