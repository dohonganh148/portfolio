import React, { Component } from "react";
import "./App.scss";
import WOW from "wowjs";
import Home from "./pages/Home/Home";
class App extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
