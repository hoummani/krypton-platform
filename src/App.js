/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './App.scss';
// components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/auth/Login';
import Footer from './components/Core/Footer';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import FourOFour from './components/Core/FourOFour';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/404" component={FourOFour} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
