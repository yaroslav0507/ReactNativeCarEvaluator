import { TransportFilter } from './TransportFilter';
import { connect } from 'react-redux';
import {
	selectMark,
	clearMark,
	selectModel,
	clearModel
} from '../../actionCreators/transportFilterActionCreators';
import { fetchCategoriesIfNeeded } from '../../actionCreators/asyncFetchCategories';
import { fetchModelsIfNeeded } from '../../actionCreators/asyncFetchModels';
import { fetchAveragePrice } from '../../actionCreators/asyncFetchPrices';

const mapStateToProps = (state) => {
  return {
		marks: state.data.marks,
		models: state.data.models,
		filters: state.filters,
		price: state.price
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  	onViewLoaded: () => {
  		dispatch(fetchCategoriesIfNeeded())
		},
		onMarkSelected: (mark) => {
			dispatch(selectMark(mark));
			dispatch(clearModel());
			dispatch(fetchModelsIfNeeded());
		},
		onMarkCleared: () => {
			dispatch(clearMark());
			dispatch(clearModel());
		},
		onModelSelected: (model) => {
			dispatch(selectModel(model));
		},
		onModelCleared: () => {
			dispatch(clearModel())
		},
		onGetAveragePrice: (query) => {
			dispatch(fetchAveragePrice(query))
		}
  }
};

const TransportFilterContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(TransportFilter);

export { TransportFilterContainer };
