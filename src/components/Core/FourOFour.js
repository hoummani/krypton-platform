/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const FourOFour = () => {
  return (
    <div className="fourofour">
      <div className="container" style={{ marginTop: '15px' }}>
        <div className="card">
          <div className="columns">
            <div className="column">
              <img
                src="/img/core/big-spaceman.1b378c1b.png"
                alt="Placeholder image"
              />
            </div>
            <div className="column">
              <h1 className="title has-text-centered	 has-text-primary">404</h1>
              <p className="subtitle has-text-centered">This page not found!</p>
              <div className="">
                <button
                  className="button is-primary is-fullwidth"
                  type="button"
                >
                  <strong>Go Back</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourOFour;
