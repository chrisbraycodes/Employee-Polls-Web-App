import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Poll = () => {
  const { questionId } = useParams();
  const question = useSelector((state) => state.polls[questionId]);
  const author = useSelector((state) => question ? state.users[question.author] : null);

  // Check if question and author exist
  if (!question || !author) {
    return <p>Loading poll...</p>;
  }

  return (
    <div>
      <h2>{author.name} asks:</h2>
      <p>{question.optionOne.text} or {question.optionTwo.text}?</p>
    </div>
  );
};

export default Poll;
