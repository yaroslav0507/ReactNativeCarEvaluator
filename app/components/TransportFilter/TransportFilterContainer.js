import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';
import {
	selectCategory,
	clearCategory,
	selectBodyStyle,
	clearBodyStyle,
	selectMark,
	clearMark
} from '../../actionCreators/transportFilterActionCreators';
import { fetchCategoriesIfNeeded } from '../../actionCreators/asyncFetchCategories';
import { fetchBodyStylesIfNeeded } from '../../actionCreators/asyncFetchBodyStyles';
import { fetchMarksIfNeeded } from '../../actionCreators/asyncFetchMarks';
import { fetchAveragePrice } from '../../actionCreators/asyncFetchPrices';

const mapStateToProps = (state) => {
  return {
		categories: state.data.categories,
		bodyStyles: state.data.bodyStyles,
		marks: state.data.marks,
		filters: state.filters,
		price: state.price
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  	onViewLoaded: () => {
  		dispatch(fetchCategoriesIfNeeded())
		},
		onCategorySelected: (category) => {
			dispatch(selectCategory(category));
			dispatch(fetchBodyStylesIfNeeded(category.value));
			dispatch(fetchMarksIfNeeded(category.value));
    },
		onCategoryCleared: () => {
			dispatch(clearCategory())
		},
		onBodyStyleSelected: (bodyStyle) => {
		  dispatch(selectBodyStyle(bodyStyle))
    },
		onBodyStyleCleared: () => {
		  dispatch(clearBodyStyle())
    },
		onMarkSelected: (mark) => {
			dispatch(selectMark(mark))
		},
		onMarkCleared: () => {
			dispatch(clearMark())
		},
		onGetAveragePrice: (query) => {
			dispatch(fetchAveragePrice(query))
		}
  }
};

const TransportFilterContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(TransportFilter);

export { TransportFilterContainer };
