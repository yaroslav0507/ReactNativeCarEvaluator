const { combineReducers } = require('redux');

import { filters } from './filterReducers';
import { categories } from './categoryReducers';
import { bodyStyles } from './bodyStyleReducers';
import { price } from './priceReducers';
import { marks } from './marksReducers';
import { models } from './modelsReducers';
import { states } from './statesReducers';

export default combineReducers({
	data: combineReducers({
		categories,
		bodyStyles,
		marks,
		models,
		states
	}),
	filters,
	price
})