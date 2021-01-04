export function fetchCars(data) {
  return {
    type: 'fetchCars',
    data,
  };
}
export function fetchCarsId(data) {
  return {
    type: 'fetchCarsId',
    data,
  };
}
export function reduceCarId(data) {
  return {
    type: 'reduceCarId',
    data,
  };
}
export function reduceEmptyCarId() {
  return {
    type: 'reduceEmptyCarId',
  };
}
export function reduceMovingCar(data) {
  return {
    type: 'reduceMovingCar',
    data,
  };
}
