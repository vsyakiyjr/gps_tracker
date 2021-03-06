import {put} from 'redux-saga/effects';

import {_catch} from '../../helpers';
import * as Api from '../api/user';

export function* fetchLogin(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const login = yield Api.postLogin(action.data);
    yield put({
      type: 'reduceLogin',
      data: login.data.data,
    });
  } catch (error) {
    yield* _catch(error, 'fetchLogin');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchLogout(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    yield Api.postLogout(action.data);
    yield put({
      type: 'reduceLogout',
    });
  } catch (error) {
    yield* _catch(error, 'fetchLogout');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
