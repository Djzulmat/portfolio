import React from "react";
import { render } from "react-dom";

import "./Projects.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">World of Literature</h5>
                <p className="card-text">
                  This App allows users to scroll through the existing database
                  or add an author from around the world, leave a comment about
                  the authors book.
                </p>
                <p className="card-text">
                  Technologies used: HTML, CSS, JavaScript, JQuery, AJAX, Heroku
                  to launch
                </p>
                <a
                  href="https://worldofliteratureabcd.herokuapp.com/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  World of Literature
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Hikr App</h5>
                <p className="card-text">
                  A full stack app built for tracking hikes We wanted to create
                  an app where our users can track their personal hiking
                  adventures. Users can login or signup to our app where they
                  will have access to add new hikes.
                </p>
                <p className="card-text">
                  Technologies used: Python3, Django, HTML5 and CSS.
                </p>
                <a
                  href="https://go-hikr.herokuapp.com/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Hikr
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Project Wayfarer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://wayfarer-react-app.herokuapp.com/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Wayfarer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

// <img className="card-img-top" src="..." alt="Card image cap" />
