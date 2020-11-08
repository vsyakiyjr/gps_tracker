export function fetchLogin(data) {
  return {
    type: 'fetchLogin',
    data,
  };
}
export function fetchLogout(data) {
  return {
    type: 'fetchLogout',
    data,
  };
}
