import {
	ADD_TRANSPORT_TYPE,
	ADD_BODY_STYLE
} from '../actions/transportFIlterActions';

const transportFilter = (state = {}, action) => {
	switch (action.type) {
    case ADD_TRANSPORT_TYPE:
		case ADD_BODY_STYLE:
      return {
        name: action.name,
        id: action.value
      };
    default:
      return state;
  }
};

const transportFilters = (state = {}, action) => {
  switch (action.type) {
    case ADD_TRANSPORT_TYPE:
      return Object.assign({}, state, {
        transportType: transportFilter(undefined, action),
				bodyStyle: null
      });
		case ADD_BODY_STYLE:
      return Object.assign({}, state, {
        bodyStyle: transportFilter(undefined, action)
      });
    default:
      return state;
  }
};



export {
	transportFilter,
	transportFilters
}