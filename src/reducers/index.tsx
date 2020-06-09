import { combineReducers } from 'redux';
import itemReducer from './item.reducer';

const app = combineReducers({
  itemReducer,
});

export default app;
