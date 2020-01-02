/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import DepositModal from '../../components/dashboard/Modals/DepositModal';
import DepositModalFprm from './forms/DepositModalForm';

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.saveModal = this.saveModal.bind(this);
  }

  toggleModal() {
    // eslint-disable-next-line no-unused-vars
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  saveModal() {
    // eslint-disable-next-line no-console
    console.log('save modal');
    setTimeout(() => {
      this.toggleModal();
    }, 200);
  }

  render() {
    return (
      <div className="accounts">
        <div className="columns">
          <div className="column">
            <div className="card">
              {/** class= cardHeader */}
              <header className="card-header cardHeaderBack">
                <p className="card-header-title has-text-white">
                  Primary Account
                </p>
                <a
                  href="#"
                  className="card-header-icon has-text-white"
                  aria-label="more options"
                >
                  <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                  <h5 className="subtitle has-text-centered">
                    Balance : 12345676767 kr
                  </h5>
                  <p className="has-text-centered">Address : 89679696876878</p>
                </div>
              </div>
              <footer className="card-footer">
                <a
                  className="card-footer-item button"
                  onClick={this.toggleModal}
                >
                  <strong>Deposit</strong>
                </a>
                <a className="button card-footer-item">
                  <strong>Widthraw</strong>
                </a>
              </footer>
            </div>
          </div>
          {/** modal */}
          <DepositModal
            closeModal={this.toggleModal}
            saveModal={this.saveModal}
            modalState={this.state.modalState}
            title="Deposit to my Account"
          >
            <DepositModalFprm />
          </DepositModal>
          <div className="column">
            <div className="card">
              <header className="card-header cardHeaderBack">
                <p className="card-header-title has-text-white has-text-centered">
                  Totally Balence
                </p>
                <a
                  href="#"
                  className="card-header-icon has-text-white"
                  aria-label="more options"
                >
                  <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                  <h2 className="subtitle has-text-centered">-12454 kr</h2>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item">
                  <strong>History</strong>
                </a>
              </footer>
            </div>
          </div>
        </div>
        <hr />
        <div className="savingAccount">
          <p className="menu-label is-uppercase	has-text-weight-bold">
            Saving Accounts
          </p>
          <div className="notification is-warning">
            <button className="delete" />
            For now you dont have any. <strong>Saving Account</strong>, it's
            simple you can create it now <a>Add Saving Account</a>.
          </div>
        </div>
      </div>
    );
  }
}

export default Accounts;
