import React, { useEffect,useRef, useState } from 'react'

const Ref = () => {
    const [name, setName] = useState('')
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
        // if (inputRef.current.focus) {
            
        // }
    }, [name])
  return (
    <input type="text"
    ref={inputRef}
    value={name}
    onChange={((e) => setName(e.target.value))}
    placeholder={'name'} ></input>
  )
}

export default Ref