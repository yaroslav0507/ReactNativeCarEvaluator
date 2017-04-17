import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';
import {
	selectCategory,
	clearCategory,
	selectBodyStyle,
	clearBodyStyle,
	selectMark,
	clearMark,
	selectModel,
	clearModel
} from '../../actionCreators/transportFilterActionCreators';
import { fetchCategoriesIfNeeded } from '../../actionCreators/asyncFetchCategories';
import { fetchBodyStylesIfNeeded } from '../../actionCreators/asyncFetchBodyStyles';
import { fetchMarksIfNeeded } from '../../actionCreators/asyncFetchMarks';
import { fetchModelsIfNeeded } from '../../actionCreators/asyncFetchModels';
import { fetchAveragePrice } from '../../actionCreators/asyncFetchPrices';

const mapStateToProps = (state) => {
  return {
		categories: state.data.categories,
		bodyStyles: state.data.bodyStyles,
		marks: state.data.marks,
		models: state.data.models,
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
			dispatch(fetchBodyStylesIfNeeded());
			dispatch(fetchMarksIfNeeded());
    },
		onCategoryCleared: () => {
			dispatch(clearCategory());
			dispatch(clearBodyStyle());
			dispatch(clearModel());
			dispatch(clearMark());
		},
		onBodyStyleSelected: (bodyStyle) => {
		  dispatch(selectBodyStyle(bodyStyle))
    },
		onBodyStyleCleared: () => {
		  dispatch(clearBodyStyle())
    },
		onMarkSelected: (mark) => {
			dispatch(selectMark(mark));
			dispatch(clearModel());
			dispatch(fetchModelsIfNeeded());
		},
		onMarkCleared: () => {
			dispatch(clearMark());
			dispatch(clearModel());
		},
		onModelSelected: (model) => {
			dispatch(selectModel(model));
		},
		onModelCleared: () => {
			dispatch(clearModel())
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
