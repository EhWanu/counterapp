import React, { useState } from 'react'

export default function CounterHooks({ initialCount}) {
    useState({ count: initialCount })
    return (
        <div>
        <button>-</button>
        <span>{initialCount}</span>
        <button>+</button>
    </div>
    )
}
