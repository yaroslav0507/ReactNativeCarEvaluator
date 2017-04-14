import { REQUEST_AVERAGE_PRICE, RECEIVE_AVERAGE_PRICE } from '../actions/asyncPricesActions';

const price = (state = {
	isFetching: false,
	average: null
}, action) => {
	switch (action.type) {
		case REQUEST_AVERAGE_PRICE:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_AVERAGE_PRICE:
			return Object.assign({}, state, {
				isFetching: false,
				average: action.averagePrice,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
};

export {
	price
}