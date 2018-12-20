import React, { Component } from "react";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
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
        <NavBar />
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
