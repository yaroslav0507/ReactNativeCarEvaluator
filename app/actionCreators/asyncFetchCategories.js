import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES} from '../actions/asyncFilterActions';

export const requestCategories = () => {
	return {
		type: REQUEST_CATEGORIES
	}
};

export const receiveCategories = (items) => {
	return {
		type: RECEIVE_CATEGORIES,
		items,
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

export const shouldFetchCategories = (state) => {
	const categories = state.data.categories;

	if (!categories.items.length) {
		return true
	} else if (categories.isFetching) {
		return false;
	}
};

export const fetchCategoriesIfNeeded = () => {
	return (dispatch, getState) => {
		if (shouldFetchCategories(getState())) {
			return dispatch(fetchCategories());
		} else {
			Promise.resolve();
		}
	}
};