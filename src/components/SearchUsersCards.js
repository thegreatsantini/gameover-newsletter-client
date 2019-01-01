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
    minWidth: 75
  },
  title: {
    fontSize: 24
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
};

function SearchUsersCards(props) {
  const { classes, addFriend, user } = props;
  const { rowId, username } = user;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {username}
          </Typography>
          <Divider />
        </CardContent>
        <CardActions>
          <Button onClick={addFriend.bind(this, rowId)} size="small">
            follow
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

SearchUsersCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchUsersCards);
