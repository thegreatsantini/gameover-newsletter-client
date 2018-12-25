import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import Notifier, { openSnackbar } from "./components/Notifier";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userId: null,
      currentUser: null
    };
  }

  showNotifier = (message, variant) => {
    openSnackbar({
      message,
      variant
    });
  };

  componentDidMount() {
    this.checkUser();
  }

  checkUser = () => {
    const currentUser = localStorage.getItem("userId");
    const allData = localStorage.getItem('currentUser')
    if (currentUser) {
      this.setState({
        isAuthenticated: true,
        userId: currentUser,
        currentUser: JSON.parse(allData)
      });
    } else {
      console.log("no user from app");
    }
  };

  authenticateUser = (isAuthenticated, userId, allData) => {
    this.setState({
      isAuthenticated,
      userId,
      currentUser: allData
    });
  };
  render() {
    const childProps = {
      authenticateUser: this.authenticateUser,
      isAuthenticated: this.state.isAuthenticated,
      userId: this.state.userId,
      showNotifier: this.showNotifier,
      currentUser: this.state.currentUser
    };
    return (
      <React.Fragment>
        <NavBar
          authenticateUser={this.authenticateUser}
          isAuthenticated={this.state.isAuthenticated}
        />
        <Routes childProps={childProps} />
        <Notifier />
      </React.Fragment>
    );
  }
}

export default App;
