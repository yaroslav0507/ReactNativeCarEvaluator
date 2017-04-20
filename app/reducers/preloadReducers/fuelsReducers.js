import {
	REQUEST_FUELS,
	RECEIVE_FUELS
} from '../../actions/asyncFilterActions'

import { preloadDataReducer } from './preloadDataReducer';

const fuels = preloadDataReducer(REQUEST_FUELS, RECEIVE_FUELS);

export {
	fuels
}