import {
	SELECT_TRANSPORT_TYPE,
	SELECT_BODY_STYLE
} from '../actions/transportFilterActions';

export const selectCategory = (category) => {
	return {
    type: SELECT_TRANSPORT_TYPE,
		category
  }
};

export const selectBodyStyle = (bodyStyle) => {
	return {
    type: SELECT_BODY_STYLE,
		bodyStyle
  }
};