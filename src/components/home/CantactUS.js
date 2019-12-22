/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Img from 'react-image';
import './cantactUS.scss';

const CantactUS = () => {
  return (
    <div className="cantactus">
      <div className="columns">
        <div className="column">
          <Img
            src="/img/illustrations/layers.svg"
            alt="cantactus"
            className="imgHover"
          />
        </div>
        {/** cantact form */}
        <div className="column">
          <br />
          <br />
          <div className="card">
            <div className="card-content">
              {/** 
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <Img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
              */}
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
                            value="alex@smith.com"
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
