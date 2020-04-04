import {FETCH_ERROR,FETCH_DATA,FETCH_REQUEST} from './fetchType';
import axios from 'axios'

const fetchError = () => {
  return {
    type: FETCH_ERROR
  }
}

const fetchData = (payload) => {
  return {
    type: FETCH_DATA,
    payload: payload
  }
}

const fetchRequest = (payload) => {
  return {
    type: FETCH_REQUEST,
    payload: payload
  }
}

const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch(fetchData(res.data)))
      .catch(e => dispatch(fetchError('Error while retrieving')))
  }
}

export {fetchError, fetchData, fetchRequest, fetchUser}