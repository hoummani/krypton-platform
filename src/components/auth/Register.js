/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Core/Navbar';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="register">
        <Navbar />
        <br />
        <div className="container">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h1 className="title">Join to krypton community</h1>
                <p className="">
                  if you already have one it's simple to{' '}
                  <a href="#">sign in now</a>
                </p>
                <div className="container">
                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field">
                        <p className="control is-expanded has-icons-left">
                          <input
                            className="input"
                            type="text"
                            id="firstName"
                            placeholder="FirstName"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user" />
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control is-expanded has-icons-left">
                          <input
                            className="input"
                            type="text"
                            id="lastName"
                            placeholder="LastName"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field -s-horizontal">
                    <div className="field body">
                      <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                          <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            defaultValue="alex@smith.com"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field">
                        <p className="control is-expanded has-icons-left">
                          <input
                            className="input"
                            type="password"
                            id="password"
                            placeholder="Password"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock" />
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control is-expanded has-icons-left">
                          <input
                            className="input"
                            type="password"
                            id="confirmPassword"
                            placeholder="ConfirmPassword"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <button
                            className="button is-primary"
                            style={{ marginRight: '3px' }}
                            type="button"
                          >
                            <span className="icon">
                              <i className="fas fa-sign-in-alt" />
                            </span>
                            <span>Register</span>
                          </button>
                          <button className="button is-light" type="button">
                            <span className="icon">
                              <i className="fas fa-arrow-left" />
                            </span>
                            <span>
                              <Link className="has-text-black" to="/">
                                Go Back
                              </Link>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/** 
                  <div className="notification is-warning">
                    <button className="delete" />
                    Don't tick the box of remember me if you are using a public or
                    shared computer
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
