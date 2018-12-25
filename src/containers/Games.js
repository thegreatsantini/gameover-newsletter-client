import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
const styles = {
  root: {}
};

// ***change this to stateless function component***
class Games extends Component {
  state = {};

  //   handleTest = () => {
  //     axios
  //       .get("http://localhost:8080/gamesheets")
  //       .then(res => console.log("res", res))
  //       .catch(err => console.log("err", err));
  //   };
  async componentWillMount() {
    const userData = await axios.get(`http://localhost:8080/gamesheets/games`);
    console.log(userData)
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {
          this.props.isAuthenticated &&
        <h1>Search Games component</h1>
        }
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Games);
