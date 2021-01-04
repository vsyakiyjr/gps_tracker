import {combineReducers} from 'redux';

import networkIndicator from './networkIndicator';
import user from './user';
import cars from './cars';
import events from './events';
import trips from './trips';

export default combineReducers({
  networkIndicator,
  user,
  cars,
  events,
  trips,
});
