import {
	REQUEST_BODY_STYLES,
	RECEIVE_BODY_STYLES
} from '../actions/asyncFilterActions'

import { updateObject, createReducer, initialDataState } from './reducerUtilites';

const requestBodyStyles = (state, action) => {
	return updateObject(state, {
		[action.categoryID]: { isFetching: true }
	})
};

const receiveBodyStyles = (state, action) => {
	return updateObject(state, {
		isFetching: false,
		items: action.items,
		lastUpdated: action.receivedAt
	})
};

const bodyStyle = createReducer(initialDataState, {
	[REQUEST_BODY_STYLES]: requestBodyStyles,
	[RECEIVE_BODY_STYLES]: receiveBodyStyles
});

const delegateToSubReducer = (state, action) => {
	return updateObject(state, {
		[action.categoryID]: bodyStyle(undefined, action)
	});
};

const bodyStyles = createReducer({}, {
	[REQUEST_BODY_STYLES]: delegateToSubReducer,
	[RECEIVE_BODY_STYLES]: delegateToSubReducer
});

export {
	bodyStyles
}