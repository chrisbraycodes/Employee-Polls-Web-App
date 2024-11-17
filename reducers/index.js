import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import pollsReducer from './pollsReducer';

export default combineReducers({
  authUser: authReducer,
  users: usersReducer,
  polls: pollsReducer,
});
