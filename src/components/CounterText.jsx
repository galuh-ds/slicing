import React from 'react'


// PROPS =  kita bisa mengoper state ke component laen
// const CounterText = (props) => {
//   return (
//     <div className='box-2 px-2 py-2'>{props.angka}</div>
//   )
// }

const CounterText = ({angka}) => {
    return (
      <div className='box-2 px-2 py-2'>{angka}</div>
    )
  }
export default CounterText