import React from 'react';
import Modal from 'react-modal';
import store from '../store/configureStore';

const RemoveModal = (props) => (
  <Modal
   isOpen={props.modalStates.removeModal}
   onRequestClose={props.keepContactClose}
   contentLabel="Remove Warning"
   closeTimeoutMS={200}
   className="modal">
    <h3 className="modal__title"> Are you sure you want to delete this contact? </h3> 
    <button
    className="button"
    onClick={() => {
      props.removeContactClose(props.willRemoveContact[0].resourceName)
    }}> Yes </button>
    <button 
    className="button--yellow"
    onClick={props.keepContactClose}> No </button>
  </Modal>
);

export default RemoveModal;