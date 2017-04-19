import {
	REQUEST_STATES,
	RECEIVE_STATES
} from '../actions/asyncFilterActions'

import { updateObject, createReducer, initialDataState } from './reducerUtilites';

const requestStates = (state) => {
	return updateObject(state, {
		isFetching: true
	});
};

const receiveStates = (state, action) => {
	const receivedStates = {
		isFetching: false,
		items: action.items,
		lastUpdated: action.receivedAt
	};
	return updateObject(state, receivedStates);
};

const states = createReducer(initialDataState, {
	[REQUEST_STATES]: requestStates,
	[RECEIVE_STATES]: receiveStates
});

export {
	states
}