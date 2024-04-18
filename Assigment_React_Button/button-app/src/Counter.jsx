import React, { useState } from 'react';

function Counter() {

    const startCount = 0;
    const [count, setCount] = useState(startCount);

    function increaseCount() {
        setCount(previousCount => previousCount + 1);
    }

    function decreaseCount() {
        setCount(previousCount => previousCount - 1);
    }

    function resetCount() {
        setCount(startCount);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Add +1</button>
            <button onClick={decreaseCount}>Remove -1</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default Counter