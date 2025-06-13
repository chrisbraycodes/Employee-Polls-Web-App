import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

const Home = () => {
  const authUser = useSelector((state) => state.authUser);
  const polls = useSelector((state) => state.polls);

  // Redirect to login if not authenticated
  if (!authUser) {
    return <Navigate to="/login" />;
  }

  console.log('Polls in Home:', polls);

  if (!polls || Object.keys(polls).length === 0) {
    return <p>Loading polls...</p>;
  }

  return (
    <div>
      <h2>Unanswered Polls</h2>
      {Object.keys(polls).map((pollId) => (
        <Link key={pollId} to={`/questions/${pollId}`}>
          <div>
            {polls[pollId].optionOne.text} or {polls[pollId].optionTwo.text}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
