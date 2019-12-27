import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import UiReducer from './reducers/UiReducer';

export default createStore(
  combineReducers({ UiReducer }),
  {},
  applyMiddleware(thunk, logger)
);
