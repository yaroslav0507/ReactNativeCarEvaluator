import { TransportPreviewer } from './TransportPreviewer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    appliedVehicleFilters: state.appliedVehicleFilters
  }
};

const TransportPreviewerContainer = connect(mapStateToProps)(TransportPreviewer);

export { TransportPreviewerContainer };