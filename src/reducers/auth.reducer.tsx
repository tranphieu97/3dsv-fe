import { FETCH_USER } from '../actions/types';

const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
