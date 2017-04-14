import { REQUEST_AVERAGE_PRICE, RECEIVE_AVERAGE_PRICE } from '../actions/asyncPricesActions';

export const requestAveragePrice = () => {
	return {
		type: REQUEST_AVERAGE_PRICE
	}
};

export const receiveAveragePrice = (averagePrice) => {
	return {
		type: RECEIVE_AVERAGE_PRICE,
		averagePrice,
		receivedAt: Date.now()
	}
};

export const fetchAveragePrice = (query) => {
	const baseURL = 'http://api.auto.ria.com/average';
	const { categoryID, bodyStyleID } = query;

	return (dispatch) => {
		dispatch(requestAveragePrice());

		return fetch(`${baseURL}?main_category=${categoryID}&body_id=${bodyStyleID}`)
			.then(response => response.json())
			.then(responseData => {

				const { interQuartileMean } = responseData;

				dispatch(receiveAveragePrice(interQuartileMean));
			})
			.catch(({message}) => {
				return message;
			});
	}
};