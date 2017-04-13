import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';
import { selectCategory, selectBodyStyle } from '../../actionCreators/transportFilterActionCreators';
import { fetchCategories } from '../../actionCreators/asyncFetchCategories';
import { fetchBodyStyles } from '../../actionCreators/asyncFetchBodyStyles';

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
  		dispatch(fetchCategories())
		},
		onCategorySelected: (category) => {
			dispatch(selectCategory(category));
			dispatch(fetchBodyStyles(category.value));
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
