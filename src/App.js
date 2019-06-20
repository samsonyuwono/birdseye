import React, { Component } from "react";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isEmptyState: true };
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    });
  };
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
