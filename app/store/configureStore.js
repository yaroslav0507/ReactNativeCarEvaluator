import { applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
const { AsyncStorage } = require('react-native');

import combinedReducers from '../reducers';

const createAppStore = applyMiddleware()(createStore);

export function configureStore(onComplete) {
  const store = autoRehydrate()(createAppStore)(combinedReducers);

  persistStore(store, {storage: AsyncStorage}, onComplete);

  return store;
}
