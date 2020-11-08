import {combineReducers} from 'redux';

import networkIndicator from './networkIndicator';
import user from './user';
import cars from './cars';

export default combineReducers({
  networkIndicator,
  user,
  cars,
});
