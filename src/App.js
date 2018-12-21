import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      token: null
    };
  }

  authenticateUser = token => {
    this.setState({
      isAuthenticated: true,
      token
    });
  };
  render() {
    const childProps = {
      authenticateUser: this.authenticateUser,
      isAuthenticated: this.state.isAuthenticated,
      token: this.state.token
    };
    return (
      <div>
        <NavBar isAuthenticated={this.state.isAuthenticated} />
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
