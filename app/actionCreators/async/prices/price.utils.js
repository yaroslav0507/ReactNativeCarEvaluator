export function priceUtils(filters) {
	const priceApiURL = 'http://api.auto.ria.com/average?damage=0&under_credit=0&confiscated_car=0&onRepairParts=0&custom=0';
	const descriptionApiURL = 'https://auto.ria.com/demo/bu/catalogs/averagePriceCalculator/text';
	const plotApiUrl = 'https://auto.ria.com/demo/bu/catalogs/averagePricePlotData?';

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
		stateID = filters.state.value,
		gearboxID = filters.gearbox.value,
		fuelID = filters.fuel.value;

	const getQueryString = (query, param) => {
		return param ? `&${query}=${param}` : '';
	};

	const descriptionApiRequest = descriptionApiURL + '?&langId=2' +
		getQueryString('category_id', categoryID) +
		getQueryString('bodystyle[0]', bodyStyleID) +
		getQueryString('marka_id[0]', markID) +
		getQueryString('model_id[0]', modelID) +
		getQueryString('state[0]',  stateID) +
		getQueryString('gearbox[0]', gearboxID) +
		getQueryString('type[0]', fuelID) +
		getQueryString('s_yers[0]', yearFrom) +
		getQueryString('po_yers[0]', yearTo) +
		getQueryString('raceFrom', mileageFrom) +
		getQueryString('raceTo', mileageTo);


	const averagePriceApiRequest = priceApiURL +
		getQueryString('main_category', categoryID) +
		getQueryString('body_id', bodyStyleID) +
		getQueryString('marka_id', markID) +
		getQueryString('model_id', modelID) +
		getQueryString('state_id', stateID) +
		getQueryString('gear_id', gearboxID) +
		getQueryString('fuel_id', fuelID) +
		getQueryString('yers', yearFrom || defaultYearFrom) +
		getQueryString('yers', yearTo || defaultYearTo) +
		getQueryString('raceInt', mileageFrom || defaultMileageFrom) +
		getQueryString('raceInt', mileageTo || defaultMileageTo);

	const priceChangesPlotApiRequest = plotApiUrl +
		getQueryString('brand.id', markID) +
		getQueryString('model.id', modelID) +
		getQueryString('fuel.id', fuelID) +
		getQueryString('category.id', categoryID) +
		getQueryString('body.id', bodyStyleID) +
		getQueryString('region.id', stateID) +
		getQueryString('gearbox.id', gearboxID) +
		getQueryString('year.gte', yearFrom) +
		getQueryString('year.lte', yearTo) +
		getQueryString('mileage.gte', mileageFrom) +
		getQueryString('mileage.lte', mileageTo);


	return {
		descriptionApiRequest,
		averagePriceApiRequest,
		priceChangesPlotApiRequest
	}
}