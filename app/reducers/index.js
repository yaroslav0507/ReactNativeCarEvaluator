const { combineReducers } = require('redux');

import { filters } from './filterReducers';
import { categories } from './categoryReducers';
import { bodyStyles } from './bodyStyleReducers';
import { price } from './priceReducers';
import { marks } from './marksReducers';

export default combineReducers({
	data: combineReducers({
		categories,
		bodyStyles,
		marks
	}),
	filters,
	price
})