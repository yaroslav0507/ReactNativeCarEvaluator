import {
	REQUEST_MARKS,
	RECEIVE_MARKS
} from '../actions/asyncFilterActions';

import { updateObject, createReducer, initialDataState } from './reducerUtilites';

const requestMarks = (state, action) => {
	return updateObject(state, {
		[action.categoryID]: { isFetching: true }
	})
};

const receiveMarks = (state, action) => {
	return updateObject(state, {
		isFetching: false,
		items: action.items,
		lastUpdated: action.receivedAt
	})
};

const mark = createReducer(initialDataState, {
	[REQUEST_MARKS]: requestMarks,
	[RECEIVE_MARKS]: receiveMarks
});

const delegateToSubReducer = (state, action) => {
	return updateObject(state, {
		[action.categoryID]: mark(undefined, action)
	})
};

const marks = createReducer({}, {
	[REQUEST_MARKS]: delegateToSubReducer,
	[RECEIVE_MARKS]: delegateToSubReducer,
});

export {
	marks
}