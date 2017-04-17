import { connect } from 'react-redux';
import { Model } from './Model';
import {
	selectModel,
	clearModel
} from '../../../../actionCreators/transportFilterActionCreators';

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.filters.category,
		selectedMark: state.filters.mark,
		selectedModel: state.filters.model,
		models: state.data.models
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onModelSelected: (model) => {
			dispatch(selectModel(model));
		},
		onModelCleared: () => {
			dispatch(clearModel());
		}
	}
};


const ModelFilter = connect(mapStateToProps, mapDispatchToProps)(Model);

export {
	ModelFilter
}