import React, {createContext, useContext, useState } from 'react'

const Context = createContext();



export const StateContext = ({Children}) => {
  const [amount, setAmount] = useState(0)
  const [count, setCount] = useState(0)
  

  const handleMinus = () => {
    if (count > 0) {
        setCount ((prevCount) =>{
          return prevCount - 1
        })
      }
  };
  
  const handlePlus = () => {
    setCount ((prevCount) =>{
      return prevCount + 1
    })
  };

  return (
    <CounterContext.Provider value={{amount,setAmount, count, setCount, handleMinus, 
      handlePlus}}>{Children}
      </CounterContext.Provider>
  )
}

export const useStateContext = () => useContext(CounterContext)




