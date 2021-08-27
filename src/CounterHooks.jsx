import React from 'react'

export default function CounterHooks({ initialCount}) {
    return (
        <div>
        <button>-</button>
        <span>{initialCount}</span>
        <button>+</button>
    </div>
    )
}
