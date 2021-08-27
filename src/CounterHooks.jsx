import React, { useState } from 'react'

export default function CounterHooks({ initialCount}) {
    const [count, setCount] = useState(initialCount)
    console.log('CounterHooks Render')
    return (
        <div>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
    )
}
