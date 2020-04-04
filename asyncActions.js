const {createStore, applyMiddleware} = require('redux');
const thunk = require('redux-thunk').default
const axios = require('axios')

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_DATA = 'FETCH_DATA';
const FETCH_ERROR = 'FETCH_ERROR';

function  fetchData(user) {
  return {
    type: FETCH_DATA,
    payload: user
  }
}

function  fetchReq() {
  return {
    type: FETCH_REQUEST
  }
}

function  fetchError(error) {
  return {
    type: FETCH_ERROR,
    payload: error
  }
}

const initialState = {
  loading: true,
  date: [],
  error: ''
}

const reducer = (state = initialState, action) => {
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
      loading: false,
      error: action.payload
    }
    default:
      return initialState

  }

}
const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchReq)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => dispatch(fetchData(response.data.map(a => a.id))))
      .catch(e => dispatch(fetchError('Error while retrieving')))
  }
}
const store = createStore(reducer, applyMiddleware(thunk));
console.log('Initial state', store.getState());

store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(fetchUsers())