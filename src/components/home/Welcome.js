import React from 'react';
import CarouselUI from './CarouselUI';
import './welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome">
      <br />
      <br />
      <br />
      <div className="columns">
        <div className="column has-padding-top-15">
          <div className="has-padding-5" style={{ marginLeft: '10px' }}>
            <h1 className="title has-text-light">
              Welcome to krypton platform
            </h1>
            <p className="has-text-light">
              krypton is a free client side interface helping you to interact
              with a lot of financial offers to be able to acheive your business
              goals. Easy to use, open-source and secure joins us to discover
              much more !
            </p>
            <br />
            <div>
              <button
                className="button is-primary"
                style={{ marginRight: '5px' }}
                type="button"
              >
                Sign In
              </button>
              <button className="button is-secondary" type="button">
                Create Account
              </button>
            </div>
          </div>
        </div>
        <div className="column">
          {/**
           * <img
            className=""
            height="400"
            src="/img/illustrations/blockchain-blocks.svg"
            alt="blockchain"
          />
           */}
          <CarouselUI />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
