import {
	SELECT_CATEGORY,
	CLEAR_CATEGORY,
	SELECT_BODY_STYLE,
	CLEAR_BODY_STYLE,
	SELECT_MARK,
	CLEAR_MARK
} from '../actions/transportFilterActions';

const defaultFilter = {
	name: '',
	value: 0
};

const initialFilters = {
	category: defaultFilter,
	bodyStyle: defaultFilter
};

const filter = (state = defaultFilter, action) => {
	switch (action.type) {
		case SELECT_CATEGORY:
		case SELECT_BODY_STYLE:
		case SELECT_MARK:
			return Object.assign({}, state, {
				name: action.data.name,
				value: action.data.value
			});
		default:
			return state;
	}
};

const filters = (state = initialFilters, action) => {
  switch (action.type) {
		case SELECT_CATEGORY:
			const sameOptionSelected = state.data && state.data.value === action.data.value;
			return Object.assign({}, state, {
				category: filter(undefined, action),
				bodyStyle: sameOptionSelected ? state.bodyStyle : defaultFilter,
				mark: sameOptionSelected ? state.mark : defaultFilter
			});
		case CLEAR_CATEGORY:
			return Object.assign({}, state, {
				category: defaultFilter,
				bodyStyle: defaultFilter
			});

		case SELECT_BODY_STYLE:
      return Object.assign({}, state, {
        bodyStyle: filter(undefined, action)
      });
		case CLEAR_BODY_STYLE:
			return Object.assign({}, state, {
				bodyStyle: defaultFilter
			});

		case SELECT_MARK:
      return Object.assign({}, state, {
        mark: filter(undefined, action)
      });
		case CLEAR_MARK:
			return Object.assign({}, state, {
				mark: defaultFilter
			});

    default:
      return state;

  }
};

export {
	filter,
	filters
}