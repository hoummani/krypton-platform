import React, { Component } from 'react';

class TransactionToSomeOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="form">
        {/** account address */}
        <div className="field">
          <input
            className="input"
            type="text"
            placeholder="Account Address"
            id="accountAddress"
          />
        </div>
        {/** amount */}
        <div className="field">
          <input
            className="input"
            type="number"
            placeholder="Amount"
            id="amount"
          />
        </div>
        {/** available at */}
        <div className="field">
          <input
            className="input"
            type="date"
            placeholder="Available at"
            id="available_at"
          />
        </div>
        {/** description */}
        <div className="field">
          <textarea
            className="textarea"
            id="description"
            placeholder="Transaction description"
          />
        </div>
      </div>
    );
  }
}

export default TransactionToSomeOne;
