const { combineReducers } = require('redux');

import { transportTypes, transportFilters } from './transportFilterReducers';

export default combineReducers({
	transportTypes,
	transportFilters
})