import React, { useState } from 'react';
import '../style.css';

function useCustomCount(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };

  const resetCount = () => {
    setCount(0);
  };

  return { setCount, count, increaseCount, decreaseCount, resetCount };
}

function CustomCounter() {
  const { setCount, count, increaseCount, decreaseCount, resetCount } =
    useCustomCount(0);
  const customValue = useState(10);

  return (
    <div className="countContainer">
      <h1>Custom Counter Page</h1>
      <p className="numCount">Count: {count}</p>
      <div className="buttonContainer">
        <button className="increase" onClick={increaseCount}>
          Increase
        </button>
        <button className="increase" onClick={decreaseCount}>
          Decrease
        </button>
        <button className="increase" onClick={resetCount}>
          Reset
        </button>
        <button
          className="increase"
          onClick={() => setCount((customValue) => (customValue = 10))}
        >
          setValue
        </button>
      </div>
    </div>
  );
}

export default CustomCounter;
