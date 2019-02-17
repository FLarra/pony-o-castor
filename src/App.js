import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Employees from './components/Employees';
import Filters from './components/Filters'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pony o Castor!</h1>
        </header>
        <AddEmployee />
        <Filters />
        <Employees />
      </div>
    );
  }
}

export default App;
