import React from 'react';
import Modal from 'react-modal';
import store from '../store/configureStore';

const DetailModal = (props) => (
  <Modal
   isOpen={props.modalStates.detailModal}
   onRequestClose={() => {props.unSelectedContact(props.selectedContact[0].resourceName)}}
   contentLabel="Contact Detail"
   closeTimeoutMS={200}
   className="modal">
  <h3 className="modal__title"> Contact Detail </h3>
  {props.modalStates.detailModal &&
    <div className="modal__body">
      <p>Name: {props.selectedContact[0].name}</p>
      <p>Gender: {props.selectedContact[0].gender}</p>
      <p>Birthday: {props.selectedContact[0].birthday}</p>
      <p>Email: {props.selectedContact[0].emailAddress}</p>
      <p>Phone: {props.selectedContact[0].phoneNumber}</p>
      <button 
        className="button"
        onClick={() => {
        props.unSelectedContact(props.selectedContact[0].resourceName)
      }}> 
        Close 
      </button>
    </div>}
  </Modal>
);

export default DetailModal;