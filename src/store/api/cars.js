import axios from 'axios';

import {axiosConfigToken, getParams, URL} from './index';

export function getCars(body) {
  return axios.get(
    `${URL}/cars${getParams(body.query)}`,
    axiosConfigToken(body.access_token),
  );
}

export function getCarsId(body) {
  return axios.get(
    `${URL}/cars/${body._id}${getParams(body.query)}`,
    axiosConfigToken(body.access_token),
  );
}
