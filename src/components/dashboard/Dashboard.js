/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Sidebar from './Sidebar';
import DashNavbar from '../Core/DashNavbar';
import DashHome from '../../containers/dashboard/DashHome';
import Profile from './Profile';

const Dashboard = props => {
  const RenderComp = () => {
    if (props.UiReducer.isDashborad) {
      return (
        <div>
          <DashHome />
        </div>
      );
      // eslint-disable-next-line no-else-return
    } else if (props.UiReducer.isProfile) {
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
        notification={props.UiReducer.notification}
        dashNotify={props.dashNotify}
      />
      <div className="columns">
        <div
          className="column is-one-quarter is-hidden-mobile"
          style={{ marginTop: '65px' }}
        >
          <Sidebar
            triggerDash={props.triggerDash}
            triggerProfile={props.triggerProfile}
            isDashborad={props.UiReducer.isDashborad}
            isProfile={props.UiReducer.isProfile}
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
};

export default Dashboard;
