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
    const result = await visitFriend(friendId);
    console.log(result);
  };

  getCurrentUser = async userId => {
    return await currentUser(userId);
  };

  unfollow = async friendRow => {
    // const result =
    // console.log(result);
    const { followers } = this.state;
    const { userId } = this.props;
    this.setState(
      {
        followers: followers.filter(user => {
          if (user.rowId != friendRow) {
            return user;
          }
        })
      },
      async () => {
        const rows = this.state.followers.map(user => user.rowId).join(",");
        await unfollowUser(userId, rows)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    );
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
      const userData = await this.getCurrentUser(this.props.userId);
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
              removeFriend={this.unfollow}
              value={value}
              handleChange={this.handleChange}
            />
          </div>
        ) : (
          <Loading fontSize={48} />
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(User);
