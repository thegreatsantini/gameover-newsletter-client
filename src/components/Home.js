import React from "react";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  p: {
    border: "solid red 2px"
  }
};

const Home = props => {
  const { classes, isAuthenticated, currentUser } = props;
  return (
    <React.Fragment>
      {isAuthenticated ? (
        <Redirect to={`/user/${currentUser.userName}`} />
      ) : (
        <p className={classes.p}>LANDING PAGEING NOT LOGGED IN</p>
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(Home);
