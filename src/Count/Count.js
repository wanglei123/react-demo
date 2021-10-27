import React, { useState } from 'react';
import useCounter from './useCount';


export default function Counter() {
  const {count, increment, decrement, reset} = useCounter();
  return (
    <div>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
