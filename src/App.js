import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travel</h1>
        </header>
        <Travel
          destination=<h1>Montreal</h1>
          country="Canada"
          photo="https://cdn.pixabay.com/photo/2012/02/28/00/49/squirrel-17854_960_720.jpg"
	  distance = "5717 km"
        />
        <Travel
          destination=<h1>Cinque Terre</h1>
          country="Italy"
          photo="https://cdn.pixabay.com/photo/2015/03/10/00/09/cinque-terre-666601_960_720.jpg"
	  distance = "847 km"
        />
      </div>
    );
  }
}

export default App;
