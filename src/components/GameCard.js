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

const styles = {
  card: {
    minWidth: 75,
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
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  gameConsole: {
    alignItems: "center",
    fontSize: 16,
    textDecoration: "underline"
  }
};

function GameCard(props) {
  const { classes, game, addGame } = props;
  const { title, gameConsole, genres, received, available, rowId } = game;
  const checkAmount = amount => (amount > 0 ? "#43a047" : "#d32f2f");
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} gutterBottom>
              {title}
            </Typography>
            <Typography className={classes.gameConsole} gutterBottom>
              {gameConsole}
            </Typography>
          </div>
          <Typography color="textSecondary" gutterBottom>
            {genres}
          </Typography>
          <Divider />
          <div className={classes.availablityContainer}>
            <Typography
              style={{ backgroundColor: checkAmount(available) }}
              variant="h5"
              component="h2"
              className={classes.availablityItem}
            >
              Available: {available}
            </Typography>
            <Typography
              style={{ backgroundColor: checkAmount(received) }}
              variant="h5"
              component="h2"
              className={classes.availablityItem}
            >
              Recieved: {received}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button
              onClick={addGame.bind(this, rowId)}
              size="small"
            >
              watch
            </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameCard);
