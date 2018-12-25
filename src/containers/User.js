import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  p: {
    border: "solid red 2px"
  }
};

class User extends Component {
  state = {
    isLoading: false
  };

  handleTest = () => {
    axios
      .get("http://localhost:8080/gamesheets")
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
  };

  showPopUp = () => {
    this.props.showNotifier("from User", "error");
  };

  // componentDidMount() {
  //     console.log(this.props)
  // }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <p>this is the home page</p>
          <p>{this.props.currentUser.userName}</p>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Query api
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(User);
