import React from "react";
import LoaderButton from "../components/LoaderButton";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    margin: "90px 80px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },

  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  title: {
    fontSize: "50px",
    width: "100%",
    textAlign: "center",
    maxWidth: 500,
    margin: "0 auto",
    textDecoration: "underline"
  }
});

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      email: "",
      password: "",
      open: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  // handleSubmit = event => {
  //   axios
  //     .get("http://localhost:8080/auth/server/username/password")
  //     .then(res => console.log("res", res))
  //     .catch(err => {
  //       alert(err.message);
  //       console.log("err", err);
  //     });
  // };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("http://localhost:8080/auth/server/login", userData)
      .then(res => {
        console.log(res);
        if (res.data.message === "User not recognized") {
          this.props.showNotifier(
            "User not recognized, please go to signup to create a profile",
            "warning"
          );
          this.setState({
            isLoading: false
          });
        } else if (res.data.message === "incorrect email or password") {
          this.props.showNotifier(res.data.message, "error");
          this.setState({
            isLoading: false
          });
        } else {
          localStorage.setItem("userId", res.data.userId);
          this.props.history.push("/");
          this.props.authenticateUser(true, res.data.userId);
        }
      })
      .catch(err => {
        console.log(err);
        alert("User already exists or ");
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={3}>
        <Typography className={classes.title} gutterBottom component="h1">
          Login
        </Typography>
        <form
          onSubmit={this.handleSubmit}
          className={classes.container}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            autoComplete="email"
            onChange={this.handleChange("email")}
            margin="normal"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            onChange={this.handleChange("password")}
            margin="normal"
          />
          <LoaderButton
            disabled={!this.validateForm()}
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
            onClick={this.handleSubmit}
            color="primary"
          />
        </form>
      </Paper>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
