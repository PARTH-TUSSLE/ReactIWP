import React, { useContext } from "react";
import CountContext from "../contexts/CountContext";

function Blogs() {
  const ctx = useContext(CountContext);

  if (!ctx) return <div>Blogs page (no context)</div>;

  const { count, setCount } = ctx;

  return (
    <div>
      Blogs page — count: {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

export default Blogs;
