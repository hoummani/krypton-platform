import React from 'react';

const AccountSettings = () => {
  return (
    <div className="accountSettingsComponent quickActions">
      <div className="columns">
        <div className="column">
          <button className="button" type="button">
            <strong>
              <span style={{ marginRight: '3px' }}>
                <i className="fas fa-lock-open" />
              </span>
              Reset Password
            </strong>
          </button>
        </div>
        <div className="column">
          <button className="button" type="button">
            <strong>
              <span style={{ marginRight: '3px' }}>
                <i className="fas fa-power-off" />
              </span>
              Disable Account
            </strong>
          </button>
        </div>
        <div className="column">
          <button className="button" type="button">
            <strong>
              <span style={{ marginRight: '3px' }}>
                <i className="fas fa-credit-card" />
              </span>
              Add Saving Account
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
