import {
	REQUEST_GEARBOXES,
	RECEIVE_GEARBOXES
} from '../../actions/asyncFilterActions'

import { preloadDataReducer } from './preloadDataReducer';

const gearboxes = preloadDataReducer(REQUEST_GEARBOXES, RECEIVE_GEARBOXES);

export {
	gearboxes
}