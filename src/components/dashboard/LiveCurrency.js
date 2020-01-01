/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const LiveCurrency = () => {
  return (
    <div className="liveCurrency">
      <article className="panel is-primary">
        <p className="panel-heading">Currencies Market</p>
        <p className="panel-tabs">
          <a className="is-active" href="#">
            All
          </a>
          <a>Public</a>
          <a>Private</a>
          <a>Sources</a>
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              className="input is-primary"
              type="text"
              placeholder="Search"
            />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>
          </p>
        </div>
        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-dollar-sign" aria-hidden="true" />
          </span>
          Dollar
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-euro-sign" aria-hidden="true" />
          </span>
          Euro
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fab fa-bitcoin" aria-hidden="true" />
          </span>
          Bitcoin
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fab fa-ethereum" aria-hidden="true" />
          </span>
          Etherium
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-lira-sign" aria-hidden="true" />
          </span>
          Lira
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-rupee-sign" aria-hidden="true" />
          </span>
          Rupee
        </a>
      </article>
    </div>
  );
};

export default LiveCurrency;
