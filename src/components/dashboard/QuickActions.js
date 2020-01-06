/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import TransactionToSomeOneModal from './Modals/TransactionToSomeOneModal';
import TransactionToSomeOneForm from '../../containers/dashboard/forms/TransactionToSomeOneForm';

class QuickActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.makeTransaction = this.makeTransaction.bind(this);
  }

  toggleModal() {
    // eslint-disable-next-line no-unused-vars
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  makeTransaction() {
    // eslint-disable-next-line no-console
    console.log('Make transaction !');
    setTimeout(() => {
      this.toggleModal();
    }, 200);
  }

  render() {
    return (
      <div className="quickActions">
        <div className="columns">
          <div className="column">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span className="">
                    <i className="fas fa-paper-plane" aria-hidden="true" />
                  </span>
                  <span style={{ marginLeft: '3px' }}>
                    <strong>Send Transaction</strong>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a className="dropdown-item" onClick={this.toggleModal}>
                    <strong>To someone</strong>
                  </a>
                  <a className="dropdown-item">
                    <strong>Between Accounts</strong>
                  </a>
                  <a className="dropdown-item">
                    <strong>To Financial Institution</strong>
                  </a>
                  <hr className="dropdown-divider" />
                  <a className="dropdown-item">
                    <strong>Other Transactions</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/**
           *  Modal
           */}
          <TransactionToSomeOneModal
            closeModal={this.toggleModal}
            makeTransaction={this.makeTransaction}
            modalState={this.state.modalState}
            title="Send Transaction To Some One"
          >
            <TransactionToSomeOneForm />
          </TransactionToSomeOneModal>
          <div className="column">
            <button className="button" type="button">
              <strong>
                <span style={{ marginRight: '3px' }}>
                  <i className="fas fa-credit-card" />
                </span>
                Pay services
              </strong>
            </button>
          </div>
          <div className="column">
            <button className="button" type="button">
              <strong>
                <span style={{ marginRight: '3px' }}>
                  <i className="fas fa-download" />
                </span>
                Downoald Transactions
              </strong>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickActions;
