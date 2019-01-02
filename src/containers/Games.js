import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
import { listGames, addGame } from "../api";
import GameCard from "../components/GameCard";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import SearchForm from "../components/SearchForm";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
  },
  button: {
    margin: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  topBar: {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(genre, that) {
  return {
    fontWeight:
      that.state.genre.indexOf(genre) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium
  };
}

class Games extends Component {
  state = {
    isLoading: true,
    games: [],
    genre: [],
    genreOptions: [],
    filteredGames: [],
    search: ""
  };

  handleChange = name => event => {
    this.setState(
      {
        search: event.target.value
      },
      this.filterUsers()
    );
  };

  filterUsers = (selected = []) => {
    const { games, search } = this.state;
    let finalFiltered;
    // filter users by regex
    const filtered = games.filter(item => {
      const normalizedSearch = search.replace(/[^A-Za-z0-9]+/gi, "");
      const regex = new RegExp(normalizedSearch, "i");
      return item.title.match(regex) || false;
    });
    // created an object of users filters by regex with genre keys
    const gamesObj = filtered.reduce((acc, next) => {
      let currentKey = next.genres;
      if (currentKey.includes(",")) {
        currentKey.split(",").forEach(val => {
          Array.isArray(acc[val.trim()])
            ? acc[val.trim()].push(next)
            : (acc[val.trim()] = [next]);
        });
      } else {
        if (Array.isArray(acc[currentKey])) {
          acc[currentKey].push(next);
        } else {
          acc[currentKey] = [next];
        }
      }
      return acc;
    }, {});
    // check user object with selected genres default to [] if user hasnt filtered genres
    const byGenres = selected.map(val => {
      return gamesObj[val];
    });
    byGenres.length >= 1
      ? (finalFiltered = byGenres[0])
      : (finalFiltered = filtered);
    this.setState({
      filteredGames: finalFiltered
    });
  };
  fetchGames = async () => {
    return await listGames();
  };

  addGame = async rowId => {
    const { userId, showNotifier } = this.props;
    await addGame(userId, rowId);
    showNotifier("Added game to watchlist!", "success");
  };

  handleSelect = event => {
    this.setState(
      {
        genre: event.target.value
      },
      this.filterUsers(event.target.value)
    );
  };

  createGenreOptions(games) {
    return [
      ...new Set(
        games
          .map(val => {
            return val.genres;
          })
          .join(",")
          .split(",")
          .map(val => val.trim())
      )
    ];
  }

  async componentDidMount() {
    try {
      const allGames = await this.fetchGames().then(response => response.data);
      const allGenres = await this.createGenreOptions(allGames);
      this.setState({
        games: allGames,
        genreOptions: allGenres,
        isLoading: false
      });
    } catch (err) {
      alert(`Error fetching games: ${err.message}`);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { classes } = this.props;
    const { isLoading, games, filteredGames } = this.state;
    let gamesToDisplay;
    filteredGames.length < 1
      ? (gamesToDisplay = games)
      : (gamesToDisplay = filteredGames);
    return (
      <React.Fragment>
        {!isLoading ? (
          <React.Fragment>
            <Paper className={classes.topBar}>
              <SearchForm handleChange={this.handleChange} />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple-genres">Genres</InputLabel>
                <Select
                  multiple
                  value={this.state.genre}
                  onChange={this.handleSelect}
                  input={<Input id="select-multiple-genres" />}
                  renderValue={selected => (
                    <div className={classes.chips}>
                      {selected.map(value => (
                        <Chip
                          key={value}
                          label={value}
                          className={classes.chip}
                        />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {this.state.genreOptions.map((item, i) => (
                    <MenuItem
                      key={i}
                      value={item}
                      style={getStyles(item, this)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
            <Paper elevation={8} className={classes.root}>
              <Grid container spacing={16}>
                {gamesToDisplay.map((val, i) => (
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

export default withStyles(styles, { withTheme: true })(Games);
