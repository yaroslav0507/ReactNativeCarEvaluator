import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES} from '../actions/asyncFilterActions';

export const requestCategories = () => {
	return {
		type: REQUEST_CATEGORIES
	}
};

export const receiveCategories = (json) => {
	return {
		type: RECEIVE_CATEGORIES,
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