import { updateObject, createReducer, initialDataState } from '../reducerUtilites';

export function preloadDataReducer(requestEventName, receiveEventName) {

	const requestData = (state) => {
		return updateObject(state, {
			isFetching: true
		});
	};

	const receiveData = (state, action) => {
		const receivedData = {
			isFetching: false,
			items: action.items,
			lastUpdated: action.receivedAt
		};
		return updateObject(state, receivedData);
	};

	return createReducer(initialDataState, {
		[requestEventName]: requestData,
		[receiveEventName]: receiveData
	});

}