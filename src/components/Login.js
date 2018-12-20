import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { getToken } from "../utils";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Login extends Component {
  // handleLogin() {
  //   axios
  //     .get(`https://app.smartsheet.com/b/authorize?response_type=code&client_id=${process.env.REACT_APP_APP_CLIENT_ID}&scope=READ_SHEETS`, {
  //       header : {
  //         'Access-Control-Allow-Origin': '*',
  //       //   Content_Type: "x-www-form-urlencoded",
  //       //   Authorization : `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
  //       }
  //     })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }
  componentDidMount() {
    if (this.props.match.params.token) {
      console.log(this.props.match.params.token);
      this.props.authenticateUser(`Bearer ${this.props.match.params.token}`);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {!this.props.isAuthenticated ? (
          <div>
            <Button
              // onClick={this.handleLogin}
              variant="contained"
              href="http://localhost:8080/auth"
              color="primary"
              className={classes.button}
            >
              Login to smartsheet
            </Button>
          </div>
        ) : (
          <Redirect to={"/user/gamer"} />
        )}
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
