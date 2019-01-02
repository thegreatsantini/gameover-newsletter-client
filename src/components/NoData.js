import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  progress: {
    margin: "0 auto"
  },
  container: {
    padding: "30px 0",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    textAlign: "center"
  },
  title: {
    padding: "50px"
  }
});

function NoData(props) {
  const { classes, fontSize, item } = props;
  return (
    <div className={classes.container}>
      <Typography style={{ fontSize }} className={classes.title} variant="h3">
        There are no  {item} ...yet
      </Typography>
    </div>
  );
}

NoData.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoData);
