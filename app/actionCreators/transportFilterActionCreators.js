import {
	SELECT_CATEGORY,
	SELECT_BODY_STYLE
} from '../actions/transportFilterActions';

export const selectCategory = (category) => {
	return {
    type: SELECT_CATEGORY,
		category
  }
};

export const selectBodyStyle = (bodyStyle) => {
	return {
    type: SELECT_BODY_STYLE,
		bodyStyle
  }
};