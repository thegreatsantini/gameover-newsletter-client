import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    margin: "10px 50px 10px 50px",
    minWidth: 75
  },
  title: {
    fontSize: 36
  },
  availablityContainer: {
    border: "solid blue 2px",
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-around"
  },
  availablityItem: {
    padding: '5px',
    borderRadius : '5px',
    color :'white',
    fontSize : 24
  },
  divider: {
    width: "2px",
    margin: "6px 0",
    background: "grey",
    borderRadius: "5px"
  }
};

function GameCard(props) {
  const { classes } = props;
  const checkAmount = amount => (amount > 0 ? "#43a047" : "#d32f2f");
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Metriod
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          gutterBottom
          component="h2"
        >
          Platformer, action
        </Typography>
        <Divider />
        <div className={classes.availablityContainer}>
          <Typography
            style={{ backgroundColor: checkAmount(3) }}
            variant="h5"
            component="h2"
            className={classes.availablityItem}
          >
            Available: 3
          </Typography>
          <div className={classes.divider} />
          <Typography
            style={{ backgroundColor: checkAmount(0) }}
            variant="h5"
            component="h2"
            className={classes.availablityItem}
          >
            Recieved: 0
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">unwatch</Button>
      </CardActions>
    </Card>
  );
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameCard);
