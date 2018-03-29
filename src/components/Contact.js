import React from 'react';
import { connect } from 'react-redux';
import store from '../store/configureStore';

import { deleteContact, showDetailContact } from '../helper/people';
import { removeContact, updateContact, showDetail, selectToRemove } from '../actions/contacts';
import { openDetailModal, openRemoveModal } from '../actions/filter';

const handleDetailModalOpen = () => {
  setTimeout(() => {
    store.dispatch(openDetailModal());
    //console.log(store.getState());
  }, 100);
}

const handleRemoveModalOpen = () => {
  setTimeout(() => {
    store.dispatch(openRemoveModal());
    //console.log(store.getState());
  }, 100);
}

const Contact = ({dispatch, id, resourceName, name, gender, birthday}) => (
  <div>
    <div className="list-item">
      <div className="col toleft">
        <p className="list-font">{name}</p>
        <p className="list-font">{gender}</p>
      </div>

      <div className="col toright">
      <p className="list-font">{birthday}</p>
        <button 
          className="button button--action"
          onClick={() => {
          dispatch(selectToRemove(resourceName, {remove: true}));
          handleRemoveModalOpen();
        }}> Remove </button>
        <button 
          className="button button--action"
          onClick={() => {
          showDetailContact(resourceName);
          dispatch(showDetail(resourceName, {selected: true}));
          handleDetailModalOpen()
        }}>Detail</button>
      </div>
    </div>
  </div>
);



export default connect()(Contact);

