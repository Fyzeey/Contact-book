//Contacts Reducer
const contactsReducerDefaultState = [];

const contactsReducer = (state = contactsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      let duplicate = false;
      state.map((contact) => {
        if (contact.name === action.contacts.name ) {
          duplicate = true;
        }
      });
      if (!duplicate) {
        return [
          ...state,
          action.contacts
        ];
      } 
    case 'REMOVE_CONTACT':
      return state.filter(({resourceName}) => resourceName !== action.resourceName);

    case 'UPDATE_CONTACT':
      return state.map((contact) => {
        if (contact.resourceName === action.resourceName) {
          return {
            ...contact,
            ...action.updates
        };
      } else {
        return contact;
        };
      });

    case 'SHOW_DETAIL':
      return state.map((contact) => {
        if (contact.resourceName === action.resourceName) {
          return {
            ...contact,
            ...action.updates
        };
      } else {
        return contact;
        };
      });

    case 'HIDE_DETAIL':
    return state.map((contact) => {
      if (contact.resourceName === action.resourceName) {
        return {
          ...contact,
          ...action.updates
      };
    } else {
      return contact;
      };
    });
      
    case 'SELECT_TO_REMOVE':
    return state.map((contact) => {
      if (contact.resourceName === action.resourceName) {
        return {
          ...contact,
          ...action.updates
      };
    } else {
      return contact;
      };
    });

    case 'SELECT_TO_KEEP':
      return state.map((contact) => {
        if (contact.resourceName === action.resourceName) {
          return {
            ...contact,
            ...action.updates
        };
      } else {
        return contact;
        };
      });

    default:
      return state;
  }
};

export default contactsReducer;