import {
	REQUEST_CATEGORIES,
	RECEIVE_CATEGORIES
} from '../actions/asyncFilterActions'

import { updateObject, createReducer, initialDataState } from './reducerUtilites';

const requestCategories = (state) => {
	return updateObject(state, {
		isFetching: true
	});
};

const receiveCategories = (state, action) => {
	const receivedCategories = {
		isFetching: false,
		items: action.items,
		lastUpdated: action.receivedAt
	};
	return updateObject(state, receivedCategories);
};

const categories = createReducer(initialDataState, {
	[REQUEST_CATEGORIES]: requestCategories,
	[RECEIVE_CATEGORIES]: receiveCategories
});

export {
	categories
}