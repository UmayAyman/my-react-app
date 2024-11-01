import React, { useState } from 'react';
import Decrement from './decrement';
import Increment from './increment';

function Counter() {
const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
};

const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
};

return (
    <div className="buttons">
            <Increment onIncrement={handleIncrement} />
            <h2>Count: {count}</h2>
            <Decrement onDecrement={handleDecrement} />
    </div>
);
}

// const handleIncrement = () => setCount(count + 1);
// const handleDecrement = () => setCount(count - 1);

// return (
//     <div class = "buttons">
//         <Increment onIncrement={handleIncrement} />
//         <h2>Count: {count} </h2>
//         <Decrement onDecrement={handleDecrement} />
//     </div>
// );
// }

export default Counter;
