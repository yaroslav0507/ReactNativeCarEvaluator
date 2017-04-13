import {
	SELECT_CATEGORY,
	SELECT_BODY_STYLE
} from '../actions/transportFilterActions';

const defaultFilter = {
	name: null,
	value: 0
};

const initialFilters = {
	category: defaultFilter,
	bodyStyle: defaultFilter
};

const filter = (state = {
	name: '',
	value: 0
}, action) => {
	switch (action.type) {
		case SELECT_CATEGORY:
			return Object.assign({}, state, {
				name: action.category.name,
				value: action.category.value
			});
		case SELECT_BODY_STYLE:
			return {
				name: action.bodyStyle.name,
				value: action.bodyStyle.value
			};
		default:
			return state;
	}
};

const filters = (state = initialFilters, action) => {
  switch (action.type) {
		case SELECT_CATEGORY:
			return Object.assign({}, state, {
				category: filter(undefined, action),
				bodyStyle: state.category && state.category.value === action.category.value ? state.bodyStyle : defaultFilter
			});
		case SELECT_BODY_STYLE:
      return Object.assign({}, state, {
        bodyStyle: filter(undefined, action)
      });
    default:
      return state;
  }
};

export {
	filter,
	filters
}