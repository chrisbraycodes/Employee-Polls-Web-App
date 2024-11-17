import { _getUsers } from '../utils/_DATA';

// Action Types
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

// Action Creators

// Action to receive users
export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

// Action to save a user's answer to a poll
export const saveUserAnswer = (authedUser, qid, answer) => ({
  type: SAVE_USER_ANSWER,
  authedUser,
  qid,
  answer,
});

// Action to add a new question created by a user
export const addUserQuestion = (authedUser, questionId) => ({
  type: ADD_USER_QUESTION,
  authedUser,
  questionId,
});

// Thunk action to fetch users from the backend
export const handleFetchUsers = () => {
  return async (dispatch) => {
    try {
      const users = await _getUsers();
      dispatch(receiveUsers(users));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
};
