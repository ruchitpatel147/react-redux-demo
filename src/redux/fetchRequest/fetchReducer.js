import {FETCH_REQUEST,FETCH_DATA,FETCH_ERROR} from './fetchType'
const initialState = {
  loading: false,
  data: [],
  msg: ''
}
const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_DATA:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case FETCH_ERROR:
      return {
        ...state,
        msg: action.payload
      }
    default:
      return state
  }
}

export default fetchReducer