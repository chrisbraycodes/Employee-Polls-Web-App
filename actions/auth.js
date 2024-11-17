export const SET_AUTH_USER = 'SET_AUTH_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const setAuthUser = (id) => ({
  type: SET_AUTH_USER,
  id,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
