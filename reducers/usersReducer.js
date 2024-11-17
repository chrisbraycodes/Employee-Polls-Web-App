import {
    RECEIVE_USERS,
    SAVE_USER_ANSWER,
    ADD_USER_QUESTION,
  } from '../actions/users';
  
  const usersReducer = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_USERS:
        return {
          ...state,
          ...action.users,
        };
  
      case SAVE_USER_ANSWER: {
        const { authedUser, qid, answer } = action;
  
        return {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer,
            },
          },
        };
      }
  
      case ADD_USER_QUESTION: {
        const { authedUser, questionId } = action;
  
        return {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            questions: state[authedUser].questions.concat(questionId),
          },
        };
      }
  
      default:
        return state;
    }
  };
  
  export default usersReducer;
  