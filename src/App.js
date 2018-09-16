import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalcButtonPanel from './components/CalcButtonPanel';
import CalcDisplay from "./components/CalcDisplay"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <p className="App-intro">
          <CalcButtonPanel />
          <CalcDisplay value="5" />

        </p>
      </div>
    );
  }
}

export default App;
