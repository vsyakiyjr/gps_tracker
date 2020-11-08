import axios from 'axios';

import {axiosConfigToken, getParams, URL} from './index';

export function getEvents(body) {
  return axios.get(
    `${URL}/events${getParams(body.query)}`,
    axiosConfigToken(body.access_token),
  );
}
