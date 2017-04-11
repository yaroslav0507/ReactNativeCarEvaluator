import {
	ADD_TRANSPORT_TYPE,
	ADD_BODY_STYLE
} from '../actions/transportFIlterActions';

export const addTransportType = (name, value) => {
	return {
    type: ADD_TRANSPORT_TYPE,
    name,
		value
  }
};

export const addBoyStyle = (name, value) => {
	return {
    type: ADD_BODY_STYLE,
    name,
		value
  }
};