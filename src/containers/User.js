import React, { Component } from "react";
// import axios from "axios";
import Button from "@material-ui/core/Button";
import { currentUser, removeGame, removeFriend, visitFriend } from "../api";
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

  visitUser = async friendId => {
    const result = await visitFriend(friendId);
    console.log(result);
  };

  getCurrentUser = async userId => {
    const result = await currentUser(userId);
    console.log(result);
  };

  unfollow = async (currentUser, friendId) => {
    const result = await removeFriend(currentUser, friendId);
    console.log(result);
  };

  removeGame = async (userId, watchlist) => {
    const result = await removeGame(userId, watchlist);
    console.log(result);
  };

  showPopUp = () => {
    this.props.showNotifier("from User", "error");
  };

  // async componentDidMount() {
  //   const userData = await axios.get(`http://localhost:8080/user/watchlist/${this.props.userId}`);
  //   console.log(userData)
  // }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <h1>User homepage</h1>
          <p>ID: {this.props.userId}</p>
          <Button
            onClick={this.getCurrentUser.bind(null, this.props.userId)}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Get User
          </Button>
          <Button
            onClick={this.removeGame.bind(null, this.props.userId, ["games"])}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            remove game
          </Button>
          <Button
            onClick={this.unfollow.bind(
              null,
              this.props.userId,
              "6197721298167684"
            )}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            remove friend
          </Button>
          <Button
            onClick={this.visitUser.bind(
              null,
              "f7f0b3d0-073c-11e9-a2f0-e5c5ec8ad0ca"
            )}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            visit friend
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(User);
