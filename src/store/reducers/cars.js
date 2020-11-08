const initialState = {
  _id: '',
  cars: [],
};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'reduceCars': {
      return {
        ...state,
        cars: action.data,
      };
    }
    case 'reduceCarId': {
      return {
        ...state,
        _id: action.data,
      };
    }
    case 'reduceLogout': {
      return initialState;
    }
    default:
      return state;
  }
}
