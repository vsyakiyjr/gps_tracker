import {put} from 'redux-saga/effects';
import Toast from 'react-native-simple-toast';

export function* _catch(error, title) {
  console.log(`${title} ->`, error.response);
  if (error.response) {
    switch (error.response.status) {
      case 401: {
        yield put({type: 'reduceLogout'});
        return;
      }
      default: {
        Toast.show(error.message);
      }
    }
  } else {
    console.log(`${title} ->`, error);
    Toast.show(error.message);
  }
}
