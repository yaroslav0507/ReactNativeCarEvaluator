import { connect } from 'react-redux';
import { Category } from './Category';

import {
	selectCategory,
	clearCategory,
	clearBodyStyle,
	clearMark,
	clearModel
} from '../../../../actionCreators/transportFilterActionCreators';

import { fetchBodyStylesIfNeeded } from '../../../../actionCreators/async/asyncFetchBodyStyles';
import { fetchMarksIfNeeded } from '../../../../actionCreators/async/asyncFetchMarks';

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.filters.category,
		categories: state.data.categories
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCategorySelected: (category) => {
			dispatch(selectCategory(category));
			dispatch(fetchBodyStylesIfNeeded());
			dispatch(fetchMarksIfNeeded());
		},
		onCategoryCleared: () => {
			dispatch(clearCategory());
			dispatch(clearBodyStyle());
			dispatch(clearModel());
			dispatch(clearMark());
		}
	}
};

const CategoryFilter = connect(mapStateToProps, mapDispatchToProps)(Category);

export {
	CategoryFilter
}