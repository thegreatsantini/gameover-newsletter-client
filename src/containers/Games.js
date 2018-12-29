import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import axios from "axios";
import Button from "@material-ui/core/Button";
import { listGames, addGame } from "../api";
const styles = {
  root: {}
};

// ***change this to stateless function component***
class Games extends Component {
  state = {};

  fetchGames = async () => {
    const results = await listGames();
    console.log(results);
  };

  addGame = async (id, rowId) => {
    console.log("*", rowId);
    const result = await addGame(id, rowId);
    console.log(result);
  };

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
              onClick={this.addGame.bind(
                null,
                this.props.userId,
                "1185848798537604"
              )}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add Game
            </Button>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Games);
