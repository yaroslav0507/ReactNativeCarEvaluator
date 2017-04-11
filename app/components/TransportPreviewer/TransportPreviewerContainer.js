import { TransportPreviewer } from './TransportPreviewer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedVehicleModel: state.selectedVehicleModel
  }
};

const TransportPreviewerContainer = connect(mapStateToProps)(TransportPreviewer);

export { TransportPreviewerContainer };