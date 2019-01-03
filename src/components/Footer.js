import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    height: "50px"
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  button: {
    color: "white"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            made with &hearts; by Lucas |
            <Button className={classes.button}>
              <a
                className={classes.link}
                href="https://github.com/thegreatsantini/gameover-newsletter-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                server
              </a>
            </Button>
            |
            <Button className={classes.button}>
              <a
                className={classes.link}
                href="https://github.com/thegreatsantini/gameover-newsletter-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                client
              </a>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
