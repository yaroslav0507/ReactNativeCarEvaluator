import { connect } from 'react-redux';
import { Fuel } from './Fuel';
import {
	selectFuel,
	clearFuel
} from '../../../../actionCreators/transportFilterActionCreators';

const mapStateToProps = (state) => {
	return {
		selectedFuel: state.filters.fuel,
		fuels: state.data.fuels
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFuelSelected: (state) => {
			dispatch(selectFuel(state));
		},
		onFuelCleared: () => {
			dispatch(clearFuel());
		}
	}
};

const FuelFilter = connect(mapStateToProps, mapDispatchToProps)(Fuel);

export {
	FuelFilter
}