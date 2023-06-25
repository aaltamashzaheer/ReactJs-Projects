import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={12} country= 'in' category='sports' />
      </div>
    );
  }
}
