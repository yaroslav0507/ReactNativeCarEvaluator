import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES} from '../../actions/asyncFilterActions';
import { asyncFetchPlainData } from './asyncFetchPlainData';

export const fetchCategoriesIfNeeded = () => {
	return asyncFetchPlainData(REQUEST_CATEGORIES, RECEIVE_CATEGORIES, 'categories');
};