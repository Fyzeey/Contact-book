//Create redux store
import {createStore, combineReducers} from 'redux';
import contactsReducer from '../reducers/contacts';
import filterReducer from '../reducers/filter';
import authenticationReducer from '../reducers/authentication';

const store = createStore(
  combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    authenticated: authenticationReducer
  })
);

export default store;



