import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import {  removeGame } from "../api";
const styles = {
  card: {
    minWidth: 75
  },
  title: {
    fontSize: 24
  },
  availablityContainer: {
    marginTop: "15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  availablityItem: {
    padding: "5px",
    borderRadius: "5px",
    color: "white",
    fontSize: 16
  }
};



function UserGameCard(props) {
  const { classes, games, removeGame } = props;
  const checkAmount = amount => (amount > 0 ? "#43a047" : "#d32f2f");
  return games.map((game, index) => {
    const { rowId } = game;
    return (
      <Grid key={index} item xs={12} sm={6} md={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              {game.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {game.genres}
            </Typography>
            <Divider />
            <div className={classes.availablityContainer}>
              <Typography
                style={{ backgroundColor: checkAmount(game.available) }}
                variant="h5"
                component="h2"
                className={classes.availablityItem}
              >
                Available: {game.available}
              </Typography>
              <Typography
                style={{ backgroundColor: checkAmount(game.received) }}
                variant="h5"
                component="h2"
                className={classes.availablityItem}
              >
                Recieved: {game.received}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button
              // onClick={unWatch.bind(this, userId, rowId)}
              onClick={removeGame.bind(this, rowId)}
              size="small"
            >
              unwatch
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
}

UserGameCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserGameCard);
