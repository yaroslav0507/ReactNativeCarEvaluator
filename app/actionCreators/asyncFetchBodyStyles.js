import { REQUEST_BODY_STYLES, RECEIVE_BODY_STYLES} from '../actions/asyncFilterActions';

export const requestBodyStyles = (categoryID) => {
	return {
		type: REQUEST_BODY_STYLES,
		categoryID
	}
};

export const receiveBodyStyles = (categoryID, items) => {
	return {
		type: RECEIVE_BODY_STYLES,
		items,
		categoryID,
		receivedAt: Date.now()
	}
};

export const fetchBodyStyles = (categoryID) => {
	return (dispatch) => {
		dispatch(requestBodyStyles(categoryID));

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

export const fetchBodyStylesIfNeeded = () => {
	return (dispatch, getState) => {
		const categoryID = getState().filters.category.value;

		if (shouldFetchBodyStyles(getState(), categoryID)) {
			return dispatch(fetchBodyStyles(categoryID));
		} else {
			Promise.resolve();
		}
	}
};