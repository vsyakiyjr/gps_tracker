import {combineReducers} from 'redux';

import networkIndicator from './networkIndicator';
import user from './user';
import cars from './cars';
import events from './events';

export default combineReducers({
  networkIndicator,
  user,
  cars,
  events,
});
