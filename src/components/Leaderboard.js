import React from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const users = useSelector((state) => state.users);

  if (!users || Object.keys(users).length === 0) {
    return <p>Loading users...</p>;
  }

  const sortedUsers = Object.values(users).sort(
    (a, b) => 
      (Object.keys(b.answers).length + b.questions.length) - 
      (Object.keys(a.answers).length + a.questions.length)
  );

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            {user.name} - Questions: {user.questions.length}, Answers: {Object.keys(user.answers).length}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
