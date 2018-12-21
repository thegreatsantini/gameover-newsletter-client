import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {}
};

class Home extends Component {
  state = {};

  handleTest = () => {
    axios
      .get("http://localhost:8080/gamesheets")
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
  };
  async componentWillMount() {
    console.log(this.props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <p>this is the home page</p>
        <p>{this.props.token}</p>
        <Button
          onClick={this.handleTest}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Query api
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
