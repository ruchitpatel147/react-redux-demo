import {BUY_ICE} from './iceCreamType';

const initialState = {
  numberOfIce: 20
}

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numberOfIce: state.numberOfIce - 1
      }
    default:
      return state

  }
}

export default iceReducer;