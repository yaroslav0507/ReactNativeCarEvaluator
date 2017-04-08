import { compose, createStore, combineReducers } from 'redux';
import { transports } from './reducers/transportTypeReducers';

export default createStore(transports);