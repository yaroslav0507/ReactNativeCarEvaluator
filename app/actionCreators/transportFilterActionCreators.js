import {
	SELECT_TRANSPORT_TYPE,
	SELECT_BODY_STYLE
} from '../actions/transportFilterActions';

export const selectTransportType = (transportType) => {
	return {
    type: SELECT_TRANSPORT_TYPE,
		transportType
  }
};

export const selectBodyStyle = (bodyStyle) => {
	return {
    type: SELECT_BODY_STYLE,
		bodyStyle
  }
};