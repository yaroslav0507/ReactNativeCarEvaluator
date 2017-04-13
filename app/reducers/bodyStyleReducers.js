import {
	REQUEST_BODY_STYLES,
	RECEIVE_BODY_STYLES
} from '../actions/asyncFilterActions'

const bodyStyle = (state = {
	isFetching: false,
	items: []
}, action) => {
	switch (action.type) {
		case REQUEST_BODY_STYLES:
			return Object.assign({}, state, {
				[action.categoryID]: { isFetching: true }
			});
		case RECEIVE_BODY_STYLES:
			return Object.assign({}, {
				isFetching: false,
				items: action.items,
				lastUpdated: action.receivedAt
			});
	}
};

const bodyStyles = (state = {}, action) => {
	switch (action.type) {
		case REQUEST_BODY_STYLES:
		case RECEIVE_BODY_STYLES:
			return Object.assign({}, state, {
				[action.categoryID]: bodyStyle(undefined, action)
			});
		default:
			return state;
	}
};

export {
	bodyStyles
}