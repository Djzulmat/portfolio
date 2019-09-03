import React from "react";
import { render } from "react-dom";
import "./Main.css";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  //
  // componentDidMount() {}
  //
  // componentWillUnmount() {}
  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="">Hi, there!</h2>
            <img
              src="http://designmarz.com/images/chanriome.png"
              alt="Nick Marazzo - cartoon"
            />
          </div>
          <div className="col-sm-6">
            <h1 className="intro">I'm a Full-Stack Developer</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
