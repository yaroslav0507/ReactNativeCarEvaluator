import { SearchResults } from './SearchResults';
import { connect } from 'react-redux';

import { fetchAveragePrice } from '../../actionCreators/async/prices/asyncFetchPrices';

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
