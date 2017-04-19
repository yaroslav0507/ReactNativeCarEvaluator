import { connect } from 'react-redux';
import { State } from './State';
import {
	selectState,
	clearState
} from '../../../../actionCreators/transportFilterActionCreators';

import { fetchStatesIfNeeded } from '../../../../actionCreators/asyncFetchStates';

const mapStateToProps = (state) => {
	return {
		selectedState: state.filters.state,
		states: state.data.states
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onInit: () => {
			dispatch(fetchStatesIfNeeded())
		},
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