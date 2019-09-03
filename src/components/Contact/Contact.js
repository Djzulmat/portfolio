import React from "react";
import { render } from "react-dom";

import "./Contact.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div id="contact" className="">
        <h2>Contact</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="chip">
              <img
                src="http://designmarz.com/images/chanriome_head.png"
                alt="Contact Zafar Kaharov"
                height="20px"
              />
              Zafar Kaharov
            </div>
          </div>
          <div className="col-md-6">
            <ul className="contact-li">
              <li>
                <a
                  href="mailto:zkaharov@gmail.com?subject=Hi bro!&body=I like your skills. let's get in touch!"
                  className=""
                >
                  <i className="fa fa-envelope"></i>zkaharov@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:4155094061" className="">
                  <i className="fa fa-phone"></i>415.509.4061
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zafarkaharov/"
                  target="_blank"
                  className=""
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Djzulmat"
                  target="_blank"
                  className=""
                >
                  <i className="fa fa-github" aria-hidden="true"></i>github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
