import {
	REQUEST_CATEGORIES,
	RECEIVE_CATEGORIES
} from '../actions/asyncFilterActions'

const categories = (state = {
	isFetching: false,
	items: []
}, action) => {
	switch (action.type) {
		case REQUEST_CATEGORIES:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_CATEGORIES:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.items,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
};

export {
	categories
}