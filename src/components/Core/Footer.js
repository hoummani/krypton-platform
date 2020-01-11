/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Krypton</strong>
            <a href="#"> open-source platform</a>. The source code is licensed
            <a href="#"> MIT </a>
            The website content is licensed
            <a href="#"> CC BY NC SA 4.0</a>
          </p>
          <div className="socialFooter">
            <span className="icon is-secondary" style={{ marginRight: '10px' }}>
              <i className="fab fa-2x fa-facebook-square" />
            </span>
            <span className="icon is-purple" style={{ marginRight: '10px' }}>
              <i className="fab fa-2x fa-youtube-square" />
            </span>
            <span className="icon is-secondary" style={{ marginRight: '10px' }}>
              <i className="fab fa-2x fa-twitter-square" />
            </span>
            <span className="icon">
              <i className="fab fa-2x fa-github-square" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
