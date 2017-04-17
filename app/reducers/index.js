const { combineReducers } = require('redux');

import { filters } from './filterReducers';
import { categories } from './categoryReducers';
import { bodyStyles } from './bodyStyleReducers';
import { price } from './priceReducers';
import { marks } from './marksReducers';
import { models } from './modelsReducers';

export default combineReducers({
	data: combineReducers({
		categories,
		bodyStyles,
		marks,
		models
	}),
	filters,
	price
})