import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

function reducer (state, actions) {
  switch (actions.type) {
    case "INCREMENT" :
      return state +1;

    case "DECREMENT" :
      return state -1;

    default:
      return state;
  }
}


function Counter() {
  const [number, dispatch] = useReducer(reducer, 0)

  const whenIncrease = () => {
    dispatch({ type:"INCREMENT" })
  }
  const whenDecrease = () => {
    dispatch({ type:"DECREMENT" })
  }

  return (
    <div>
      <div>
        <h1>{ number }</h1>
        <button onClick={whenIncrease}>+1</button>
        <button onClick={whenDecrease}>-1</button>
      </div>
      <Link to={'/'}>뒤로가기</Link>
    </div>
  );
}

export default Counter;