import React from 'react'
import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const increment5 = () => {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <p style={{ fontSize: '5em' }}>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={increment5}>Increment 5</button>
    </div>
  )
}

export default Count


// State Handlers -> Asynchronous in nature