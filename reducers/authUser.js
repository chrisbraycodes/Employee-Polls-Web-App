import { SET_AUTH_USER, LOGOUT_USER } from '../actions/auth';

export default function authUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      console.log("Setting authenticated user:", action.id);
      return action.id;
    case LOGOUT_USER:
      console.log("Logging out user");
      return null;
    default:
      return state;
  }
}
