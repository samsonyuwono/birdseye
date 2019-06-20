import React, { Component } from "react";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loginPage: true, dashboard: false };
  }

  redirectPage = () => {
    this.setState({
      ...this.state,
      loginPage: false,
      dashboard: true
    });
  };
  render() {
    return (
      <div>
        {this.state.loginPage && (
          <LoginPage openDashboard={this.redirectPage} />
        )}
        {this.state.dashboard && <Dashboard />}
      </div>
    );
  }
}

export default App;
