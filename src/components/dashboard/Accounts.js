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
import DepositModal from './Modals/DepositModal';

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    // eslint-disable-next-line no-unused-vars
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
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
            modalState={this.state.modalState}
            title="Deposit to my Account"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sit amet justo in arcu efficitur malesuada nec ut diam. Aenean a
              iaculis eros. Proin nec purus congue, rutrum sapien id, sodales
              ante. Nam imperdiet sapien pretium leo dapibus euismod. Ut ac
              venenatis nunc. Praesent viverra purus vel lacus ullamcorper porta
              a a augue. Proin rhoncus tempus leo sed ultricies. In luctus
              aliquam placerat. Cras efficitur enim vitae vulputate consequat.
              Nulla tellus est, fringilla quis nisi eu, aliquam finibus eros.
            </p>
            <p>
              Aliquam est dui, varius eu tempor ac, ornare vel magna.
              Suspendisse potenti. Nullam gravida fermentum turpis, at ultricies
              risus bibendum sit amet. Nulla et arcu id nisi semper ullamcorper
              cursus sed magna. Phasellus pulvinar ligula vehicula consequat
              sagittis. Donec tristique tellus sed ex euismod ullamcorper.
              Vivamus nibh metus, scelerisque sed lorem eget, auctor lobortis
              sapien. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Proin congue auctor diam,
              efficitur dignissim neque. Pellentesque vitae odio ut odio auctor
              feugiat. Curabitur eget mauris nibh. Vestibulum massa nunc,
              iaculis at purus venenatis, mollis tincidunt tortor.
            </p>
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
