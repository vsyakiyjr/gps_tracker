import axios from 'axios';

import {axiosConfig, axiosConfigToken, URL} from './index';

export function postLogin(body) {
  return axios.post(`${URL}/login`, body.data, axiosConfig);
}

export function postLogout(body) {
  return axios.post(`${URL}/logout`, null, axiosConfigToken(body.access_token));
}
