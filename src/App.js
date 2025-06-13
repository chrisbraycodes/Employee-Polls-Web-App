import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchPolls } from './actions/polls';
import { handleFetchUsers } from './actions/users';
import PollDetails from './components/PollDetails';
import Home from './components/Home';
import Login from './components/Login';
import NewPoll from './components/NewPoll';
import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(handleFetchUsers());
    dispatch(handleFetchPolls());
  }, [dispatch]);

  return (
    <Router>
      {authUser && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/questions/:id" element={authUser ? <PollDetails /> : <Navigate to="/login" />} />
        <Route path="/add" element={authUser ? <NewPoll /> : <Navigate to="/login" />} />
        <Route path="/leaderboard" element={authUser ? <Leaderboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
