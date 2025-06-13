import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);

test('renders home page', async () => {
  const store = mockStore({
    authUser: 'sarahedo',
    users: {
      sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        answers: {},
        questions: []
      }
    },
    polls: {
      poll1: {
        id: 'poll1',
        author: 'sarahedo',
        optionOne: { votes: [], text: 'Option 1' },
        optionTwo: { votes: [], text: 'Option 2' },
        timestamp: 1467166872634
      }
    }
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Wait for the "Unanswered Polls" text to appear
  await waitFor(() => {
    const element = screen.getByText(/Unanswered Polls/i);
    expect(element).toBeInTheDocument();
  });
});
