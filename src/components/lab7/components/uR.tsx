// src/components/uR.tsx
import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function counterReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);  // 0 to początkowy stan

  return (
    <div>
      <p>Aktualny stan: {count}</p>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+1</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-1</button>
    </div>
  );
}

export default Counter;
