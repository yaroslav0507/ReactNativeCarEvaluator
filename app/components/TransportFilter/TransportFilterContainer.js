import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';

import { fetchAveragePrice } from '../../actionCreators/asyncFetchPrices';
import { selectYearRange, selectMileageRange } from '../../actionCreators/transportFilterActionCreators';

const mapStateToProps = (state) => {
  return {
		marks: state.data.marks,
		models: state.data.models,
		filters: state.filters,
		price: state.price
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
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
