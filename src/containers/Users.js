import React, { Component } from "react";
import { followUser, getUsers } from "../api";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
import SearchUsersCards from "../components/SearchUsersCards";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Users extends Component {
  state = {
    isLoading: true,
    users: []
  };

  addFriend = async friendId => {
    const { userId, showNotifier } = this.props;
    await followUser(userId, friendId);
    showNotifier("Added game to watchlist!", "success");
  };
  async componentDidMount() {
    try {
      const allUsers = await this.fetchUsers().then(response => response.data);
      this.setState({
        isLoading: false,
        users: allUsers
      });
    } catch (err) {
      alert(`Error fetching users: ${err.message}`);
      this.setState({ isLoading: false });
    }
  }
  fetchUsers = async () => {
    return await getUsers();
  };

  render() {
    const { classes } = this.props;
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        {!isLoading ? (
          <React.Fragment>
            <Paper elevation={8} className={classes.root}>
              <Grid container spacing={16}>
                {users.map((val, i) => (
                  <SearchUsersCards
                    addFriend={this.addFriend}
                    key={i}
                    user={val}
                  />
                ))}
              </Grid>
            </Paper>
          </React.Fragment>
        ) : (
          <Loading fontSize={48} />
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Users);
