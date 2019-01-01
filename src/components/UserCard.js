import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 75
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: 24
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around"
  }
};

function UserCard(props) {
  const { classes, users, removeFriend } = props;
  return users.map((user, index) => {
    const { rowId } = user;
    return (
      <Grid key={index} item xs={12} sm={6} md={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="h2"
              component="h2"
              className={classes.title}
              gutterBottom
            >
              {user.userName}
            </Typography>
            <CardActions className={classes.buttonContainer}>
              <Button
                // onClick={unWatch.bind(this, userId, rowId)}
                  onClick={removeFriend.bind(this, rowId)}
                size="small"
              >
                unwatch
              </Button>
              <Button
                component={Link}
                to={`/friend/${user.id}`}
                size="small"
              >
                view
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    );
  });
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserCard);
