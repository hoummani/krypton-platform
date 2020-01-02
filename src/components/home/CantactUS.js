/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './cantactUS.scss';

const CantactUS = () => {
  return (
    <div className="cantactus">
      <div className="columns">
        <div className="column">
          <br />
          <img
            src="/img/media/layers.png"
            alt="cantactus"
            className="imgHover"
            style={{ boxShadow: 'none' }}
          />
        </div>
        {/** cantact form */}
        <div className="column">
          <br />
          <br />
          <div className="">
            <div className="card-content">
              <div className="content">
                <h1 className="title">Cantact us</h1>
                <p className="">Feel free to send a plan text message</p>
                <div className="container">
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label" htmlFor="name">
                        From
                      </label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control is-expanded has-icons-left">
                          <input
                            className="input"
                            type="text"
                            id="name"
                            readOnly
                            placeholder="Name"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user" />
                          </span>
                        </p>
                      </div>
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
                    <div className="field-label" />
                    <div className="field-body">
                      <div className="field is-expanded">
                        <div className="field has-addons">
                          <p className="control">
                            <a className="button is-static">+212</a>
                          </p>
                          <p className="control is-expanded">
                            <input
                              className="input"
                              type="tel"
                              readOnly
                              placeholder="Your phone number"
                            />
                          </p>
                        </div>
                        <p className="help">Do not enter the first zero</p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Department</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select>
                              <option>Business development</option>
                              <option>Marketing</option>
                              <option>Sales</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label">
                      <label className="label">Already a member?</label>
                    </div>
                    <div className="field-body">
                      <div className="field is-narrow">
                        <div className="control">
                          <label className="radio">
                            <input type="radio" name="member" />
                            Yes
                          </label>
                          <label className="radio">
                            <input type="radio" name="member" />
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Subject</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            readOnly
                            placeholder="e.g. Partnership opportunity"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Question</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <textarea
                            className="textarea"
                            readOnly
                            placeholder="Explain how we can help you"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label" />
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <button className="button is-primary" type="button">
                            Send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CantactUS;
