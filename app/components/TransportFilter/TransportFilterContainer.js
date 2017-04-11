import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';
import { addTransportType, addBoyStyle } from '../../actionCreators/transportFilterActionCreators';

const mapStateToProps = (state) => {
  return {
		transportFilters: state.transportFilters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
		onTransportTypeSelected: ({ name, value }) => {
			dispatch(addTransportType(name, value))
    },
		onBodyStyleSelected: ({ name, value }) => {
		  dispatch(addBoyStyle(name, value))
    }
  }
};

const TransportFilterContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(TransportFilter);

export { TransportFilterContainer };
