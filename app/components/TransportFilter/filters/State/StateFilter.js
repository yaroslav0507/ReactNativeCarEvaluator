import { connect } from 'react-redux';
import { State } from './State';
import {
	selectState,
	clearState
} from '../../../../actionCreators/transportFilterActionCreators';

const mapStateToProps = (state) => {
	return {
		selectedState: state.filters.state,
		states: state.data.states
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onStateSelected: (state) => {
			dispatch(selectState(state));
		},
		onStateCleared: () => {
			dispatch(clearState());
		}
	}
};

const StateFilter = connect(mapStateToProps, mapDispatchToProps)(State);

export {
	StateFilter
}