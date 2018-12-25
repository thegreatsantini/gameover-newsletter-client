import React from "react";
import LoaderButton from "../components/LoaderButton";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

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

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      userName: "",
      newUser: null,
      open: false,
      isDisabled: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  componentDidMount() {
    console.log(this.props.showNotifier);
  }
  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      const userData = {
        email: this.state.email,
        password: this.state.password,
        userName: this.state.userName
      };
      axios
        .post("http://localhost:8080/auth/server/signup", userData)
        .then(res => {
          this.props.showNotifier(
            "Successfully Signedup. Lets start gaming!",
            "success"
          );
          localStorage.setItem("userId", res.data.userId);
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          this.props.history.push("/");
          this.props.authenticateUser(true, res.data.userId, res.data);
        });
    } catch (e) {
      alert(e.message);
    }
  };

  renderForm(classes) {
    return (
      <Paper className={classes.root} elevation={3}>
        <Typography className={classes.title} gutterBottom component="h1">
          Signup
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
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
            id="filled-userName-input"
            label="Username"
            className={classes.textField}
            type="text"
            autoComplete="email"
            onChange={this.handleChange("userName")}
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
          <TextField
            id="filled-confirmPassword-input"
            label="Confirm Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            onChange={this.handleChange("confirmPassword")}
            margin="normal"
          />
          <LoaderButton
            disabled={this.state.disabled || !this.validateForm()}
            isLoading={this.state.isLoading}
            text="Signup"
            loadingText="Signing up…"
            onClick={this.handleSubmit}
            color="primary"
          />
        </form>
      </Paper>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        {!this.state.newUser && this.renderForm(classes)}
      </React.Fragment>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
