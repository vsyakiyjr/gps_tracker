import axios from 'axios';

import {axiosConfig, getParams, URL} from './index';

export function getLogin(body) {
  return axios.get(`${URL}/login${getParams(body.query)}`, axiosConfig);
}
