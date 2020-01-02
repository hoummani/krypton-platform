/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class DepositModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="form">
        {/** account address */}
        <fieldset disabled>
          <div className="field">
            <label className="label" htmlFor="accountAddress">
              <strong>Account Address</strong>
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                value="234567878976554"
                readOnly
                id="accountAddress"
              />
            </div>
          </div>
        </fieldset>
        <br />
        {/** amount */}
        <div className="field">
          <label className="label" htmlFor="amount">
            <strong>Amount</strong>
          </label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Amount"
              id="amount"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DepositModalForm;
