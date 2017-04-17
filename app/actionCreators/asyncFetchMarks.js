import { REQUEST_MARKS, RECEIVE_MARKS} from '../actions/asyncFilterActions';

export const requestMarks = (categoryID) => {
	return {
		type: REQUEST_MARKS,
		categoryID
	}
};

export const receiveMarks = (categoryID, items) => {
	return {
		type: RECEIVE_MARKS,
		items,
		categoryID,
		receivedAt: Date.now()
	}
};

export const fetchMarks = (categoryID) => {
	return (dispatch) => {
		dispatch(requestMarks(categoryID));

		return fetch(`http://api.auto.ria.com/categories/${categoryID}/marks`)
			.then(response => response.json())
			.then(json => {
				dispatch(receiveMarks(categoryID, json));
			})
	}
};

export const shouldFetchMarks = (state, categoryID) => {
	const marks = state.data.marks[categoryID];

	if (!marks || !marks.items.length) {
		return true
	} else if (marks.isFetching) {
		return false;
	}
};

export const fetchMarksIfNeeded = () => {
	return (dispatch, getState) => {
		const categoryID = getState().filters.category.value;

		if (shouldFetchMarks(getState(), categoryID)) {
			return dispatch(fetchMarks(categoryID));
		} else {
			Promise.resolve();
		}
	}
};