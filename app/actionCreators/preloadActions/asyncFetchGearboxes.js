import { REQUEST_GEARBOXES, RECEIVE_GEARBOXES} from '../../actions/asyncFilterActions';
import { asyncFetchPlainData } from './asyncFetchPlainData';

export const fetchGearboxesIfNeeded = () => {
	return asyncFetchPlainData(REQUEST_GEARBOXES, RECEIVE_GEARBOXES, 'categories/1/gearboxes')
};