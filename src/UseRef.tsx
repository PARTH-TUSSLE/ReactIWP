import React, { useState, type MouseEventHandler } from 'react'
import { useRef } from 'react';

// useRef is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but do not trigger a re-render when the value changes

function UseRef() {

  
    const [count, setCount] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

  function focusOnInput () {
    inputRef.current?.focus(); // .current refers to the current value of the reference variable

    // there are 3 ways to create a variable in React
    // 1. raw variable - let x = 1, -> rarely used (because it gets re-initialized with every re-render)
    // 2. using state variables - const[x setX] = useState(0); -> change causes re-renders
    // 3. using refs - xref = useRef(0); -> change doesn't trigger re-renders
  }


  // creating a clock with start and stop functionalities

  const timerRef = useRef(0); // we didn't use a state variable because initially to set the value of the variable for the first time, an extra re-render would've happened 

  function startClock() {
    let timerVal = setInterval(() => {
      setCount((x) => x + 1);
    }, 1000);
    timerRef.current = timerVal;
  }

  function stopClock () {
    clearInterval(timerRef.current);
  }

  return (
    <div>
      {/* <input ref={inputRef} type="text" /> &nbsp;
      <input type="text" /> &nbsp;
      <button onClick={focusOnInput} >submit</button> */}
      {count}
      <br />
      <button onClick={ () => startClock() } >Start</button> &nbsp;
      <button onClick={ () => stopClock() } >Stop</button>
    </div>
  );
}

export default UseRef;