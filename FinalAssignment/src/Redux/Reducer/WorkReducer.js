const INITIAL_STATE = {
    title: '',
    body: '',
  };
  
  const WorkReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'GET_TITLE':
        return {...state, title: action.payload};
      case 'GET_BODY':
        return {...state, body: action.payload};
      default:
        return state;
    }
  };
  export default WorkReducer;
  