import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';
import { selectCategory, selectBodyStyle } from '../../actionCreators/transportFilterActionCreators';
import { fetchCategoriesIfNeeded } from '../../actionCreators/asyncFetchCategories';
import { fetchBodyStylesIfNeeded } from '../../actionCreators/asyncFetchBodyStyles';

const mapStateToProps = (state) => {
  return {
		categories: state.data.categories,
		bodyStyles: state.data.bodyStyles,
		filters: state.filters
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
    },
		onBodyStyleSelected: (bodyStyle) => {
		  dispatch(selectBodyStyle(bodyStyle))
    }
  }
};

const TransportFilterContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(TransportFilter);

export { TransportFilterContainer };
