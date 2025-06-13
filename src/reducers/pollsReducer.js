import { RECEIVE_POLLS, ADD_POLL, SAVE_POLL_ANSWER } from '../actions/polls';

const pollsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POLLS:
      console.log('RECEIVE_POLLS:', action.polls);
      return {
        ...state,
        ...action.polls,
      };

    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };

    case SAVE_POLL_ANSWER:
      const { authedUser, qid, answer } = action;
      if (!state[qid]) return state;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser),
          },
        },
      };

    default:
      return state;
  }
};

export default pollsReducer;
