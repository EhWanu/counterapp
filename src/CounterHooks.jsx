import React, { useState } from 'react'

export default function CounterHooks({ initialCount}) {
    const [state, setState] = useState({ count: initialCount })
    return (
        <div>
        <button>-</button>
        <span>{initialCount}</span>
        <button>+</button>
    </div>
    )
}
