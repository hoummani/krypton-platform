/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item is-hoverable">
            <div className="level">
              <div className="level-left is-flex-mobile">
                <i className="fas fa-atom" />
                <div className="level-item">
                  <span className="subtitle is-3 ">krypton</span>
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
      </nav>
    </div>
  );
};

export default Navbar;
