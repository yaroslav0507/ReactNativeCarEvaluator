import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';
import { selectTransportType, selectBodyStyle } from '../../actionCreators/transportFilterActionCreators';
import { fetchTransportTypes } from '../../actionCreators/asyncFilterActionCreators';

const mapStateToProps = (state) => {
  return {
		transportTypes: state.transportTypes,
		transportFilters: state.transportFilters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  	onViewLoaded: () => {
  		dispatch(fetchTransportTypes())
		},
		onTransportTypeSelected: (transportType) => {
			dispatch(selectTransportType(transportType))
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
