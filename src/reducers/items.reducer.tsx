import { FETCH_ITEMS } from 'actions/types';
const itemsReducer = (state = [], action: any) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default itemsReducer;
