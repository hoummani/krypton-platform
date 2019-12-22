/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './App.scss';
// components
import Navbar from './components/Core/Navbar';
import Welcome from './components/home/Welcome';
import CantactUS from './components/home/CantactUS';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="core">
          <Welcome />
          <CantactUS />
        </div>
      </div>
    );
  }
}

export default App;
