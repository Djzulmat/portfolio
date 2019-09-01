import React from "react";
import { render } from "react-dom";

import "./Main.css";

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
      <div className="main">
        <div className="row">
          <div className="col-sm-6">Hi I am Zafar</div>
          <div className="col-sm-6">I enjoy coding</div>
        </div>
      </div>
    );
  }
}

export default Home;
