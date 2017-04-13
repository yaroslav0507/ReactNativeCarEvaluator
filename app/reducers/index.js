const { combineReducers } = require('redux');

import { filters } from './filterReducers';
import { categories } from './categoryReducers';
import { bodyStyles } from './bodyStyleReducers';

export default combineReducers({
	data: combineReducers({
		categories,
		bodyStyles
	}),
	filters
})