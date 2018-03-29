// Handle all google people api call and response.


import config from './config';
import $ from 'jquery';
import store from '../store/configureStore'
import { addContact, updateContact } from '../actions/contacts';
import { userLoggedIn } from '../actions/authentication';
import { userLoggedOut } from '../actions/authentication';

//const store = configureStore();
/**
 *  On load, called to load the auth2 library and API client library.
 */

export const handleClientLoad = () => {
  window.gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
export const initClient = () => {
  window.gapi.client.init({
    apiKey: config.API_KEY,
    clientId: config.CLIENT_ID,
    discoveryDocs: config.DISCOVERY_DOCS,
    scope: config.SCOPES
  }).then(() => {
    // Listen for sign-in state changes.
    window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    // Handle the initial sign-in state.
    updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
export const updateSigninStatus = (isSignedIn) => {
  if (isSignedIn) {
    store.dispatch(userLoggedIn());
    listConnectionNames();
  } else {
    store.dispatch(userLoggedOut());
    console.log(store.getState());
    }   
  } 

/**
 *  Sign in the user upon button click.
 */
export const handleAuthClick = (event) => {
  window.gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
export const handleSignoutClick = (event) => {
  window.gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
export const appendPre = (message) => {
  const pre = document.getElementById('content');
  let textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print the display name if available for 10 connections.
 */
export const listConnectionNames = () => {
  window.gapi.client.people.people.connections.list({
      'resourceName': 'people/me',
      'pageSize': 100,
      'personFields': 'names,genders,birthdays',
    }).then((response) => {
      let connections = response.result.connections;
      if (connections.length > 0) {
        for (let i = 0; i < connections.length; i++) {
   
          if (typeof connections[i].names == 'undefined' ) {
            let newdata = {};
            newdata['names'] = [{"displayName": "Not Available"}];
            //$.extend(true, connections[i], newdata);
          }
          if (typeof connections[i].genders == 'undefined') {
            let newdata = {};
            newdata['genders'] = [{"value": "Not Available"}];
            $.extend(true, connections[i], newdata);
          }
          if (typeof connections[i].birthdays == 'undefined') {
            let newdata = {};
            newdata['birthdays'] = [{"text": "Not Available"}];
            $.extend(true, connections[i], newdata);
          }
          if (typeof connections[i].phoneNumbers == 'undefined') {
            let newdata = {};
            newdata['phoneNumbers'] = [{"value": "Not Available"}];
            $.extend(true, connections[i], newdata);
          }
          if (typeof connections[i].emailAddresses == 'undefined') {
            let newdata = {};
            newdata['emailAddresses'] = [{"value": "Not Available"}];
            $.extend(true, connections[i], newdata);
          }
          let person = connections[i];
          //console.log(person)
          store.dispatch(addContact({
            resourceName: person.resourceName,
            name: person.names[0].displayName,
            gender: person.genders[0].value,
            birthday: person.birthdays[0].text,
            //emailAddress: person.emailAddresses[0].value,
            //phoneNumber: person.phoneNumbers[0].value
          }));
        }
        console.log(store.getState());
      } else {
        console.log('No upcoming events found.');
      }
    });
}

export const createNewContact = (familyName, givenName, gender, birthday, email, phone) => {
  window.gapi.client.people.people.createContact({
    "genders": [
      {
        "value": gender
      }
    ],
    "names": [
      {
        "familyName": familyName,
        "givenName": givenName,
      }
    ],
    "phoneNumbers":[
      {
        "value": phone
      }
    ],
    "emailAddresses":[
      {
        "value": email
      }
    ],
    "birthdays": [
      {
        "text": birthday
      }
    ]    
  }).then((response) => {
    console.log(response);
  });
}

export const showDetailContact = (resourceName) => {
  window.gapi.client.people.people.get({
    'resourceName': resourceName,
    'personFields': 'phoneNumbers,emailAddresses'
  }).then((response) => {
    console.log(response);
    let connections = response.result;
    if (typeof connections.phoneNumbers == 'undefined') {
      let newdata = {};
      newdata['phoneNumbers'] = [{"value": "Not Available"}];
      $.extend(true, connections, newdata);
    }
    if (typeof connections.emailAddresses == 'undefined') {
      let newdata = {};
      newdata['emailAddresses'] = [{"value": "Not Available"}];
      $.extend(true, connections, newdata);
    }
    let person = connections;
    store.dispatch(updateContact(resourceName, {
      emailAddress: person.emailAddresses[0].value,
      phoneNumber: person.phoneNumbers[0].value
    }));
  });
}

export const deleteContact = (resourceName) => {
  window.gapi.client.people.people.deleteContact({
    'resourceName': resourceName
  }).then((response) => {
    console.log(response);
  });
}