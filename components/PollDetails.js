import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handleSavePollAnswer } from '../actions/polls';

const PollDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.polls[id]);
  const authUser = useSelector((state) => state.authUser);

  if (!authUser) {
    return <p>Please log in to view this poll.</p>;
  }

  if (!question) {
    return <p>Poll not found. Please check the URL.</p>;
  }

  const handleVote = (answer) => {
    dispatch(handleSavePollAnswer(id, answer));
  };

  return (
    <div>
      <h2>{question.author} asks:</h2>
      <button onClick={() => handleVote('optionOne')}>{question.optionOne.text}</button>
      <button onClick={() => handleVote('optionTwo')}>{question.optionTwo.text}</button>
    </div>
  );
};

export default PollDetails;
