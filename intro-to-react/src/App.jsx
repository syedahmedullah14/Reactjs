import React, { useState } from 'react';
import './Counter.css'; // Assume you have a Counter.css file for styling

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  return(
    <div className='flex flex-col-1 justify-center'>
    <h1>Counter App</h1>
    <p>Count: {count} </p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
    
  )
}

export default Counter;