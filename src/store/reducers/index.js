import {combineReducers} from 'redux';

import networkIndicator from './networkIndicator';

import user from './user';

export default combineReducers({
  networkIndicator,
  user,
});
