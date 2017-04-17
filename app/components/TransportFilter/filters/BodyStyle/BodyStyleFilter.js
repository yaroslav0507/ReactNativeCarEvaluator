import { connect } from 'react-redux';
import { BodyStyle } from './BodyStyle';
import {
	selectBodyStyle,
	clearBodyStyle
} from '../../../../actionCreators/transportFilterActionCreators';

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.filters.category,
		selectedBodyStyle: state.filters.bodyStyle,
		bodyStyles: state.data.bodyStyles
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onBodyStyleSelected: (bodyStyle) => {
			dispatch(selectBodyStyle(bodyStyle))
		},
		onBodyStyleCleared: () => {
			dispatch(clearBodyStyle())
		}
	}
};


const BodyStyleFilter = connect(mapStateToProps, mapDispatchToProps)(BodyStyle);

export {
	BodyStyleFilter
}