import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';

import {
	fetchCategoriesIfNeeded,
	fetchStatesIfNeeded,
	fetchGearboxesIfNeeded,
	fetchFuelsIfNeeded
} from '../../actionCreators/preloadActions';

import { selectYearRange, selectMileageRange } from '../../actionCreators/transportFilterActionCreators';

const mapStateToProps = (state) => {
  return {
		filters: state.filters
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onInit: () => {
			dispatch(fetchCategoriesIfNeeded());
			dispatch(fetchStatesIfNeeded());
			dispatch(fetchGearboxesIfNeeded());
			dispatch(fetchFuelsIfNeeded());
		},
		onGetAveragePrice: (query) => {
			const { yearFrom, yearTo, mileageFrom, mileageTo } = query;
			dispatch(selectYearRange({ yearFrom, yearTo }));
			dispatch(selectMileageRange({ mileageFrom, mileageTo }));
		},
		navigate: (route) => {
  		ownProps.navigation.navigate(route)
		}
  }
};

const TransportFilterContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(TransportFilter);

export { TransportFilterContainer };
