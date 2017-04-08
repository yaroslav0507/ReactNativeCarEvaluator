import { applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
const { AsyncStorage } = require('react-native');

import reducers from '../reducers';

const createAppStore = applyMiddleware()(createStore);

export function configureStore(onComplete) {
  const store = autoRehydrate()(createAppStore)(reducers);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  return store;
}
