import {
	REQUEST_STATES,
	RECEIVE_STATES
} from '../../actions/asyncFilterActions'

import { preloadDataReducer } from './preloadDataReducer';

const states = preloadDataReducer(REQUEST_STATES, RECEIVE_STATES);

export {
	states
}