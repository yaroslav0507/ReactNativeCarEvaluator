import { REQUEST_TRANSPORT_TYPES, RECEIVE_TRANSPORT_TYPES} from '../actions/asyncFilterActions';

export const requestCategories = () => {
	return {
		type: REQUEST_TRANSPORT_TYPES
	}
};

export const receiveCategories = (json) => {
	return {
		type: RECEIVE_TRANSPORT_TYPES,
		items: json,
		receivedAt: Date.now()
	}
};

export const fetchCategories = () => {
	return (dispatch) => {
		dispatch(requestCategories());

		return fetch(`http://api.auto.ria.com/categories`)
			.then(response => response.json())
			.then(json => {
				dispatch(receiveCategories(json));
			})
	}
};