import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  router: routerReducer
});