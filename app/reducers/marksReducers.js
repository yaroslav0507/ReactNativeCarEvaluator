import {
	REQUEST_MARKS,
	RECEIVE_MARKS
} from '../actions/asyncFilterActions'

const mark = (state = {
	isFetching: false,
	items: []
}, action) => {
	switch (action.type) {
		case REQUEST_MARKS:
			return Object.assign({}, state, {
				[action.categoryID]: { isFetching: true }
			});
		case RECEIVE_MARKS:
			return Object.assign({}, {
				isFetching: false,
				items: action.items,
				lastUpdated: action.receivedAt
			});
	}
};

const marks = (state = {}, action) => {
	switch (action.type) {
		case REQUEST_MARKS:
		case RECEIVE_MARKS:
			return Object.assign({}, state, {
				[action.categoryID]: mark(undefined, action)
			});
		default:
			return state;
	}
};

export {
	marks
}