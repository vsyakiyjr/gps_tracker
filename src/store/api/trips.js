import axios from 'axios';

import {axiosConfigToken, getParams, URL} from './index';

export function getTrips(body) {
  return axios.get(
    `${URL}/trips${getParams(body.query)}`,
    axiosConfigToken(body.access_token),
  );
}
