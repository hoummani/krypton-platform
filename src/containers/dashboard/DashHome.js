import React from 'react';
import Accounts from '../../components/dashboard/Accounts';
import QuickActions from '../../components/dashboard/QuickActions';
import TransactionsHistory from '../../components/dashboard/TransactionsHistory';
import LiveCurrency from '../../components/dashboard/LiveCurrency';

const DashHome = () => {
  return (
    <div className="dashHomeContainer" style={{ marginBottom: '20px' }}>
      <Accounts />
      <br />
      <hr />
      <p className="menu-label is-uppercase	has-text-weight-bold">
        Quick Actions
      </p>
      <div className="quickActions">
        <QuickActions />
      </div>
      <hr />
      <p className="menu-label is-uppercase	has-text-weight-bold">
        Transactions History
      </p>
      <div className="columns" style={{ borderLeft: '1px solid lightgrey' }}>
        <div className="column">
          <TransactionsHistory />
        </div>
        <div className="column">
          <LiveCurrency />
        </div>
      </div>
    </div>
  );
};
export default DashHome;
