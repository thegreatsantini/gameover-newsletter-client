import React, { Component } from "react";
import { followUser, getUsers } from "../api";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";

const styles = theme => ({
  root: {},
  button: {
    margin: theme.spacing.unit
  }
});

class Users extends Component {
  state = {
    isLoading: true,
    users: []
  };

  addFriend = async (currentUser, friendId) => {
    const result = await followUser(currentUser, friendId);
    console.log(result);
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
    const { isLoading } = this.state;
    return (
      <React.Fragment>
        {!isLoading
        
        ?(
          <React.Fragment>
            <h1>USERS Component</h1>
            <Button
              onClick={this.addFriend.bind(
                null,
                this.props.userId,
                "6197721298167684"
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
        )
      : <Loading fontSize={48}/>
      }
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Users);
