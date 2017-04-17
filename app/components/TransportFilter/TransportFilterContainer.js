import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';

import { fetchAveragePrice } from '../../actionCreators/asyncFetchPrices';

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
			dispatch(fetchAveragePrice(query))
		}
  }
};

const TransportFilterContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(TransportFilter);

export { TransportFilterContainer };
