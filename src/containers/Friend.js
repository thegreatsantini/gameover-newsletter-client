import React, { Component } from "react";
import Loading from "../components/Loading";
import UserTabs from "./UserTabs";
import { unWatch, unfollowUser, visitFriend } from "../api";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class Friend extends Component {
  state = {
    isLoading: true,
    value: 0,
    watchlist: [],
    followers: []
  };

  visitUser = async friendId => {
    return await visitFriend(friendId);
  };

  unfollow = async friendRow => {
    const { followers } = this.state;
    const { userId } = this.props;
    this.setState(
      {
        followers: followers.filter(user => user.rowId !== friendRow)
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
        watchlist: watchlist.filter(game => game.rowId !== rowId)
      },
      () => {
        const rows = this.state.watchlist.map(game => game.rowId).join(",");
        unWatch(userId, rows)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    );
  };

  async componentDidMount() {
    try {
      const userData = await this.visitUser(this.props.match.params.rowId);
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
              show={"none"}
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

export default withStyles(styles)(Friend);
