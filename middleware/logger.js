import { createStore, applyMiddleware } from 'redux';
import thunk from './middleware/thunk';
import logger from './middleware/logger';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
