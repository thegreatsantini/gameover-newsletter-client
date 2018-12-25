import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {}
};

// ***change this to stateless function component***
class Users extends Component {
  state = {};

  handleTest = () => {
    axios
      .get("http://localhost:8080/gamesheets")
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
  };
  async componentWillMount() {
    
  }

  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <h1>USERS Component</h1>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Users);
