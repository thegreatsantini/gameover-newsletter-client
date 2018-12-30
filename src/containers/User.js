import React, { Component } from "react";
// import axios from "axios";
import Button from "@material-ui/core/Button";
import { currentUser, removeGame, removeFriend, visitFriend } from "../api";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  p: {
    border: "solid red 2px"
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class User extends Component {
  state = {
    isLoading: true
  };

  visitUser = async friendId => {
    const result = await visitFriend(friendId);
    console.log(result);
  };

  getCurrentUser = async userId => {
    return await currentUser(userId);
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

  async componentDidMount() {
    try {
      const userData = await this.getCurrentUser(this.props.userId);
      const { email, userName, followers, watchlist } = userData.data;
      this.setState({
        email,
        userName,
        followers,
        watchlist,
        isLoading: false
      });
    } catch (err) {
      alert(`Error fetching user data: ${err.message}`);
      this.setState({ isLoading: false })
    }
  }

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
              "4156663718537092"
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
