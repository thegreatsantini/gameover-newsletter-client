import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userId: null
    };
  }

  componentDidMount() {
    this.checkUser()
  }

  checkUser = () => {
    const currentUser = localStorage.getItem('userId');
    console.log('on refresh app', currentUser);
    if (currentUser) {
      console.log('loged in from app')
      this.setState({
        isAuthenticated: true,
        userId: currentUser
      })
    }
    else {
      console.log('no user from app')
    }
  }

  authenticateUser = (isAuthenticated, userId) => {
    this.setState({
      isAuthenticated,
      userId
    });
  };
  render() {
    const childProps = {
      authenticateUser: this.authenticateUser,
      isAuthenticated: this.state.isAuthenticated,
      userId: this.state.userId
    };
    return (
      <div>
        <NavBar 
        authenticateUser={this.authenticateUser}
        isAuthenticated={this.state.isAuthenticated} />
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
