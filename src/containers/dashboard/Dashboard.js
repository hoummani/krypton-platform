/* eslint-disable react/prop-types */
/* eslint-disable import/named */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  dashNotify,
  triggerDash,
  triggerProfile
} from '../../actions/UiAction';
import Sidebar from '../../components/dashboard/Sidebar';
import DashNavbar from '../../components/Core/DashNavbar';
import DashHome from './DashHome';
import Profile from '../../components/auth/Profile';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    const RenderComp = () => {
      if (this.props.UiReducer.isDashborad) {
        return (
          <div>
            <DashHome />
          </div>
        );
        // eslint-disable-next-line no-else-return
      } else if (this.props.UiReducer.isProfile) {
        return (
          <div>
            <Profile />
          </div>
        );
      } else {
        return (
          <div>
            <DashHome />
          </div>
        );
      }
    };
    return (
      <div className="dashboard">
        <DashNavbar
          notification={this.props.UiReducer.notification}
          dashNotify={this.props.dashNotify}
        />
        <div className="columns">
          <div
            className="column is-one-quarter is-hidden-mobile"
            style={{ marginTop: '65px' }}
          >
            <Sidebar
              triggerDash={this.props.triggerDash}
              triggerProfile={this.props.triggerProfile}
            />
          </div>
          <div className="column" style={{ marginTop: '60px' }}>
            <div className="dashboard_container">
              <RenderComp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    UiReducer: state.UiReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dashNotify: () => {
      dispatch(dashNotify());
    },
    triggerDash: () => {
      dispatch(triggerDash());
    },
    triggerProfile: () => {
      dispatch(triggerProfile());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
