import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GameCard from "../components/GameCard";
import Paper from "@material-ui/core/Paper";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    // border: "solid green 3px",
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    margin: "15px 15px",
    // border: "solid red 2px",
    ...theme.mixins.gutters()
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacinssg.unit * 2
  }
});

const UserTabs = props => {
  const { classes, handleChange, value, games, userId, removeGame } = props;
  // console.log(props)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs fullWidth value={value} onChange={handleChange}>
          <Tab label="watchlist" />
          <Tab label="friends" />
        </Tabs>
      </AppBar>
      <Paper className={classes.paper} elevation={8}>
        {value === 0 && (
          <TabContainer>
            <Grid container spacing={24}>
              <GameCard removeGame={removeGame} userId={userId} games={games} />
            </Grid>
          </TabContainer>
        )}
        {value === 1 && <TabContainer>friends</TabContainer>}
      </Paper>
    </div>
  );
};

UserTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserTabs);
