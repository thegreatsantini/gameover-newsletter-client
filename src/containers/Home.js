import React, { Component } from "react";
import axios from "axios";
import request from "request";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {}
};

class Home extends Component {
  state = {};

  handleTest = () => {
    // var request = require("request");

    // var options = {
    //   method: "GET",
    //   url: "https://api.smartsheet.com/2.0/sheets",
    //   qs: {
    //     Authorization: "Bearer%20ng2jrwr7dz1nthm4facuydsrp1",
    //     "Content-Type": "application/json"
    //   },
    //   headers: {
    //     'interview-app' : process.env.REACT_APP_ACCESS_TOKEN,
    //     // "Postman-Token": "6954400c-ebd7-4c40-a3f7-5bfcbd147f6f",
    //     "Cache-Control": "no-cache",
    //     Authorization: "Bearer ng2jrwr7dz1nthm4facuydsrp1"
    //   }
    // };

    // request(options, function(error, response, body) {
    //   if (error) throw new Error(error);

    //   console.log(body);
    // });
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
          // href="http://localhost:8080/auth"
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
