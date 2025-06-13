import { SET_AUTH_USER, LOGOUT_USER } from '../actions/auth';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.id;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default authReducer;
