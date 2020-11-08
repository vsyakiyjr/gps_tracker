const initialState = [];

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'reduceEvents': {
      return action.data;
    }
    case 'reduceLogout': {
      return initialState;
    }
    default:
      return state;
  }
}
