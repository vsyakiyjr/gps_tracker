const initialState = [];

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'reduceTrips': {
      return action.data;
    }
    case 'reduceCarId':
    case 'reduceEmptyCarId':
    case 'reduceLogout': {
      return initialState;
    }
    default:
      return state;
  }
}
