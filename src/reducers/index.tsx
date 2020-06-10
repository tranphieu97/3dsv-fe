import { combineReducers } from 'redux';
import items from './item.reducer';
import layout from './layout.reducer';

const app = combineReducers({
  items,
  layout,
});

export default app;
