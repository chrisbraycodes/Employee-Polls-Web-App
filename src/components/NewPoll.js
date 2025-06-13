import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddPoll } from '../actions/polls';
import { useNavigate } from 'react-router-dom';

const NewPoll = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authUser) {
      alert("Please log in to create a poll");
      navigate('/login');
      return;
    }
    await dispatch(handleAddPoll(optionOne, optionTwo));
    setOptionOne('');
    setOptionTwo('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Poll</h2>
      <input
        type="text"
        placeholder="Option One"
        value={optionOne}
        onChange={(e) => setOptionOne(e.target.value)}
      />
      <input
        type="text"
        placeholder="Option Two"
        value={optionTwo}
        onChange={(e) => setOptionTwo(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPoll;
