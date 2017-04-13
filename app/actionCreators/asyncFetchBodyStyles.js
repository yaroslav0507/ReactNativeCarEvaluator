import { REQUEST_BODY_STYLES, RECEIVE_BODY_STYLES} from '../actions/asyncFilterActions';

export const requestBodyStyles = () => {
	return {
		type: REQUEST_BODY_STYLES
	}
};

export const receiveBodyStyles = (categoryID, json) => {
	return {
		type: RECEIVE_BODY_STYLES,
		items: json,
		receivedAt: Date.now(),
		categoryID
	}
};

export const fetchBodyStyles = (categoryID) => {
	return (dispatch) => {
		dispatch(requestBodyStyles());

		return fetch(`http://api.auto.ria.com/categories/${categoryID}/bodystyles`)
			.then(response => response.json())
			.then(json => {
				dispatch(receiveBodyStyles(categoryID, json));
			})
	}
};

export const shouldFetchBodyStyles = (state, categoryID) => {
	const bodyStyles = state.data.bodyStyles[categoryID];

	if (!bodyStyles || !bodyStyles.items.length) {
		return true
	} else if (bodyStyles.isFetching) {
		return false;
	}
};

export const fetchBodyStylesIfNeeded = (categoryID) => {
	return (dispatch, getState) => {
		if (shouldFetchBodyStyles(getState(), categoryID)) {
			return dispatch(fetchBodyStyles(categoryID));
		} else {
			Promise.resolve();
		}
	}
};