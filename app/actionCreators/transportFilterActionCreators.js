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
	CLEAR_FUEL,
} from '../actions/transportFilterActions';

export const selectCategory = (data) => {
	return { type: SELECT_CATEGORY, data
  }
};

export const clearCategory = () => {
	return { type: CLEAR_CATEGORY }
};

export const selectBodyStyle = (data) => {
	return { type: SELECT_BODY_STYLE, data
  }
};

export const clearBodyStyle = () => {
	return { type: CLEAR_BODY_STYLE }
};

export const selectMark = (data) => {
	return { type: SELECT_MARK, data
  }
};

export const clearMark = () => {
	return { type: CLEAR_MARK }
};

export const selectModel = (data) => {
	return { type: SELECT_MODEL, data
  }
};

export const clearModel = () => {
	return { type: CLEAR_MODEL }
};

export const selectState = (data) => {
	return { type: SELECT_STATE, data }
};

export const clearState = () => {
	return { type: CLEAR_STATE }
};

export const selectGearbox = (data) => {
	return { type: SELECT_GEARBOX, data }
};

export const clearGearbox = () => {
	return { type: CLEAR_GEARBOX }
};

export const selectFuel = (data) => {
	return { type: SELECT_FUEL, data }
};

export const clearFuel = () => {
	return { type: CLEAR_FUEL }
};

export const selectYearRange = (data) => {
	return { type: SELECT_YEAR_RANGE, data }
};

export const selectMileageRange = (data) => {
	return { type: SELECT_MILEAGE_RANGE, data }
};