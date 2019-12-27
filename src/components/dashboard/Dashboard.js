/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import DashNavbar from '../Core/DashNavbar';
import DashHome from './DashHome';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: 0
    };
  }

  render() {
    return (
      <div className="dashboard">
        <DashNavbar notification={this.state.notification} />
        <div className="columns">
          <div
            className="column is-one-quarter is-hidden-mobile"
            style={{ marginTop: '65px' }}
          >
            <Sidebar />
          </div>
          <div className="column" style={{ marginTop: '60px' }}>
            <div className="dashboard_container">
              <DashHome />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
