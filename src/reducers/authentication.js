const authenticationReducerDefaultState = {
  authenticated: false,
};

export default (state = authenticationReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        authenticated: true
      };

    case 'LOG_OUT':
    return {
      ...state,
      authenticated: false
    }; 
    default:
      return state;
  }
};