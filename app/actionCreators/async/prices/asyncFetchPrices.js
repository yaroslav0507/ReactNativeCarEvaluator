import { REQUEST_AVERAGE_PRICE, RECEIVE_AVERAGE_PRICE } from '../../../actions/asyncPricesActions';
import { priceUtils } from './price.utils';

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

export const fetchAveragePrice = () => {

	return (dispatch, getState) => {
		dispatch(requestAveragePrice());

		const { filters } = getState();
		const {
			descriptionApiRequest,
			averagePriceApiRequest,
			priceChangesPlotApiRequest
		} = priceUtils(filters);

		const descriptionPromise = new Promise((resolve, reject) => {
			return fetch(descriptionApiRequest)
				.then(response => response.json())
				.then(responseData => {
					const { text } = responseData;
					resolve(text);
				});
		});

		const plotDataPromise = new Promise((resolve, reject) => {
			return fetch(priceChangesPlotApiRequest)
				.then(response => response.json())
				.then(responseData => {
					resolve(responseData);
				});
		});


		const exchangeRatesPromise = new Promise((resolve, reject) => {
			return fetch('https://auto.ria.com/demo/bu/finalPage/exchangeRates/')
				.then(response => response.json())
				.then(responseData => {
					resolve(responseData);
				});
		});


		const averagePricePromise = new Promise((resolve, reject) => {
			return fetch(averagePriceApiRequest)
				.then(response => response.json())
				.then(responseData => {
					const { interQuartileMean, arithmeticMean } = responseData;
					resolve(interQuartileMean || arithmeticMean);
				})
				.catch(({message}) => {
					reject(message);
				});
		});


		return Promise.all([
			averagePricePromise,
			descriptionPromise,
			plotDataPromise,
			exchangeRatesPromise
		]).then(data => {
			const averagePrice = {
				value: data[0],
				description: data[1],
				plotData: data[2],
				exchangeRates: {
					usd: data[3][0],
					eur: data[3][1],
				}
			};

			dispatch(receiveAveragePrice(averagePrice));
		})
	}
};