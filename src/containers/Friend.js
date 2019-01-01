import React, { Component } from "react";
import Loading from "../components/Loading";
import Button from "@material-ui/core/Button";
import UserTabs from "./UserTabs";
import { currentUser, unWatch, unfollowUser, visitFriend } from "../api";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class User extends Component {
  state = {
    isLoading: true,
    value: 0,
    watchlist: [],
    followers: []
  };

  visitUser = async friendId => {
    return await visitFriend(friendId);
  };

  getCurrentUser = async userId => {
    return await currentUser(userId);
  };

  unfollow = async (currentUser, friendId) => {
    const result = await unfollowUser(currentUser, friendId);
    console.log(result);
  };

  removeGame = async rowId => {
    const { watchlist } = this.state;
    const { userId } = this.props;
    this.setState(
      {
        watchlist: watchlist.filter(game => {
          if (game.rowId !== rowId) {
            return game;
          }
        })
      },
      () => {
        const rows = this.state.watchlist.map(game => game.rowId).join(",");
        unWatch(userId, rows)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    );
  };

  showPopUp = () => {
    this.props.showNotifier("from User", "error");
  };

  async componentDidMount() {
    try {
      const userData = await this.visitUser(this.props.match.params.rowId);
      console.log(userData)
        const { email, userName, followers, watchlist } = userData.data;
        this.setState({
          email,
          userName,
          followers,
          watchlist
        });
    } catch (err) {
      alert(`Error fetching user data: ${err.message}`);
    }
    this.setState({ isLoading: false });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { isLoading, value, watchlist, followers } = this.state;
    return (
      <React.Fragment>
        {!isLoading ? (
          <div className={classes.root}>
            <UserTabs
              removeGame={this.removeGame}
              users={followers}
              games={watchlist}
              value={value}
              handleChange={this.handleChange}
            />
            <Button
              onClick={this.getCurrentUser.bind(null, this.props.userId)}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Get User
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
        ) : (
          <Loading fontSize={48} />
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(User);
