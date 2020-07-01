import { FETCH_USER, LOGOUT_USER } from '../actions/types';

const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case LOGOUT_USER:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
