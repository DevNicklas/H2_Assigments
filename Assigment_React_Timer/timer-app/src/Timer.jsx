import React, { useState, useEffect } from "react";

function Timer() {

    const [count, setCount] = useState(0);

    // Update count every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(previouslyCount => previouslyCount + 1);
        }, 1000);

        // When component unmounts then clean up interval.
        return () => clearInterval(timer);
    }, []);

    return(
        <p>{count}</p>
    );
}

export default Timer