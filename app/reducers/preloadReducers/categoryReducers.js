import {
	REQUEST_CATEGORIES,
	RECEIVE_CATEGORIES
} from '../../actions/asyncFilterActions'

import { preloadDataReducer } from './preloadDataReducer';

const categories = preloadDataReducer(REQUEST_CATEGORIES, RECEIVE_CATEGORIES);

export {
	categories
}