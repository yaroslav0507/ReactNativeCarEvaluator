export function asyncFetchPlainData(requestEventName, receiveEventName, endpoint, dataKey) {

	const requestData = () => {
		return {
			type: requestEventName
		}
	};

	const receiveData = (items) => {
		return {
			type: receiveEventName,
			items,
			receivedAt: Date.now()
		}
	};

	const fetchData = () => {
		return (dispatch) => {
			dispatch(requestData());

			return fetch(`http://api.auto.ria.com/${endpoint}`)
				.then(response => response.json())
				.then(json => {
					dispatch(receiveData(json));
				})
		}
	};

	const shouldFetchData = (state) => {
		const data = state.data[dataKey || endpoint];

		if (!data || !data.items || !data.items.length) {
			return true
		} else if (data.isFetching) {
			return false;
		}
	};

	const fetchDataIfNeeded = () => {
		return (dispatch, getState) => {
			if (shouldFetchData(getState())) {
				return dispatch(fetchData());
			} else {
				Promise.resolve();
			}
		}
	};

	return fetchDataIfNeeded();
}