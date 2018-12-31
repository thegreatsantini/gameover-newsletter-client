import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Loading from '../components/Loading'
import Button from "@material-ui/core/Button";
import { listGames, addGame } from "../api";
const styles = theme => ({
  root: {},
  button: {
    margin: theme.spacing.unit,
  },
});

class Games extends Component {
  state = {
    isLoading: true,
    games: []
  };

  fetchGames = async () => {
    return await listGames();
  };

  addGame = async (id, rowId) => {
    const result = await addGame(id, rowId);
    console.log(result);
  };

  async componentDidMount() {
    try {
      const allGames = await this.fetchGames().then( response => response.data);
      this.setState({
        games : allGames,
        isLoading: false
      });
    } catch (err) {
      alert(`Error fetching games: ${err.message}`);
      this.setState({ isLoading:false })
    }
  }

  render() {
    const { classes } = this.props;
    const { isLoading  } = this.state
    return (
      <React.Fragment>
        {!isLoading 
        ? (
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
        )
      : <Loading fontSize={48} /> }
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Games);
