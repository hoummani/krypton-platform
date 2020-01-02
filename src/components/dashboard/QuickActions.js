/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';

const QuickActions = () => {
  return (
    <div className="quickActions">
      <div className="columns">
        <div className="column">
          {/* 
          <button className="button" type="button">
            <strong>
              <span style={{ marginRight: '3px' }}>
                <i className="fas fa-paper-plane" />
              </span>
              Transfer Maney
            </strong>
          </button>
          */}

          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span className="">
                  <i className="fas fa-paper-plane" aria-hidden="true" />
                </span>
                <span style={{ marginLeft: '3px' }}>Send Transaction</span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">
                  To someone
                </a>
                <a href="#" className="dropdown-item">
                  Between Accounts
                </a>
                <a href="#" className="dropdown-item">
                  To Financial Institution
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  Other Transactions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <button className="button" type="button">
            <strong>
              <span style={{ marginRight: '3px' }}>
                <i className="fas fa-credit-card" />
              </span>
              Pay services
            </strong>
          </button>
        </div>
        <div className="column">
          <button className="button" type="button">
            <strong>
              <span style={{ marginRight: '3px' }}>
                <i className="fas fa-download" />
              </span>
              Downoald Transactions
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
