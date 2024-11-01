import React from 'react';

function Increment({ onIncrement }) {
    return <button className='mybutton' onClick={onIncrement}>+</button>;
}
export default Increment;