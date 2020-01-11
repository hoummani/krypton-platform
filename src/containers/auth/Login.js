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
import Navbar from '../../components/Core/Navbar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(this.state);
  };

  render() {
    return (
      <div className="">
        <Navbar />
        <br />
        <div className="container">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h1 className="title">Welcome to krypton platform</h1>
                <p className="">
                  if you don't use krypton it's simple to{' '}
                  <a href="#">register now</a>
                </p>
                <div className="container">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field -s-horizontal">
                      <div className="field body">
                        <div className="field">
                          <p className="control is-expanded has-icons-left has-icons-right">
                            <input
                              className="input"
                              type="email"
                              id="email"
                              onChange={this.handleChange}
                              placeholder="Email"
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
                              onChange={this.handleChange}
                              placeholder="Password"
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
                        <div className="field is-narrow">
                          <div className="control">
                            <label className="checkbox">
                              <input
                                style={{ marginRight: '2px' }}
                                type="checkbox"
                              />
                              Remember me?{' '}
                              <span className="has-text-danger">
                                Don't tick this box if you are using a public or
                                shared computer
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal">
                      <div className="field-label">
                        <label className="label is-left">
                          <a href="#">Forget password?</a>
                        </label>
                      </div>
                    </div>

                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <button
                              className="button is-primary"
                              style={{ marginRight: '3px' }}
                              type="submit"
                            >
                              <span className="icon">
                                <i className="fas fa-sign-in-alt" />
                              </span>
                              <strong>Login</strong>
                            </button>
                            <button className="button is-light" type="button">
                              <span className="icon">
                                <i className="fas fa-arrow-left" />
                              </span>
                              <span>
                                <Link className="has-text-black" to="/">
                                  <strong>Go Back</strong>
                                </Link>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default Login;
