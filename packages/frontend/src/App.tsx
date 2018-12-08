import { Component } from "react";
import "./App.css";
import { Signin } from "./components/signin";
import React from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Signin></Signin>
        </header>
      </div>
    );
  }
}

export default App;
