/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import AccountSettings from './AccountSettings';

const Profile = () => {
  return (
    <div className="profile">
      <div className="card">
        <header className="card-header cardHeaderBack">
          <p className="card-header-title has-text-white">Account Details</p>
          <a
            href="#"
            className="card-header-icon has-text-white"
            aria-label="more options"
          >
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            <div className="columns">
              <div className="column">
                <p className="menu-label is-uppercase	has-text-weight-bold">
                  First Name : <strong>Handi</strong>
                </p>
                <p className="menu-label is-uppercase	has-text-weight-bold">
                  Email : <strong>Fouad.handi@gmail.com</strong>
                </p>
                <p className="menu-label is-uppercase	has-text-weight-bold">
                  Address : <strong>21 rue azib darai</strong>
                </p>
                <p className="menu-label is-uppercase	has-text-weight-bold">
                  Primary Account Address : <strong>4567898676906745</strong>
                </p>
              </div>
              <div className="column">
                <p className="menu-label is-uppercase	has-text-weight-bold">
                  Last Name : <strong>Handi</strong>
                </p>
                <p className="menu-label is-uppercase	has-text-weight-bold">
                  Phone : <strong>0967565465</strong>
                </p>
                <p className="menu-label is-uppercase	has-text-weight-bold">
                  Status :{' '}
                  <span className="tag is-danger is-light">Inactive</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            <strong>Update Profile</strong>
          </a>
        </footer>
      </div>
      <br />
      <hr />
      <div className="accountSettings">
        <p className="menu-label is-uppercase	has-text-weight-bold">
          Account settings
        </p>
        <AccountSettings />
      </div>
    </div>
  );
};

export default Profile;
