import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button.js';
import Random from './components/Random.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Random />
        <Button />
      </div>
    );
  }
}

export default App;
