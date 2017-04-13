import {
	REQUEST_BODY_STYLES,
	RECEIVE_BODY_STYLES
} from '../actions/asyncFilterActions'

const bodyStyles = (state = {
	isFetching: false,
	items: []
}, action) => {
	switch (action.type) {
		case REQUEST_BODY_STYLES:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_BODY_STYLES:
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
	bodyStyles
}