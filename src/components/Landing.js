import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    paddingTop: "100px",
    textAlign: "center"
  }
});

const Landing = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <h3>Welcome!</h3>
    </div>
  );
};

export default withStyles(styles)(Landing);
