/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types
const DepositModal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={closeModal}>
            Cancel
          </a>
        </footer>
      </div>
    </div>
  );
};

export default DepositModal;
