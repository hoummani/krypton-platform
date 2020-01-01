/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Accounts = () => {
  return (
    <div className="accounts">
      <div className="columns">
        <div className="column">
          <div className="card">
            <header className="card-header cardHeader">
              <p className="card-header-title has-text-white">
                Primary Account
              </p>
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
                <h5 className="subtitle">Balance : 12345676767 kr</h5>
                <p className="">Address : 89679696876878</p>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                <strong>Deposit</strong>
              </a>
              <a href="#" className="card-footer-item">
                <strong>Widthraw</strong>
              </a>
            </footer>
          </div>
        </div>
        <div className="column is-hidden-touch">
          <div className="card">
            <header className="card-header cardHeader">
              <p className="card-header-title has-text-white">Saving Account</p>
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
                <h5 className="subtitle">Balance : -12454 kr</h5>
                <p className="">Address : 8789696876878</p>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                <strong>Charge</strong>
              </a>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header cardHeader">
              <p className="card-header-title has-text-white">
                Totally Balence
              </p>
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
                <h2 className="subtitle has-text-primary">-12454 kr</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
