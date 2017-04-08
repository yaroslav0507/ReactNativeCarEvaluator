const { combineReducers } = require('redux');

import { transport, transports } from './transportTypeReducers';

export default combineReducers({
  transport,
  transports
})