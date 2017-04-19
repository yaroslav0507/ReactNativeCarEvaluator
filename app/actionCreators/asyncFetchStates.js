import { REQUEST_STATES, RECEIVE_STATES} from '../actions/asyncFilterActions';

export const requestStates = () => {
	return {
		type: REQUEST_STATES
	}
};

export const receiveStates = (items) => {
	return {
		type: RECEIVE_STATES,
		items,
		receivedAt: Date.now()
	}
};

export const fetchStates = () => {
	return (dispatch) => {
		dispatch(requestStates());

		return fetch(`http://api.auto.ria.com/states`)
			.then(response => response.json())
			.then(json => {
				dispatch(receiveStates(json));
			})
	}
};

export const shouldFetchStates = (state) => {
	const states = state.data.states;

	if (!states.items.length) {
		return true
	} else if (states.isFetching) {
		return false;
	}
};

export const fetchStatesIfNeeded = () => {
	return (dispatch, getState) => {
		if (shouldFetchStates(getState())) {
			return dispatch(fetchStates());
		} else {
			Promise.resolve();
		}
	}
};