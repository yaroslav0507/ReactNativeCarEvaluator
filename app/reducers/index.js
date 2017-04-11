const { combineReducers } = require('redux');

import { transportFilters } from './transportFilterReducers';

export default combineReducers({
	transportFilters
})