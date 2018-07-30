import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SheepCounter from './SheepCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SheepCounter></SheepCounter>
      </div>
    );
  }
}

export default App;
