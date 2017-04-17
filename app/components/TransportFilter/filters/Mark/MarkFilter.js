import { connect } from 'react-redux';
import { Mark } from './Mark';
import {
	selectMark,
	clearMark,
	clearModel
} from '../../../../actionCreators/transportFilterActionCreators';

import { fetchModelsIfNeeded } from '../../../../actionCreators/asyncFetchModels';

const mapStateToProps = (state) => {
	return {
		selectedMark: state.filters.mark,
		selectedCategory: state.filters.category,
		marks: state.data.marks
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onMarkSelected: (mark) => {
			dispatch(selectMark(mark));
			dispatch(clearModel());
			dispatch(fetchModelsIfNeeded());
		},
		onMarkCleared: () => {
			dispatch(clearMark());
			dispatch(clearModel());
		},
	}
};


const MarkFilter = connect(mapStateToProps, mapDispatchToProps)(Mark);

export {
	MarkFilter
}