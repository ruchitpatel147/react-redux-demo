import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import cakeReducer from './cakes/cakeReducer';
import iceReducer from './IceCream/iceReducer';
import fetchReducer from './fetchRequest/fetchReducer';

const combine = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  fetch: fetchReducer
})
const store = createStore(combine, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;