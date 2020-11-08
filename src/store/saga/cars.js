import {put} from 'redux-saga/effects';

import {_catch} from '../../helpers';
import * as Api from '../api/cars';

export function* fetchCars(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const cars = yield Api.getCars(action.data);

    yield put({
      type: 'reduceCars',
      data: cars.data.data,
    });
  } catch (error) {
    yield* _catch(error, 'fetchCars');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchCarsId(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const car = yield Api.getCarsId(action.data);
    console.log(car);
  } catch (error) {
    yield* _catch(error, 'fetchCarsId');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
