import React from 'react';
import Welcome from './Welcome';
import CantactUS from './CantactUS';
import Navbar from '../Core/Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Welcome />
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <hr />
        <h1 className="title has-text-centered	is-uppercase	has-text-weight-light	 has-text-primary	">
          krypton platform support
        </h1>
        <hr />
      </div>
      <CantactUS />
    </div>
  );
};

export default Home;
