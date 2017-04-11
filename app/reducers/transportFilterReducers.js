const transportFilter = (state = {}, action) => {
	switch (action.type) {
    case 'ADD_TRANSPORT_TYPE':
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
    case 'ADD_TRANSPORT_TYPE':
      return Object.assign({}, state, {
        transportType: transportFilter(undefined, action)
      });
    default:
      return state;
  }
};

export {
	transportFilter,
	transportFilters
}