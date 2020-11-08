import {takeLatest} from 'redux-saga/effects';
import * as User from './user';
import * as Cars from './cars';

export default function* dataSaga() {
  yield takeLatest('fetchLogin', User.fetchLogin);
  yield takeLatest('fetchLogout', User.fetchLogout);

  yield takeLatest('fetchCars', Cars.fetchCars);
  yield takeLatest('fetchCarsId', Cars.fetchCarsId);
}
