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
	const priceEngineURL = 'http://api.auto.ria.com/average';
	const descriptionEngineURL = `https://auto.ria.com/demo/bu/catalogs/averagePriceCalculator/text`;
	const { categoryID, bodyStyleID, markID, modelID, stateID, gearBoxID, yearFrom, yearTo } = query;

	return (dispatch) => {
		dispatch(requestAveragePrice());

		const getQueryString = (query, param) => {
			return param ? `&${query}=${param}` : '';
		};

		const descriptionApiRequest = descriptionEngineURL + '?' +
			getQueryString('category_id[0]', categoryID) +
			getQueryString('bodystyle[0]', bodyStyleID) +
			getQueryString('marka_id[0]', markID) +
			getQueryString('model_id[0]', modelID) +
			getQueryString('state[0]', stateID) +
			getQueryString('gearbox[0]', gearBoxID) +
			getQueryString('s_yers[0]', yearFrom) +
			getQueryString('po_yers[0]', yearTo) +
			'&langId=2';


		const descriptionPromise = new Promise((resolve, reject) => {
			return fetch(descriptionApiRequest)
				.then(response => response.json())
				.then(responseData => {
					const { text } = responseData;
					resolve(text);
				});
		});

		const category = categoryID ? `main_category=${categoryID}` : '';
		const bodyStyle = bodyStyleID ? `&body_id=${bodyStyleID}` : '';
		const mark = markID ? `&marka_id=${markID}` : '';


		const averagePricePromise = new Promise((resolve, reject) => {
			return fetch(`${priceEngineURL}?${category}${bodyStyle}${mark}`)
				.then(response => response.json())
				.then(responseData => {
					const { interQuartileMean } = responseData;
					resolve(interQuartileMean);
				})
				.catch(({message}) => {
					reject(message);
				});
		});


		return Promise.all([
			averagePricePromise,
			descriptionPromise
		]).then(data => {
			const averagePrice = {
				value: data[0],
				description: data[1]
			};

			dispatch(receiveAveragePrice(averagePrice));
		})
	}
};