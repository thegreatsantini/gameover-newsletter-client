import React, { Component } from "react";
// import axios from "axios";
import { followUser, getUsers } from "../api";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {}
};

// ***change this to stateless function component***
class Users extends Component {
  state = {};

  addFriend = async (currentUser, friendId) => {
    const result = await followUser(currentUser, friendId);
    console.log(result);
  };
  // async componentDidMount() {
  //   const userData = await axios.get(`http://localhost:8080/usersSheet/all`);
  //   console.log(userData)
  // }
  fetchUsers = async () => {
    const result = await getUsers();
    console.log(result);
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <h1>USERS Component</h1>
        <Button
          onClick={this.addFriend.bind(
            null,
            this.props.userId,
            "f7f0b3d0-073c-11e9-a2f0-e5c5ec8ad0ca"
          )}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          follow user
        </Button>
        <Button
          onClick={this.fetchUsers}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Get Users
        </Button>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Users);
