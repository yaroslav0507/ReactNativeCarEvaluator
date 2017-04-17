import {
	REQUEST_MODELS,
	RECEIVE_MODELS
} from '../actions/asyncFilterActions';

import { updateObject, createReducer, initialDataState } from './reducerUtilites';

const requestModels = (state, action) => {
	return updateObject(state, {
		[action.markID]: {
			isFetching: true
		}
	});
};

const receiveModels = (state, action) => {
	return updateObject(state, {
		[action.markID]: {
			isFetching: false,
			items: action.items,
			lastUpdated: action.receivedAt
		}
	})
};

const model = createReducer(initialDataState, {
	[REQUEST_MODELS]: requestModels,
	[RECEIVE_MODELS]: receiveModels
});

const delegateToSubReducer = (state, action) => {
	return updateObject(state, {
		[action.categoryID]: model(state[action.categoryID], action)
	})
};

const models = createReducer({}, {
	[REQUEST_MODELS]: delegateToSubReducer,
	[RECEIVE_MODELS]: delegateToSubReducer
});

export {
	models
}