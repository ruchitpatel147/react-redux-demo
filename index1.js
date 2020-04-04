const {applyMiddleware, combineReducers, createStore} = require('redux');
const reduxLogger = require('redux-logger');

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const logger = reduxLogger.createLogger();

function BuyCake () {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function BuyIceCream () {
  return {
    type: BUY_ICECREAM,
    info: 'Second redux action'
  }
}

const initialCakeState = {
  NumberOfCakes: 10
}
const initialIceState = {
  NumberOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        NumberOfCakes: state.NumberOfCakes - 1
      }
    default:
      return state

  }
}

const iceReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        NumberOfIceCream: state.NumberOfIceCream - 1
      }
    default:
      return state

  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer
});
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Intinal store ', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(BuyCake())
store.dispatch(BuyIceCream())
store.dispatch(BuyCake())
store.dispatch(BuyCake())
unsubscribe()

