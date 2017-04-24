import { SearchResults } from './SearchResults';
import { connect } from 'react-redux';

import { fetchAveragePrice } from '../../actionCreators/async/asyncFetchPrices';

const mapStateToProps = (state) => {
	return {
		price: state.price
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onInit: () => {
			dispatch(fetchAveragePrice());
		},
		onBackButtonClick: (query) => {
			ownProps._goBack();
		},
		navigate: (route) => {
			ownProps.navigation.navigate(route)
		}
	}
};

const SearchResultsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResults);

export { SearchResultsContainer };
