//filter reducer, handle sorting request and modal state.
const filtersReducerDefaultState = {
  sortBy: 'name',
  detailModal: false,
  removeModal: false
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      };
    case 'SORT_BY_GENDER':
      return {
        ...state,
        sortBy: 'gender'
      };
    case 'SORT_BY_BIRTHDAY':
      return {
        ...state,
        sortBy: 'birthday'
      };
    case 'OPEN_DETAIL_MODAL':
      return {
        ...state,
        detailModal: true
      };
    case 'CLOSE_DETAIL_MODAL':
      return {
        ...state,
        detailModal: false
      };
    case 'OPEN_REMOVE_MODAL':
      return {
        ...state,
        removeModal: true
      };
    case 'CLOSE_REMOVE_MODAL':
      return {
        ...state,
        removeModal: false
      };     
    default:
      return state;
  }
};
