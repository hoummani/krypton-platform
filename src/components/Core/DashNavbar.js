/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './navbar.scss';

const DashNavbar = props => {
  const handleBellClick = () => {
    props.dashNotify();
  };
  const Notif = () => {
    if (props.notification > 0) {
      return (
        <a className="button is-rounded" onClick={handleBellClick}>
          <i className="fas fa-bell" />
          <span className="beltNumber">{props.notification}</span>
        </a>
      );
    } else {
      return (
        <a className="button is-rounded" onClick={handleBellClick}>
          <i className="fas fa-bell" />
        </a>
      );
    }
  };
  return (
    <div className="dashnavbar">
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item is-hoverable">
            <div className="level">
              <div className="level-left is-flex-mobile">
                <div className="level-item">
                  <span className="subtitle is-3 rotating">
                    {/** <i class="fas fa-cube"></i> <i class="fas fa-landmark"> fab fa-ethereum </i> fas fa-atom rotating */}
                    <i className="fas fa-cube" /> krypton
                  </span>
                </div>
                {/** 
                   * <img
                    src="/img/branding/krypton.svg"
                    alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                    className=""
                  />
                  */}
              </div>
            </div>
          </div>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Notif />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashNavbar;
