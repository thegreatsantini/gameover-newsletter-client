import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  // async componentWillMount() {
  //   console.log(this.props);
  // }

  renderLander = () => {
    return <p>LANDING PAGEING NOT LOGGED IN</p>;
  };

  render() {
    const { classes, isAuthenticated } = this.props;
    return (
      <React.Fragment>
        {isAuthenticated ? (
          <div className={classes.root}>
            <p>this is the home page</p>
            <p>{this.props.userId}</p>
            <Button
              component={Link}
              to="/sandb
              ox"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Query api
            </Button>
          </div>
        ) : (
          this.renderLander()
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
