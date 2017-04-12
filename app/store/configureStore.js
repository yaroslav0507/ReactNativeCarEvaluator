import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
const { AsyncStorage } = require('react-native');

import combinedReducers from '../reducers';
const loggerMiddleware = createLogger();

const createAppStore = applyMiddleware(
  thunkMiddleware,
	loggerMiddleware
)(createStore);

export function configureStore(onComplete) {
  const store = autoRehydrate()(createAppStore)(combinedReducers);

  persistStore(store, {storage: AsyncStorage}, onComplete);

  return store;
}
