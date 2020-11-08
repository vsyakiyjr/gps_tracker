import {put} from 'redux-saga/effects';

import {_catch} from '../../helpers';
import * as Api from '../api/events';

export function* fetchEvents(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const events = yield Api.getEvents(action.data);

    yield put({
      type: 'reduceEvents',
      data: events.data.data,
    });
  } catch (error) {
    yield* _catch(error, 'fetchEvents');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
