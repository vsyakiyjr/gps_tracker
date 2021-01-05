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
    case 'reduceEventType0':
    case 'reduceEventType1': {
      const index = state.cars.findIndex((e) => e._id === action.data.car_id);
      if (index >= 0) {
        state.cars[index] = {...state.cars[index], ...action.data};
      }
      return state;
    }
    case 'reduceCarId': {
      return {
        ...state,
        _id: action.data,
      };
    }
    case 'reduceEmptyCarId': {
      return {
        ...state,
        _id: '',
      };
    }
    case 'reduceLogout': {
      return initialState;
    }
    case 'reduceMovingCar': {
      const index = state.cars.findIndex((e) => e._id === action.data.car_id);
      if (index >= 0) {
        console.log(state.cars[index]);
        console.log(action.data);
        let {latest_movings} = state.cars[index];
        if (latest_movings.length > 2) {
          latest_movings.splice(-1);
        }
        state.cars[index].latest_movings = [action.data, ...latest_movings];
        return {
          ...state,
          cars: [...state.cars],
        };
      }
      return state;
    }
    default:
      return state;
  }
}
