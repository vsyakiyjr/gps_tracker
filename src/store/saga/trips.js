import {put} from 'redux-saga/effects';

import {_catch} from '../../helpers';
import * as Api from '../api/trips';

export function* fetchTrips(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const trips = yield Api.getTrips(action.data);
    console.log(trips);
    yield put({
      type: 'reduceTrips',
      data: trips.data.data,
    });
  } catch (error) {
    yield* _catch(error, 'fetchTrips');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
