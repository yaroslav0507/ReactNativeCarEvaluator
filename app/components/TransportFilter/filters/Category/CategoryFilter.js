import { connect } from 'react-redux';
import { Category } from './Category';

import {
	selectCategory,
	clearCategory,
	clearBodyStyle,
	clearMark,
	clearModel
} from '../../../../actionCreators/transportFilterActionCreators';

import { fetchCategoriesIfNeeded } from '../../../../actionCreators/asyncFetchCategories';
import { fetchBodyStylesIfNeeded } from '../../../../actionCreators/asyncFetchBodyStyles';
import { fetchMarksIfNeeded } from '../../../../actionCreators/asyncFetchMarks';

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.filters.category,
		categories: state.data.categories
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onInit: () => {
			dispatch(fetchCategoriesIfNeeded())
		},
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