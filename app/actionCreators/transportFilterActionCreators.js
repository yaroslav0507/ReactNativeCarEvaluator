import {
	SELECT_CATEGORY,
	CLEAR_CATEGORY,
	SELECT_BODY_STYLE,
	CLEAR_BODY_STYLE
} from '../actions/transportFilterActions';

export const selectCategory = (category) => {
	return {
    type: SELECT_CATEGORY,
		category
  }
};

export const clearCategory = () => {
	return {
    type: CLEAR_CATEGORY
  }
};

export const selectBodyStyle = (bodyStyle) => {
	return {
    type: SELECT_BODY_STYLE,
		bodyStyle
  }
};

export const clearBodyStyle = () => {
	return {
		type: CLEAR_BODY_STYLE
	}
};