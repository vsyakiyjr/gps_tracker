import axios from 'axios';

import {axiosConfig, URL} from './index';

export function postLogin(body) {
  return axios.post(`${URL}/login`, body.data, axiosConfig);
}
