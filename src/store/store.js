import { createStore } from 'redux';
import rootReducer from '../reducers';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

const initialState = {
    authUser: 'sarahedo', // or any valid user ID
    users: {},
    questions: {},
  };
  