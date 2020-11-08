export const URL = 'http://376174.msk-ovz.ru/api';

export const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const axiosConfigToken = (token) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return headers;
};

export const getParams = (data) => {
  let params = [];

  if (data) {
    Object.keys(data).forEach((prop) => {
      params = [...params, `${prop}=${data[prop]}`];
    });
  }

  if (params.length > 0) {
    return `?${params.join('&')}`;
  }

  return '';
};
