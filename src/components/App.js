import React, { Component } from 'react';
import AddEmployee from './AddEmployee';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Pony o Castor!</h1>
        </header>
        <AddEmployee />
      </div>
    );
  }
}

export default App;
