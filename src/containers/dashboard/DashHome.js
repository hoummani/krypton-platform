import React from 'react';
import Accounts from '../../components/dashboard/Accounts';
import QuickActions from '../../components/dashboard/QuickActions';
import TransactionsHistory from '../../components/dashboard/TransactionsHistory';

const DashHome = () => {
  return (
    <div className="dashHomeContainer">
      <Accounts />
      <br />
      <hr />
      <p className="menu-label">Quick Actions</p>
      <QuickActions />
      <hr />
      <p className="menu-label">Transactions History</p>
      <div className="columns">
        <div className="column">
          <TransactionsHistory />
        </div>
        <div className="column">
          <p>gfhftfgftfgfgftfg</p>
        </div>
      </div>
    </div>
  );
};
export default DashHome;
