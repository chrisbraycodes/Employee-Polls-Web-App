const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
      // If the action is a function, execute it with `dispatch` and `getState`
      return action(store.dispatch, store.getState);
    }
    // If the action is not a function, pass it to the next middleware or reducer
    return next(action);
  };
  
  export default thunk;
  