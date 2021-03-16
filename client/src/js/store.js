import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const middleware = [thunk]

const intialState = {}

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(rootReducer, intialState, composeEnhancers(

    applyMiddleware(...middleware)
  ));

export default store;