import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';
import { selectCategory, selectBodyStyle } from '../../actionCreators/transportFilterActionCreators';
import { fetchCategories } from '../../actionCreators/asyncFilterActionCreators';

const mapStateToProps = (state) => {
  return {
		categories: state.data.categories,
		filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  	onViewLoaded: () => {
  		dispatch(fetchCategories())
		},
		onCategorySelected: (category) => {
			dispatch(selectCategory(category))
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
