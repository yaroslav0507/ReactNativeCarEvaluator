import { REQUEST_MODELS, RECEIVE_MODELS} from '../../actions/asyncFilterActions';

export const requestModels = (categoryID, markID) => {
	return {
		type: REQUEST_MODELS,
		categoryID,
		markID
	}
};

export const receiveModels = (categoryID, markID, items) => {
	return {
		type: RECEIVE_MODELS,
		items,
		categoryID,
		markID,
		receivedAt: Date.now()
	}
};

export const fetchModels = (categoryID, markID) => {
	return (dispatch) => {
		dispatch(requestModels(categoryID, markID));

		return fetch(`http://api.auto.ria.com/categories/${categoryID}/marks/${markID}/models`)
			.then(response => response.json())
			.then(json => {
				dispatch(receiveModels(categoryID, markID, json));
			})
	}
};

export const shouldFetchModels = (state, categoryID, markID) => {
	const models = state.data.models[categoryID] && state.data.models[categoryID][markID];

	if (!models || !models.items.length) {
		return true
	} else if (models.isFetching) {
		return false;
	}
};

export const fetchModelsIfNeeded = () => {
	return (dispatch, getState) => {
		const categoryID = getState().filters.category.value;
		const markID = getState().filters.mark.value;

		if (shouldFetchModels(getState(), categoryID, markID)) {
			return dispatch(fetchModels(categoryID, markID));
		} else {
			Promise.resolve();
		}
	}
};