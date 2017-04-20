import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';

import {
	fetchCategoriesIfNeeded,
	fetchStatesIfNeeded,
	fetchGearboxesIfNeeded,
	fetchFuelsIfNeeded
} from '../../actionCreators/preloadActions';

import { fetchAveragePrice } from '../../actionCreators/async/asyncFetchPrices';
import { selectYearRange, selectMileageRange } from '../../actionCreators/transportFilterActionCreators';

const mapStateToProps = (state) => {
  return {
		filters: state.filters,
		price: state.price,
  }
};

const mapDispatchToProps = (dispatch) => {
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
			dispatch(fetchAveragePrice())
		}
  }
};

const TransportFilterContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(TransportFilter);

export { TransportFilterContainer };
