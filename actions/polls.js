import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

// Action Types
export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER';

// Action Creators
export const receivePolls = (polls) => ({
  type: RECEIVE_POLLS,
  polls,
});

export const addPoll = (poll) => ({
  type: ADD_POLL,
  poll,
});

export const savePollAnswer = ({ authedUser, qid, answer }) => ({
  type: SAVE_POLL_ANSWER,
  authedUser,
  qid,
  answer,
});

// Thunk Action for Fetching Questions
export const handleFetchPolls = () => {
  return async (dispatch) => {
    try {
      const questions = await _getQuestions();
      console.log('Fetched questions:', questions);
      dispatch(receivePolls(questions));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };
};

// Thunk Action for Adding a New Poll
export const handleAddPoll = (optionOneText, optionTwoText) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) return;
    const newQuestion = await _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authUser,
    });
    dispatch(addPoll(newQuestion));
  };
};

// Thunk Action for Saving Poll Answer
export const handleSavePollAnswer = (qid, answer) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    await _saveQuestionAnswer({ authedUser: authUser, qid, answer });
    dispatch(savePollAnswer({ authedUser: authUser, qid, answer }));
  };
};
