import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Random from './components/Random.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Random />
      </div>
    );
  }
}

export default App;
