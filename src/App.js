/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './App.scss';
// components
import Navbar from './components/Core/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <h1>Hello from React js</h1>
        </div>
      </div>
    );
  }
}

export default App;
