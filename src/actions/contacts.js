import uuid from 'uuid';

//ADD contact
export const addContact = (
  { 
    resourceName,
    name = 'N/A',
    gender = 'N/A',
    birthday = 'N/A',
    emailAddress = '',
    phoneNumber = '',
    selected = false,
    remove = false
  } = {}
) => ({
  type: 'ADD_CONTACT',
  contacts: {
    id: uuid(),
    resourceName,
    name,
    gender,
    birthday,
    emailAddress,
    phoneNumber,
    selected,
    remove
  }
});

// Show Contact Detail
export const showSelectedContact = ({id} = {}) => ({
  type: 'SHOW_CONTACT',
  id
});

// Remove Contact
export const removeContact = ({resourceName} = {}) => ({
  type: 'REMOVE_CONTACT',
  resourceName
});

// Edit Contact
export const updateContact = (resourceName, updates) => ({
  type: 'UPDATE_CONTACT',
  resourceName, 
  updates
});

export const showDetail = (resourceName, updates) => ({
  type: 'SHOW_DETAIL',
  resourceName,
  updates
})

export const hideDetail = (resourceName, updates) => ({
  type: 'HIDE_DETAIL',
  resourceName,
  updates
})

export const selectToRemove = (resourceName, updates) => ({
  type: 'SELECT_TO_REMOVE',
  resourceName,
  updates
})

export const selectToKeep = (resourceName, updates) => ({
  type: 'SELECT_TO_KEEP',
  resourceName,
  updates
})