// in react, it returns first and effects execute after that

import { useEffect, useRef } from "react";

export function usePrev(currValue: number) {

  const currRef = useRef(0);
  console.log(`  useRef initialized with value
${currValue}`);

  useEffect( () => {
  currRef.current = currValue;
  console.log(`Set the value of ref to ${currValue}`)
  }, [currValue]);

  console.log(`Returned the ref with value ${currRef.current}`);
  return currRef.current;

}
