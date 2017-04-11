export const addTransportType = (name, value) => {
	console.log('Dispatching an ADD_TRANSPORT_TYPE action with: ', name, value);
	return {
    type: 'ADD_TRANSPORT_TYPE',
    name,
		value
  }
};