import {takeLatest} from 'redux-saga/effects';
import * as User from './user';

export default function* dataSaga() {
  yield takeLatest('fetchLogin', User.fetchLogin);
}
