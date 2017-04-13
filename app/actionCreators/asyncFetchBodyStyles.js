import { REQUEST_BODY_STYLES, RECEIVE_BODY_STYLES} from '../actions/asyncFilterActions';

export const requestBodyStyles = () => {
	return {
		type: REQUEST_BODY_STYLES
	}
};

export const receiveBodyStyles = (json) => {
	return {
		type: RECEIVE_BODY_STYLES,
		items: json,
		receivedAt: Date.now()
	}
};

export const fetchBodyStyles = (categoryID) => {
	return (dispatch) => {
		dispatch(requestBodyStyles());

		return fetch(`http://api.auto.ria.com/categories/${categoryID}/bodystyles`)
			.then(response => response.json())
			.then(json => {
				dispatch(receiveBodyStyles(json));
			})
	}
};