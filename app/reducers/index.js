const { combineReducers } = require('redux');

import { filters } from './filterReducers';
import { categories } from './categoryReducers';

export default combineReducers({
	data: combineReducers({
		categories
	}),
	filters
})