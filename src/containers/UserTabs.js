import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UserGameCard from "../components/UserGameCard";
import Paper from "@material-ui/core/Paper";
import UserCard from "../components/UserCard";
import NoData from '../components/NoData';
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
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    margin: "15px 15px",
    ...theme.mixins.gutters()
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacinssg.unit * 2
  }
});

const UserTabs = props => {
  const {
    classes,
    handleChange,
    value,
    games,
    users,
    removeGame,
    removeFriend,
    show
  } = props;
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
          games.length > 0 
           ? <TabContainer>
            <Grid container spacing={24}>
              <UserGameCard show={show} removeGame={removeGame} games={games} />
            </Grid>
          </TabContainer>
          : <NoData fontSize={24} item='games'/>
        )}
        {value === 1 && (
          users.length > 0
          ?<TabContainer>
            <Grid container spacing={24}>
              <UserCard show={show} removeFriend={removeFriend} users={users} />
            </Grid>
          </TabContainer>
          : <NoData fontSize={23} item='friends'/>
        )}
      </Paper>
    </div>
  );
};

UserTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserTabs);
