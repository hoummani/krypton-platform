/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const Sidebar = props => {
  const handleProfile = () => {
    props.triggerProfile();
  };
  const handleDashboard = () => {
    props.triggerDash();
  };
  return (
    <div className="sidebar">
      <aside className="menu">
        <p className="menu-label">Account settings</p>
        <ul className="menu-list">
          <li>
            <strong>
              <a
                className="panel-block aLink"
                href="#"
                onClick={handleDashboard}
              >
                <span className="panel-icon">
                  <i className="fas fa-tachometer-alt" aria-hidden="true" />
                </span>
                Dashboard
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a className="panel-block aLink" href="#" onClick={handleProfile}>
                <span className="panel-icon">
                  <i className="fas fa-user" aria-hidden="true" />
                </span>
                Profile
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a className="panel-block" href="#">
                <span className="panel-icon">
                  <i className="fas fa-cog" aria-hidden="true" />
                  {/** <i class="fas fa-user-cog"></i> <i class="fas fa-cog"></i> */}
                </span>
                Security settings
              </a>
            </strong>
          </li>
        </ul>
        <hr />
        <p className="menu-label">Transactions</p>
        <ul className="menu-list">
          <li>
            <strong>
              <a className="panel-block" href="#">
                <span className="panel-icon">
                  <i className="fas fa-wallet" aria-hidden="true" />
                </span>
                Payement
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a className="panel-block" href="#">
                <span className="panel-icon">
                  <i className="fas fa-mail-bulk" aria-hidden="true" />
                </span>
                Transfer
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a className="panel-block" href="#">
                <span className="panel-icon">
                  <i className="fas fa-bell" aria-hidden="true" />
                </span>
                Notifications
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a className="panel-block" href="#">
                <span className="panel-icon">
                  <i className="fas fa-coins" aria-hidden="true" />
                  {/** <i class="fab fa-ethereum"></i> <i class="fas fa-wallet"></i> */}
                </span>
                Balance
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a className="panel-block" href="#">
                <span className="panel-icon">
                  <i className="fas fa-sign-out-alt" aria-hidden="true" />
                </span>
                Log out
              </a>
            </strong>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
