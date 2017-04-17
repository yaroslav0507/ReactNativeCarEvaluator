export const initialDataState = {
	isFetching: false,
	items: []
};

export const updateObject = (sourceObject, newValues) => {
	return Object.assign({}, sourceObject, newValues);
};

export const createReducer = (initialState, handlers) => {
	return function reducer(state = initialState, action) {
		if(handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	}
};
