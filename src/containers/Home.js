import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import User from './User'
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {}
};

// ***change this to stateless function component***
class Home extends Component {
  state = {};

  handleTest = () => {
    axios
      .get("http://localhost:8080/gamesheets")
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
  };
  // async componentWillMount() {
  //   console.log(this.props);
  // }

  renderLander = () => {
    return <p>LANDING PAGEING NOT LOGGED IN</p>;
  };

  render() {
    const { classes, isAuthenticated } = this.props;
    // console.log(this.props)
    return (
      <React.Fragment>
        {isAuthenticated ? (
          <Redirect to={`/user/${this.props.currentUser.userName}`} />
        ) : (
          this.renderLander()
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
