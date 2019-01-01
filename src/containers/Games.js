import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
import { listGames, addGame } from "../api";
import GameCard from "../components/GameCard";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
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

class Games extends Component {
  state = {
    isLoading: true,
    games: []
  };

  fetchGames = async () => {
    return await listGames();
  };

  addGame = async rowId => {
    const { userId, showNotifier } = this.props;
    await addGame(userId, rowId);
    showNotifier("Added game to watchlist!", "success");
  };

  async componentDidMount() {
    try {
      const allGames = await this.fetchGames().then(response => response.data);
      this.setState({
        games: allGames,
        isLoading: false
      });
    } catch (err) {
      alert(`Error fetching games: ${err.message}`);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { classes } = this.props;
    const { isLoading, games } = this.state;
    return (
      <React.Fragment>
        {!isLoading ? (
          <React.Fragment>
            <Paper elevation={8} className={classes.root}>
              <Grid container spacing={16}>
                {games.map((val, i) => (
                  <GameCard addGame={this.addGame} key={i} game={val} />
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

export default withStyles(styles)(Games);
