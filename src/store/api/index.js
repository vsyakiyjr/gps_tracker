export const URL = 'http://88.198.52.78:5000';

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

export const axiosConfigOctetStream = (token, contentType) => {
  const headers = {
    headers: {
      'Content-Type': contentType,
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
