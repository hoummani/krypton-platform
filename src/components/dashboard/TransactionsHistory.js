/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const TransactionsHistory = () => {
  return (
    <div className="container">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="media"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <div>
              <strong>John Smith</strong>
              <small>@johnsmith</small>
              <small>31m</small>
              <br />
              <h5 className="subtitle has-text-right">+1200</h5>
              29/12/2019
            </div>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-retweet" />
                </span>
              </a>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete is-small" />
        </div>
      </article>

      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="media"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <div>
              <strong>John Smith</strong>
              <small>@johnsmith</small>
              <small>31m</small>
              <br />
              <h5 className="subtitle has-text-right">+1200</h5>
              29/12/2019
            </div>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-retweet" />
                </span>
              </a>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete is-small" />
        </div>
      </article>

      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="media"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <div>
              <strong>John Smith</strong>
              <small>@johnsmith</small>
              <small>31m</small>
              <br />
              <h5 className="subtitle has-text-right">+1200</h5>
              29/12/2019
            </div>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-retweet" />
                </span>
              </a>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete is-small" />
        </div>
      </article>
    </div>
  );
};

export default TransactionsHistory;
