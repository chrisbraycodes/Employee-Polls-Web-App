import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '../actions/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (id) => {
    dispatch(setAuthUser(id));
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <select onChange={(e) => handleLogin(e.target.value)}>
        <option value="">Select a user</option>
        {users && Object.keys(users).map((userId) => (
          <option key={userId} value={userId}>
            {users[userId].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Login;
