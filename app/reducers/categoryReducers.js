import {
	REQUEST_TRANSPORT_TYPES,
	RECEIVE_TRANSPORT_TYPES
} from '../actions/asyncFilterActions'

const categories = (state = {
	isFetching: false,
	items: []
}, action) => {
	switch (action.type) {
		case REQUEST_TRANSPORT_TYPES:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_TRANSPORT_TYPES:
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