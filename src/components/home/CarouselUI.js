/* eslint-disable react/sort-comp */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './carousel.scss';

class CarouselUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    };
  }

  updateSrc() {
    const images = [
      '/img/illustrations/krypton-app.svg',
      '/img/illustrations/krytpon-platform.svg',
      '/img/illustrations/crypto-mining.svg',
      '/img/illustrations/krypton-token-network.svg'
    ];
    // eslint-disable-next-line array-callback-return
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < images.length; index++) {
      const element = images[index];
      this.setState({ src: element });
    }
  }

  componentDidMount() {
    setTimeout(() => this.updateSrc(), 1000);
  }

  render() {
    return (
      <div>
        <img src={this.state.src} className="svgImg" alt="" />
      </div>
    );
  }
}

export default CarouselUI;
