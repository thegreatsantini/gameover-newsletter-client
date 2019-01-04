import React from "react";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GroupIcon from "@material-ui/icons/Group";
import GamesIcon from "@material-ui/icons/Games";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: "flex",
    flexDirection: "column",
    margin: "50px 35px",
    textAlign: "center"
  },
  title: {
    fontWeight: "700",
    fontSize: "2.5em"
  },
  listContainer: {
    margin: "0 auto",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "0.5em"
  }
});

const Home = props => {
  const { classes, isAuthenticated, currentUser } = props;
  return (
    <React.Fragment>
      {isAuthenticated ? (
        <Redirect to={`/user/${currentUser.userName}`} />
      ) : (
        <Paper className={classes.root}>
          <Typography className={classes.title} variant="h3" gutterBottom>
            Gameover Newsletter
          </Typography>
          <Divider />
          <List className={classes.listContainer} component="nav">
            <ListItem>
              <ListItemIcon>
                <GamesIcon />
              </ListItemIcon>
              <Typography className={classes.listTitle} variant="h6">
                Level up your game
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Keep track of the games you want" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Find other gamers" />
            </ListItem>
          </List>
        </Paper>
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(Home);
