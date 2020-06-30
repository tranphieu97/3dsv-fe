import { combineReducers } from 'redux';
import items from './item.reducer';
import layout from './layout.reducer';
import auth from './auth.reducer';

const app = combineReducers({
  items,
  layout,
  auth,
});

export default app;
