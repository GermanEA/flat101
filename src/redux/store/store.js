import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import apiReducer from '../reducers/apiReducer';

const appReducers = combineReducers({
  apiReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

export default store;