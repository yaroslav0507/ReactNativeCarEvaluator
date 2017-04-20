import {
	SELECT_CATEGORY,
	CLEAR_CATEGORY,
	SELECT_BODY_STYLE,
	CLEAR_BODY_STYLE,
	SELECT_MARK,
	CLEAR_MARK,
	SELECT_MODEL,
	CLEAR_MODEL,
	SELECT_YEAR_RANGE,
	SELECT_MILEAGE_RANGE,
	SELECT_STATE,
	CLEAR_STATE,
	SELECT_GEARBOX,
	CLEAR_GEARBOX,
	SELECT_FUEL,
	CLEAR_FUEL
} from '../actions/transportFilterActions';

import { updateObject, createReducer } from './reducerUtilites';

const defaultFilter = {
	name: '',
	value: 0
};

const defaultRange = {
	from: null,
	to: null
};

const initialFilters = {
	category: defaultFilter,
	bodyStyle: defaultFilter,
	mark: defaultFilter,
	model: defaultFilter,
	year: defaultRange,
	mileage: defaultRange,
	state: defaultFilter,
	gearbox: defaultFilter,
	fuel: defaultFilter
};

const selectFilter = (state, action) => {
	return updateObject(state, {
		name: action.data.name,
		value: action.data.value
	})
};

const filter = createReducer(defaultFilter, {
	[SELECT_CATEGORY]: selectFilter,
	[SELECT_BODY_STYLE]: selectFilter,
	[SELECT_MARK]: selectFilter,
	[SELECT_MODEL]: selectFilter,
	[SELECT_STATE]: selectFilter,
	[SELECT_GEARBOX]: selectFilter,
	[SELECT_FUEL]: selectFilter,
});

const selectCategory = (state, action) => {
	const sameOptionSelected = state.data && state.data.value === action.data.value;

	return updateObject(state, {
		category: filter(undefined, action),
		bodyStyle: sameOptionSelected ? state.bodyStyle : defaultFilter,
		mark: sameOptionSelected ? state.mark : defaultFilter
	})
};

const clearCategory = (state) => {
	return updateObject(state, {
		category: defaultFilter,
		bodyStyle: defaultFilter
	});
};

const selectBodyStyle = (state, action) => {
	return updateObject(state, { bodyStyle: filter(undefined, action) })
};

const clearBodyStyle = (state) => {
	return updateObject(state, { bodyStyle: defaultFilter })
};

const selectMark = (state, action) => {
	return updateObject(state, { mark: filter(undefined, action) })
};

const clearMark = (state) => {
	return updateObject(state, { mark: defaultFilter })
};

const selectModel = (state, action) => {
	return updateObject(state, { model: filter(undefined, action) })
};

const clearModel = (state) => {
	return updateObject(state, { model: defaultFilter })
};

const selectState = (state, action) => {
	return updateObject(state, { state: filter(undefined, action) })
};

const clearState = (state) => {
	return updateObject(state, { state: defaultFilter })
};

const selectGearbox = (state, action) => {
	return updateObject(state, { gearbox: filter(undefined, action) })
};

const clearGearbox = (state) => {
	return updateObject(state, { gearbox: defaultFilter })
};

const selectFuel = (state, action) => {
	return updateObject(state, { fuel: filter(undefined, action) })
};

const clearFuel = (state) => {
	return updateObject(state, { fuel: defaultFilter })
};

const selectYearRange = (state, action) => {
	const { yearFrom, yearTo } = action.data;
	return updateObject(state, {
		year: {
			from: yearFrom,
			to: yearTo
		}
	})
};

const selectMileageRange = (state, action) => {
	const { mileageFrom, mileageTo } = action.data;
	return updateObject(state, {
		mileage: {
			from: mileageFrom,
			to: mileageTo
		}
	})
};

const filters = createReducer(initialFilters, {
	[SELECT_CATEGORY]: selectCategory,
	[CLEAR_CATEGORY]: clearCategory,
	[SELECT_BODY_STYLE]: selectBodyStyle,
	[CLEAR_BODY_STYLE]: clearBodyStyle,
	[SELECT_MARK]: selectMark,
	[CLEAR_MARK]: clearMark,
	[SELECT_MODEL]: selectModel,
	[CLEAR_MODEL]: clearModel,
	[SELECT_YEAR_RANGE]: selectYearRange,
	[SELECT_MILEAGE_RANGE]: selectMileageRange,
	[SELECT_STATE]: selectState,
	[CLEAR_STATE]: clearState,
	[SELECT_GEARBOX]: selectGearbox,
	[CLEAR_GEARBOX]: clearGearbox,
	[SELECT_FUEL]: selectFuel,
	[CLEAR_FUEL]: clearFuel
});

export {
	filters
}