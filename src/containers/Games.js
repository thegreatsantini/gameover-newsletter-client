import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import axios from "axios";
import Button from "@material-ui/core/Button";
import { listGames, addGame, visitFriend } from "../api";
const styles = {
  root: {}
};

// ***change this to stateless function component***
class Games extends Component {
  state = {};

  fetchGames = async () => {
    const results = await listGames();
    console.log(results)
  };

  addGame = async (id, game) => {
    const result = await addGame(id, game)
    console.log(result)
  }

  visitUser = async (friendId) => {
    const result = await visitFriend(friendId)
    console.log(result)
  }
  // async componentWillMount() {
    
  // }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.props.isAuthenticated && (
          <React.Fragment>
            <h1>Search Games component</h1>
            <Button
              onClick={this.fetchGames}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              List Games
            </Button>
            <Button
              onClick={this.addGame.bind(null, this.props.userId, 'smash bros')}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add Game
            </Button>
            <Button
              onClick={this.visitUser.bind(null, 'friend Id')}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              view friend
            </Button>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Games);
