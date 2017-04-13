import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
const { AsyncStorage } = require('react-native');
import { composeWithDevTools } from 'redux-devtools-extension';

import combinedReducers from '../reducers';
const loggerMiddleware = createLogger();

export function configureStore(onComplete) {
	const store = createStore(combinedReducers, composeWithDevTools(
		applyMiddleware(thunkMiddleware, loggerMiddleware),
		autoRehydrate()
	));

  persistStore(store, {storage: AsyncStorage}, onComplete);

  return store;
}
