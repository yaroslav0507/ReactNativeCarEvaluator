import { REQUEST_TRANSPORT_TYPES, RECEIVE_TRANSPORT_TYPES} from '../actions/asyncFilterActions';

export const requestTransportTypes = () => {
	return {
		type: REQUEST_TRANSPORT_TYPES
	}
};

export const receiveTransportTypes = (json) => {
	return {
		type: RECEIVE_TRANSPORT_TYPES,
		items: json,
		receivedAt: Date.now()
	}
};

export const fetchTransportTypes = () => {
	return (dispatch) => {
		dispatch(requestTransportTypes());

		return fetch(`http://api.auto.ria.com/categories`)
			.then(response => response.json())
			.then(json => {
				dispatch(receiveTransportTypes(json));
			})
	}
};