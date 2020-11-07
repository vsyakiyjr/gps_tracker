import {put} from 'redux-saga/effects';

import {_catch} from '../../helpers';
import * as Api from '../api/user';

export function* fetchLogin(action) {
  try {
    const {data} = action;
    yield put({type: 'networkIndicator', data: true});
    const login = yield Api.postLogin({data});
    console.log(login);
    // const login = yield Api.getLogin({
    //   query: {
    //     userName,
    //     password,
    //   },
    // });
    // const user = yield Api.getUser({access_token: login.data.access_token});
    // yield put({
    //   type: 'reduceLogin',
    //   data: {...user.data, ...login.data},
    // });
  } catch (error) {
    yield* _catch(error, 'fetchLogin');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
