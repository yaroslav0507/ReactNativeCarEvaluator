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

export const fetchAveragePrice = () => {
	const priceEngineURL = 'http://api.auto.ria.com/average?damage=0&under_credit=0&confiscated_car=0&onRepairParts=0&custom=0';
	const descriptionEngineURL = `https://auto.ria.com/demo/bu/catalogs/averagePriceCalculator/text`;

	return (dispatch, getState) => {
		dispatch(requestAveragePrice());

		const { filters } = getState();
		const defaultYearFrom = filters.year.to && 1900;
		const defaultYearTo = filters.year.from && new Date().getFullYear();
		const defaultMileageFrom = filters.mileage.to && 1;
		const defaultMileageTo = filters.mileage.from && 1000;

		const categoryID = filters.category.value,
			bodyStyleID = filters.bodyStyle.value,
			markID = filters.mark.value,
			modelID = filters.model.value,
			yearFrom = filters.year.from || defaultYearFrom,
			yearTo = filters.year.to || defaultYearTo,
			mileageFrom = filters.mileage.from || defaultMileageFrom,
			mileageTo = filters.mileage.to || defaultMileageTo,
			stateID = filters.state.value;

		const getQueryString = (query, param) => {
			return param ? `&${query}=${param}` : '';
		};

		const descriptionApiRequest = descriptionEngineURL + '?&langId=2' +
			getQueryString('category_id', categoryID || 0) +
			getQueryString('bodystyle[0]', bodyStyleID || 0) +
			getQueryString('marka_id[0]', markID || 0) +
			getQueryString('model_id[0]', modelID || 0) +
			getQueryString('state[0]',  stateID || 0) +
			getQueryString('gearbox[0]', 0) +
			getQueryString('s_yers[0]', yearFrom) +
			getQueryString('po_yers[0]', yearTo) +
			getQueryString('raceFrom', mileageFrom) +
			getQueryString('raceTo', mileageTo);

		const descriptionPromise = new Promise((resolve, reject) => {
			return fetch(descriptionApiRequest)
				.then(response => response.json())
				.then(responseData => {
					const { text } = responseData;
					resolve(text);
				});
		});

		const category = categoryID ? `&main_category=${categoryID}` : '';
		const bodyStyle = bodyStyleID ? `&body_id=${bodyStyleID}` : '';
		const mark = markID ? `&marka_id=${markID}` : '';
		const model = modelID ? `&model_id=${modelID}` : '';
		const state = stateID ? `&state_id=${stateID}` : '';
		const yearStart = yearFrom ? `&yers=${yearFrom}`: defaultYearFrom ? `&yers=${defaultYearFrom}` : '';
		const yearEnd = yearTo ? `&yers=${yearTo}`: defaultYearTo ? `&yers=${defaultYearTo}` : '';
		const mileageStart = mileageFrom ? `&raceInt=${mileageFrom}`: defaultMileageFrom ? `&raceInt=${defaultMileageFrom}` : '';
		const mileageEnd = mileageTo ? `&raceInt=${mileageTo}`: defaultMileageTo ? `&raceInt=${defaultMileageTo}` : '';

		const averagePricePromise = new Promise((resolve, reject) => {
			const averagePriceRequest = [category, bodyStyle, mark, model, yearStart, yearEnd, mileageStart, mileageEnd, state].join('');
			return fetch(`${priceEngineURL}${averagePriceRequest}`)
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