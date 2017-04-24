import {
	REQUEST_AVERAGE_PRICE,
	RECEIVE_AVERAGE_PRICE
} from '../actions/asyncPricesActions';

import { updateObject, createReducer } from './reducerUtilites';

const initialPriceState = {
	isFetching: false,
	average: null
};

const requestAveragePrice = (state) => {
	return updateObject(state, { isFetching: true });
};

const receiveAveragePrice = (state, action) => {
	return updateObject(state, {
		isFetching: false,
		average: action.averagePrice.value,
		description: action.averagePrice.description,
		plotData: action.averagePrice.plotData,
		exchangeRates: action.averagePrice.exchangeRates,
		lastUpdated: action.receivedAt
	})
};

const price = createReducer(initialPriceState, {
	[REQUEST_AVERAGE_PRICE]: requestAveragePrice,
	[RECEIVE_AVERAGE_PRICE]: receiveAveragePrice
});

export {
	price
}