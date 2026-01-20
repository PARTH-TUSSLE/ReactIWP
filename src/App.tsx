import { useEffect, useState } from "react"

function App() {

  const[showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowTimer((prev) => !prev )
    }, 5000);
  }, [])

  return <div>{showTimer && <Timer />}</div>;
}

function Timer () {

  const [count, setCount] = useState(0);

  function increaseCount() {
    console.log(`from inside the clock`) // still logs even after unmount
    setCount((prev) => prev + 1); // if we dont use the setCount(prev => prev + 1) then pass the count state variable inside the dependency array
  }

  useEffect(() => {
    let clock = setInterval(increaseCount, 1000);
    return () => {
      clearInterval(clock); // cleanup function 
    }
  }, []); // effect will run only on mount because the dependency array is empty or else the effect will run whenever the variables inside the dependency array changes

  return <div>{count} seconds elapsed!</div>;
}

export default App
