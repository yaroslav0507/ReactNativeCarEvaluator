import {
	SELECT_TRANSPORT_TYPE,
	SELECT_BODY_STYLE
} from '../actions/transportFilterActions';

import {
	REQUEST_TRANSPORT_TYPES,
	RECEIVE_TRANSPORT_TYPES
} from '../actions/asyncFilterActions'

const anyType = { name: 'Любой', value: 0};

const initialState = {
	transportType: anyType,
	bodyStyle: anyType
};

const transportType = (state = {
	name: null,
	value: 0
}, action) => {
	switch (action.type) {
		case SELECT_TRANSPORT_TYPE:
			return Object.assign({}, state, {
				name: action.transportType.name,
				value: action.transportType.value
			});
		default:
			return state;
	}
};

const transportTypes = (state = {
	isFetching: false,
	items: []
}, action) => {
	switch (action.type) {
		case REQUEST_TRANSPORT_TYPES:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_TRANSPORT_TYPES:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.items,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
};

const transportFilter = (state = {}, action) => {
	switch (action.type) {
		case SELECT_BODY_STYLE:
			return {
				name: action.bodyStyle.name,
				id: action.bodyStyle.value
			};
		default:
			return state;
	}
};

const transportFilters = (state = {}, action) => {
  switch (action.type) {
		case SELECT_TRANSPORT_TYPE:
			return Object.assign({}, state, {
				transportType: transportType(undefined, action)
			});
		case SELECT_BODY_STYLE:
      return Object.assign({}, state, {
        bodyStyle: transportFilter(undefined, action)
      });
    default:
      return state;
  }
};



export {
	transportTypes,
	transportFilter,
	transportFilters
}