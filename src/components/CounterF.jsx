import React, { useState } from "react";
import CounterText from "./CounterText";

// STATELESS COMPONENT
const CounterF = () => {
  const [count, setCount] = useState(0);
  // const [nama, setNama] = useState(second)

  let handleMinus = () => {
    setCount ((prevCount) =>{
      if (prevCount > 0) {
        return prevCount - 1
      }
  })
  };

  let handlePlus = () => {
    setCount ((prevCount) =>{
      return prevCount + 1
    })
  };

  return (
    <div className="flex gap-10 items-center">
      <button
        className="w-10 bg bg-teal-500 text-slate-100 font-bold rounded-lg"
        onClick={handleMinus}
      >
        -
      </button>
      <p>{count}</p> {/GAK PERLU THIS/}
      <button
        className="w-10 bg bg-teal-500 text-slate-100 font-bold rounded-lg"
        onClick={handlePlus}
      >
        +
      </button>
      <CounterText angka = {count}/>
    </div>
  );
};

export default CounterF;