const { combineReducers } = require('redux');

import {
	categories,
	states,
	fuels,
	gearboxes
} from './preloadReducers';

import { bodyStyles } from './bodyStyleReducers';
import { marks } from './marksReducers';
import { models } from './modelsReducers';
import { filters } from './filterReducers';
import { price } from './priceReducers';

export default combineReducers({
	data: combineReducers({
		categories,
		states,
		fuels,
		gearboxes,
		bodyStyles,
		marks,
		models
	}),
	filters,
	price
})