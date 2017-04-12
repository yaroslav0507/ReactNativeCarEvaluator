import {
	SELECT_TRANSPORT_TYPE,
	SELECT_BODY_STYLE
} from '../actions/transportFilterActions';


const filter = (state = {
	name: null,
	value: 0
}, action) => {
	switch (action.type) {
		case SELECT_TRANSPORT_TYPE:
			return Object.assign({}, state, {
				name: action.category.name,
				value: action.category.value
			});
		case SELECT_BODY_STYLE:
			return {
				name: action.bodyStyle.name,
				id: action.bodyStyle.value
			};
		default:
			return state;
	}
};

const filters = (state = {}, action) => {
  switch (action.type) {
		case SELECT_TRANSPORT_TYPE:
			return Object.assign({}, state, {
				category: filter(undefined, action)
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