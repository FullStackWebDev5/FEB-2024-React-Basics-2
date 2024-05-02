import React from 'react'
import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p style={{ fontSize: '5em' }}>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Count