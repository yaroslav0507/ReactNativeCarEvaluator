import { REQUEST_STATES, RECEIVE_STATES} from '../../actions/asyncFilterActions';
import { asyncFetchPlainData } from './asyncFetchPlainData';

export const fetchStatesIfNeeded = () => {
	return asyncFetchPlainData(REQUEST_STATES, RECEIVE_STATES, 'states')
};