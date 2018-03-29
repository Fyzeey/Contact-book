import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { deleteContact } from '../helper/people';
import store from '../store/configureStore';
import ContactsFilter from './ContactsFilter';

import filterContacts from '../selectors/Contacts';
import selectedContact from '../selectors/SelectedContacts';
import willRemoveContact from '../selectors/WillRemoveContact';

import DetailModal from './DetailModal';
import RemoveModal from './RemoveModal';

import { closeDetailModal, closeRemoveModal } from '../actions/filter';
import { hideDetail, removeContact } from '../actions/contacts';


const Contacts = (props) => {
  if (props.authentication.authenticated) {
    return (
      <div>
        <h1 className="page-header__title">Contact List</h1>
        <ContactsFilter  />
        <div className="list-header">
          <div className="show-for-desktop list-font">Name/Gender</div>
          <div className="show-for-desktop list-font">Birthday</div>
        </div>
        {props.contacts.map((contact) => {
          return <Contact key={contact.id} {...contact}/>
        })}
        <DetailModal 
          modalStates={props.filter} 
          selectedContact={props.selectedContact}
          unSelectedContact={handleDetailModalClose}
          hideDetail = {hideDetail}/>
        <RemoveModal
          modalStates={props.filter}
          willRemoveContact={props.willRemoveContact}
          removeContactClose={handleRemoveContactClose}
          keepContactClose={handleKeepContactClose}  />
      </div>
    )
  } else {
    return (
      <p></p>
    )
  }
};

const handleDetailModalClose = (resourceName) => {
  store.dispatch(hideDetail(resourceName, {selected: false}));
  store.dispatch(closeDetailModal());
}

const handleKeepContactClose = () => {
  store.dispatch(closeRemoveModal());
}

const handleRemoveContactClose = (resourceName) => {
  deleteContact(resourceName);     
  setTimeout(() => {
    store.dispatch(removeContact({ resourceName }));
  }, 1000)
  store.dispatch(closeRemoveModal());
}


const mapStateToProps = (state) => {
  return {
    contacts: filterContacts(state.contacts, state.filter),
    selectedContact: selectedContact(state.contacts),
    willRemoveContact: willRemoveContact(state.contacts),
    filter: state.filter,
    authentication: state.authenticated
  };
};

export default connect(mapStateToProps)(Contacts);

