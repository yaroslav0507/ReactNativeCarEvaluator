const { combineReducers } = require('redux');

import { filters } from './filterReducers';
import { categories } from './categoryReducers';
import { bodyStyles } from './bodyStyleReducers';
import { price } from './priceReducers';

export default combineReducers({
	data: combineReducers({
		categories,
		bodyStyles
	}),
	filters,
	price
})