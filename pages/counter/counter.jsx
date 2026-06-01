import React from 'react'
import { useState } from 'react'
import "./counter.css"

const Counter = () => {
    const [num, setNum] = useState(0)
    const inc = () => {
        setNum(num + 1)
    }
    const dec = () => {
        setNum(num - 1)
    }
    const reset = () => {
        setNum(0)
    }
    return (
        <div className="counter-div">
            <div className='counter'>
                <h1>Counter : {num}</h1><br />
                <button onClick={inc}>Increment</button>
                <button onClick={dec}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
