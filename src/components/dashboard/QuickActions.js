import React from 'react';

const QuickActions = () => {
  return (
    <div className="quickActions">
      <div className="columns">
        <div className="column">
          <button className="button" type="button">
            <strong>
              <span style={{ marginRight: '3px' }}>
                <i className="fas fa-paper-plane" />
              </span>
              Transfer Maney
            </strong>
          </button>
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
