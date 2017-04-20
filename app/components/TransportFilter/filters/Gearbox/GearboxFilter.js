import { connect } from 'react-redux';
import { Gearbox } from './Gearbox';
import {
	selectGearbox,
	clearGearbox
} from '../../../../actionCreators/transportFilterActionCreators';

const mapStateToProps = (state) => {
	return {
		selectedGearbox: state.filters.gearbox,
		gearboxes: state.data.gearboxes
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGearboxSelected: (state) => {
			dispatch(selectGearbox(state));
		},
		onGearboxCleared: () => {
			dispatch(clearGearbox());
		}
	}
};

const GearboxFilter = connect(mapStateToProps, mapDispatchToProps)(Gearbox);

export {
	GearboxFilter
}