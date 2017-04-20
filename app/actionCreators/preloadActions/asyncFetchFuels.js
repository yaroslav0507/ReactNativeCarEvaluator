import { REQUEST_FUELS, RECEIVE_FUELS} from '../../actions/asyncFilterActions';
import { asyncFetchPlainData } from './asyncFetchPlainData';

export const fetchFuelsIfNeeded = () => {
	return asyncFetchPlainData(REQUEST_FUELS, RECEIVE_FUELS, 'fuels')
};