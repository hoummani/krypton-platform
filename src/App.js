/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './App.scss';
// components
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Core/Navbar';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Footer from './components/Core/Footer';
import Register from './components/auth/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="core">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
