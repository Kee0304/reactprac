import React, { useReducer } from 'react';
import { useSearchParams } from "react-router-dom"


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
  const [searchParams] = useSearchParams();

  const [number, dispatch] = useReducer(reducer, 0)


  const whenIncrease = () => {
    dispatch({ type:"INCREMENT" })
    console.log(searchParams)
  }
  const whenDecrease = () => {
    dispatch({ type:"DECREMENT" })
    console.log(searchParams)
  }

  return (
    <div>
      <h1>{ number }</h1>
      <button onClick={whenIncrease}>+1</button>
      <button onClick={whenDecrease}>-1</button>
      <h2>{ searchParams }</h2>
    </div>
  );
}

export default Counter;