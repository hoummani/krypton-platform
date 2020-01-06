/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const TransactionToSomeOneModal = ({
  children,
  closeModal,
  makeTransaction,
  modalState,
  title
}) => {
  if (!modalState) {
    return null;
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete is-danger" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
        <footer className="modal-card-foot">
          <a className="button is-primary" onClick={makeTransaction}>
            <strong>Make Transaction</strong>
          </a>
          <a className="button is-light" onClick={closeModal}>
            <strong>Cancel</strong>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default TransactionToSomeOneModal;
