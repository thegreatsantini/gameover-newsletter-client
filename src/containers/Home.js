import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

class Home extends Component {
  async componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <p>this is the home page</p>
        <p>{this.props.token}</p>
      </div>
    );
  }
}

export default Home;
